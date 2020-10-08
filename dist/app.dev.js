"use strict";

var bodyParser = require('body-parser');

var rootDir = require('./util/path');

var express = require('express');

var path = require('path');

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

var adminRoutes = require("./routes/admin");

var shopRoutes = require("./routes/shop");

var errorController = require('./controllers/error');

app.use(express["static"](path.join(rootDir, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes); //router function calls its own registered middleware function
// app.use("/kk", (req, res) =>{
//         console.log(req.url)
//         console.log(req.path);
//         console.log(req.baseUrl);
//         console.log(req.originalUrl);
// })

app.use(errorController); // console.log(app._router.stack);

app.listen(3000, function () {
  console.log("Who is the daddy now?");
});