// DO NOT ALTER THIS FILE
const app = require("./app.js");
const port = 3001;

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
