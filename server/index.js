require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
        select
            "productId",
            "name",
            "price",
            "image",
            "shortDescription"
        from "products"
        `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = parseInt(req.params.productId, 10);
  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({
      error: 'productId must be a positive integer'
    });
  }
  const sql = `
      select *
        from "products"
       where "productId" = $1
    `;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        res.status(404).json({
          error: `Cannot find product with productId ${productId}`
        });
      } else {
        res.json(product);
      }
    })
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  if (req.session.cartId) {
    const params = [req.session.cartId];
    const sql =
      `
      select  "c"."cartItemId",
              "c"."price",
              "p"."productId",
              "p"."image",
              "p"."name",
              "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
      where "c"."cartId" = $1
      `;
    db.query(sql, params)
      .then(result => {
        const cart = result.rows;
        res.json(cart);
      });
  } else {
    res.json([]);
  }

});

app.post('/api/cart', (req, res, next) => {
  const bodyRequest = parseInt(req.body.productId);
  let values;
  if (!bodyRequest || isNaN(bodyRequest)) {
    return res.status(400).json({
      error: 'Body must contain valid productId and be a positive integer'
    });
  } else {
    values = [parseInt(req.body.productId)];
  }
  const sql = `
      select *
        from "products"
        where "productId" = $1
    `;
  db.query(sql, values)
    .then(result1 => {
      if (result1.rows.length < 1) {
        throw new ClientError('productId is not valid', 404);
      } else {
        const price = result1.rows[0].price;
        if (req.session.cartId) {
          const priceAndCartId = {
            cartId: req.session.cartId,
            price: price
          };
          return priceAndCartId;
        } else {
          const updateCarts =
          `
          insert into "carts" ("cartId", "createdAt")
          values (default, default)
          returning "cartId"
          `;
          return db.query(updateCarts)
            .then(cartId => {
              const priceAndCartId = {
                cartId: cartId.rows[0].cartId,
                price: price
              };
              return priceAndCartId;
            });
        }
      }
    })
    .then(priceAndCartId => {
      const cartId = priceAndCartId.cartId;
      const price = priceAndCartId.price;
      req.session.cartId = cartId;
      const updateCartItems =
        `
          insert into "cartItems" ("cartId", "productId", "price")
          values ($1, $2, $3)
          returning "cartItemId"
          `;
      const params = [cartId, bodyRequest, price];

      return db.query(updateCartItems, params)
        .then(cartItemId => {
          const params = [cartItemId.rows[0].cartItemId];
          const getProductInfo =
            `
            select  "c"."cartItemId",
                    "c"."price",
                    "p"."productId",
                    "p"."image",
                    "p"."name",
                    "p"."shortDescription"
              from "cartItems" as "c"
              join "products" as "p" using ("productId")
            where "c"."cartItemId" = $1
          `;
          return db.query(getProductInfo, params)
            .then(productInfo => {
              res.status(201).send(productInfo.rows);
            });
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/orders', (req, res, next) => {
  if (!req.session.cartId) {
    return res.status(400).json({
      error: 'No orders available'
    });
  } else {
    const params = [req.session.cartId, req.body.name, req.body.creditCard, req.body.shippingAddress];
    const sql =
      `
      insert into "orders" ("cartId", "name", "creditCard", "shippingAddress")
      values ($1, $2, $3, $4)
      returning 
        "createdAt",
        "creditCard",
        "name",
        "orderId",
        "shippingAddress"
      `;
    db.query(sql, params)
      .then(orderInfo => {
        res.status(201).json(orderInfo.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
