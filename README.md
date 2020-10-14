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

![Screen Shot 2020-10-13 at 3 23 57 PM](https://user-images.githubusercontent.com/62856013/95922946-41b46280-0d69-11eb-9b91-6761960befe9.png)
![Screen Shot 2020-10-13 at 4 07 37 PM](https://user-images.githubusercontent.com/62856013/95925299-4c252b00-0d6e-11eb-9baf-882339a3b1f3.png)
![Screen Shot 2020-10-13 at 4 00 14 PM](https://user-images.githubusercontent.com/62856013/95925302-4deeee80-0d6e-11eb-9045-bed9ca78f9f3.png)
![Screen Shot 2020-10-13 at 4 00 37 PM](https://user-images.githubusercontent.com/62856013/95925304-4f201b80-0d6e-11eb-86c5-29fdf08e22ae.png)


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
