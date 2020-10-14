# Marios's Mart

A full stack Node.js and React shopping cart app. Developed to be responsive for both mobile and desktop access.

## Technologies Used

- React.js
- Node
- Express
- Postgresql
- HTML5
- CSS3
- PM2
- AWS S3

## Live Demo

Try the application live at [https://marios-mart.milamirian.com/](https://marios-mart.milamirian.com/)

## Features

- User can view the products for sale
- User can view the details of a product
- User can add an item to their cart
- User can view their cart summary
- User can place an order

## Preview

![marios-mart-gh](https://user-images.githubusercontent.com/62856013/96052554-aa1b4680-0e32-11eb-861c-56f072f4db6a.png)
![Screen Shot 2020-10-14 at 3 32 48 PM](https://user-images.githubusercontent.com/62856013/96052562-ac7da080-0e32-11eb-99c3-879198fe3733.png)
![Screen Shot 2020-10-14 at 3 32 57 PM](https://user-images.githubusercontent.com/62856013/96052567-af789100-0e32-11eb-92cf-519c8abdcbf3.png)
![Screen Shot 2020-10-14 at 3 33 12 PM](https://user-images.githubusercontent.com/62856013/96052572-b1daeb00-0e32-11eb-8c37-13d4d0868921.png)
![Screen Shot 2020-10-14 at 3 33 25 PM](https://user-images.githubusercontent.com/62856013/96052577-b56e7200-0e32-11eb-9781-feec09287492.png)


## Development

#### System Requirements

- npm 6 or higher
- Postgresql 10 or higher

#### Getting Started

1. This application requires the use of AWS S3, 
   
   Please have an AWS Access ID, Access Key, and a Bucket name.

2. Clone the repository.

    ```shell
    https://github.com/mil-amirian/marios-mart.git
    cd marios-mart
    ```

3. Install all dependencies with NPM.

    ```shell
    npm install
    ```

4. Create environment variables.

    1. Clone the `env.example.config` file
    1. Name the cloned file to `.env`
    1. Edit the `.env` to provide your credentials

5. Import the example database to Postgresql located in `database/dump.sql`.


6. Run the custom express server.

    ```shell
    npm run dev
    ```

7. Once started you can view the application by opening http://localhost:3000 in your browser.

## Links & socials

Portfolio: https://milamirian.com

LinkedIn: https://www.linkedin.com/in/milamirian/

Twitter: https://twitter.com/mamirian2
