export default (body) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};