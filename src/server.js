import {} from 'dotenv/config';
import 'reflect-metadata';
import cors from 'cors';
import path from 'path';
import body from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import http from 'http';

import Config from './config';
import routes from './routing';

const app = express();
const server = http.createServer(app);

process.env.agent = 'SERVER';

mongoose.Promise = global.Promise;
mongoose.connect(Config.MONGOOSE_CONNECT_LOCATION, { useMongoClient: true });

const PROD = Config.NODE_ENV !== 'dev';

/*
 * Conditional renders don't work too well with webpack-hot
 */
if (!PROD)
{
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const config = require('../config/webpack.config.dev.js');
    const webpack = require('webpack');
    const compiler = webpack(config);
    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: { colors: true },
        hot: true,
        filename: config.output.filename,
        historyApiFallback: true,
        serverSideRender: true,
        noInfo: true
    }));
    app.use(webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000
    }));
}

app.use(cors());
app.use(body.json());
app.use(body.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));
app.use('/font-awesome', express.static(path.join(__dirname, '/../node_modules/font-awesome')));
app.use(routes);

server.listen(Config.PORT_ADDR);
