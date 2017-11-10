## What is this?

[![Build Status](https://travis-ci.org/GerardVee/starter-kit.svg?branch=master)](https://travis-ci.org/GerardVee/starter-kit)
[![license](https://img.shields.io/github/license/GerardVee/starter-kit.svg)]()
[![Packagist](https://img.shields.io/packagist/v/GerardVee/starter-kit.svg)]()

An example app of my coding style/coding setup.

A starter-kit of sorts.

## Requirements

1. **node.js >= 8**

2. an .env file detailing the following:

* NODE_ENV (either dev for developement or production for production)
* MONGOOSE_CONNECT_LOCATION (the path to your mongodb connection)
* PORT_ADDR (port number for your app)
* BASE_URL (the base url for your online presence, usually http://localhost:{PORT_ADDR}/ for development, and an accessible url for production)

3. global installation of [localtunnel](https://github.com/localtunnel/localtunnel) for seeing the app anywhere and [json-server](https://github.com/typicode/json-server) for server mockups.

## What to modify
 
Anything you want. It's a starter-kit, have fun, and set up your own work!

## How to run

### Development

#### Server-side focused editing

```bash
yarn start
```

#### Client-side focused editing

```bash
yarn run dev
```

Edit to your heart's desire (reloading is enabled)!

#### Online testing

```bash
lt --port [PORT_ADDR]
```

then in another shell, edit your .env file to contain your new url as the BASE_URL, and run

```bash
yarn run dev
```

to make it available for all to see using localtunnel.

#### Testing

```bash
yarn run test
```

Eslint and jest will test our code!

### Production

run

```bash
yarn run build
yarn run start-prod
```

I will add more for Travis, and pushing our code to a remote server.

## Reason for creation

To have a semented code style/setup for [site](https://gerardvee.com/).

[repository](https://github.com/GerardVee/gerardvee.com) for reference