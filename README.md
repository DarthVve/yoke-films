# Yoke Films

This is fullstack application which employs Nest.js, React using Vite, Typescript, SCSS. It serves as an it serves as an api which generates a QR code which is going to return a shortened url which links to a movie listing rendered from a JSON file.

## API Documentation

It utilizes an API with end points that facilitates QR Code generation and returning 10 random movies from a JSON.

[Generate QR Code](https://yoke-films-api.vercel.app/qrcode-gen) This returns a QR Code with a shortened link embedded.

AND

[Get Films](https://yoke-films-api.vercel.app/films) This returns data in form of an array of 10 random films generated from a JSON.

## Environment Variables

### api

To run this project, you will need to add a an .env file with the 'api' folder, if not already present and add the following environment variable:

`WEB_URL` this is the base URL which the app allows to make requests via CORS.

`RAPID_API_KEY` this is the api key for your Rapid Api account which you need to use the service.

### web

To run this project, you will need to add a an .env file with the 'web' folder, if not already present and add the following environment variable:

`VITE_APP_BASE_URL` this is the base URL which the app uses to make api calls.

## Run Locally

Clone the project

```bash
  git clone https://github.com/DarthVve/lendsqr-fe-test.git
```

### cd api

You will also need to create an account with Rapid Api and subscribe to the service, depending on what you want to work with, in other to get your api keys and them to your .env file.

Go to the project directory

```bash
  cd api
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start:dev
```

### cd web

Go to the project directory

```bash
  cd web
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```

## Running Tests

Testing was carried out using Cypress/Jest To run tests, run the following command

```bash
  yarn test
```

## Deployment

This project was deployed on Vercel. Here are the links to the api and web apps.

### Nest API

<https://yoke-films-api.vercel.app>

### React Client

<https://yoke-films.vercel.app/>

## Usage

To run a production build run the command

```bash
    yarn build
```

When the server starts simply go to the root url.

## Authors

- [Vve](https://www.linkedin.com/in/viremaj)
