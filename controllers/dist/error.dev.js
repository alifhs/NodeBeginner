"use strict";

module.exports = function (req, res, next) {
  // res.status(404).send("<h1>Page not found </h1>");
  res.status(404); // res.sendFile(path.join(rootDir, "views", "404.html"));

  res.render('404'); // console.log(typeof(adminRoutes));
};