import uniStyles from '../_helpers/_style';

export default ({ body, store, styles, production }) =>
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/png" href="/icons/icon.png"/>
        <link href="/css/mini.min.css" rel="stylesheet" type="text/css"/>
        <link href="/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <link href="https://fonts.googleapis.com/css?family=PT+Sans|Raleway" rel="stylesheet">
        <title>GerardVee</title>
        <style>${ uniStyles }</style>
        ${ styles }
      </head>
      <body>
        <div id="app">${ body }</div>
      </body>
      <script>window.__PRELOADED_STATE__=${ JSON.stringify(store).replace(/</g, '\\u003c') };</script>
      <script src="${ production ? '/js/main.min.js' : '/static/main.min.js' }"></script>
    </html>
    `;
