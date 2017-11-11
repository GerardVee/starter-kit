## Starter-kit

[![Build Status](https://travis-ci.org/GerardVee/starter-kit.svg?branch=master)](https://travis-ci.org/GerardVee/starter-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An example app of my coding style/coding setup.

A starter-kit.

## Requirements

1. **node.js >= 8**

2. an .env file detailing the following:

* NODE_ENV (either dev for developement or production for production)
* MONGOOSE_CONNECT_LOCATION (the path to your mongodb connection)
* PORT_ADDR (port number for your app)
* BASE_URL (the base url for your online presence, usually http://localhost:{PORT_ADDR}/ for development, and an accessible url for production)

3. global installation of [localtunnel](https://github.com/localtunnel/localtunnel) for seeing the app anywhere and [json-server](https://github.com/typicode/json-server) for server mockups.

4. copying your id_rsa to .travis and naming it deploy_key, getting a [personal access token](https://github.com/settings/tokens), and getting the deployment url for your remote server (it's easiest to run "git init --bare ~/{REPO_NAME}.git", ".git" being optional). Also don't forget to login to travis via travis login. Then you must run

```bash
travis encrypt DEPLOY_REPO="ssh://{SSH_USERNAME}@{SSH_SITE}:/{PATH_TO_PROJECT}/{PROJECT_NAME}" --add (PROJECT_NAME corresponding to your git init name)
cd .travis
travis encrypt-file deploy_key --add
cd ..
travis encrypt -r {GIT_USERNAME}/starter-kit 'GITHUB_SECRET_TOKEN={YOUR_SECRET_TOKEN}' --add
```

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

## Notes

I'd like to thank [this](https://chrisdown.name/2015/09/27/auto-merging-successful-builds-from-travis-ci.html) travis guide. It really helped!
Of course, the code came from [here](https://github.com/cdown/travis-automerge), feel free to star and look around!

Look into this [site](http://krisjordan.com/essays/setting-up-push-to-deploy-with-git), to get an idea about setting up your own deployable web server.
Also this [site](https://gist.github.com/noelboss/3fe13927025b89757f8fb12e9066f2fa) is very valuable, so you won't get repo names, or the like mixed up for your remote deployable web server. Make sure to edit certain elements in .travis.yml.