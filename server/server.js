const app = require("./app.js");
const port = 3001;

// binds and listens to the connection son the specified host and port
const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
