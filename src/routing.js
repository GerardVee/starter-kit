import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import express from 'express';

import Contents from './database/collections/Contents';
import Comments from './database/collections/Comments';
import App from './app';
import Config from './config';
import allReducers from './ducks/combined';
import site from './templates/site';

const PROD = Config.NODE_ENV !== 'dev';

const makeStore = (preloadedState) =>
{
    return createStore(allReducers, preloadedState, applyMiddleware(thunkMiddleware));
};

const app = express.Router();

app.get('/contents', async (req, res) =>
{
    const contents = await Contents.all();
    res.send({ contents });
});
app.get('/comments', async (req, res) =>
{
    const comments = await Comments.all();
    res.send({ comments });
});
/*
 * due to *, we must require this route last on our actual site app
 */
app.get('*', async (req, res) =>
{
    const contents = await Contents.all();
    const comments = await Comments.all();
    const context = { };
    const store = makeStore({ contents, comments });
    const state = store.getState();
    const sheet = new ServerStyleSheet();
    const appHtml = ReactDOMServer.renderToString(sheet.collectStyles(<App location={ req.url } context={ context } store={ store }/>));
    const styles = sheet.getStyleTags();
    if (context.url)
    {
        res.writeHead(301, { Location: context.url });
        res.end();
    }
    else
    {
        res.send(site({ body: appHtml, store: state, styles, production: PROD }));
    }
});

export default app;
