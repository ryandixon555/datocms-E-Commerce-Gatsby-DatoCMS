# Snipcart + Gatsby + DatoCMS example

This is a demo project to get you started with a static ecommerce site powered by [Gatsby](https://www.gatsbyjs.org/), [Snipcart](https://snipcart.com/) and [DatoCMS](https://www.datocms.com/).

## Usage

To run this project locally, install the dependencies of this project:

```
yarn install
```

Add an `.env` file containing the read-only API token of your DatoCMS site (set up with the demo button above):

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
yarn develop
```

To build the final, production ready static website:

```
yarn build
```

The final result will be saved in the `public` directory.