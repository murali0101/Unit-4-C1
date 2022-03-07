const express = require("express");
const app = express();
app.use(logger)
function logger(req, res, next) {
  console.log(req.path);
  next();
}
function checkPermission(val) {
  return function (req, res, next) {
    if ((req.path = `/${val}`)) {
      req.bag = { route: req.path, permission: true };
      next();
    }
  };
}

app.get("/books",(req, res) => {
  res.send({ route: "/books" });
});

app.get("/libraries",checkPermission("libraries"), (req, res) => {
  res.send(req.bag);
});
app.get("/authors",checkPermission("authors"), (req, res) => {
  res.send(req.bag);
});

app.listen(5500, () => {
  console.log(5500);
});
