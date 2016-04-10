function render() {

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/static/normalize.css">
        <link rel="stylesheet" href="/static/simplegrid.css">
        <link rel="stylesheet" href="/static/styles.css">
      </head>
      <body>
        <div id="app"></div>
        <script src="/static/client.js"></script>
      </body>
    </html>
  `;
}

export default render;
