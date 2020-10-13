# Marios's Mart

A full stack Node.js and React shopping cart app. Developed to be responsive for both mobile and desktop access.

## Technologies Used

- React.js
- Node
- Express
- Postgresql
- Multer
- HTML5
- CSS3
- PM2
- AWS S3

## Live Demo

Try the application live at [https://marios-mart.milamirian.com/](https://marios-mart.milamirian.com/)

## Features

- User can login to ADMIN or EMPLOYEE interface
- ADMIN can view main menu to navigate the app
- ADMIN can add new employee or admin account with a photo
- ADMIN can view individual employee accounts
- ADMIN can delete individual employee accounts
- ADMIN can view department head-counts within each department
- ADMIN can view total hours worked wages earned for all employees
- ADMIN can view hours worked and wages earned for each department
- ADMIN can view hours worked and wages earned for each employee
- EMPLOYEE can clock-in
- EMPLOYEE can clock-out
- User can log-out of the app



## Preview

![Screen Shot 2020-10-13 at 3 23 57 PM](https://user-images.githubusercontent.com/62856013/95922946-41b46280-0d69-11eb-9b91-6761960befe9.png)

## Development

#### System Requirements

- NPM 6 or higher
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
