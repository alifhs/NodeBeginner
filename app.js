
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const express = require('express');
const path    = require('path');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const errorController = require('./controllers/error');



app.use(express.static(path.join(rootDir, "public")));

app.use("/admin",adminRoutes);

app.use(shopRoutes);

//router function calls its own registered middleware function

// app.use("/kk", (req, res) =>{
//         console.log(req.url)
//         console.log(req.path);
//         console.log(req.baseUrl);
//         console.log(req.originalUrl);
// })


app.use(errorController);


// console.log(app._router.stack);


app.listen(3000, ()=>{
    console.log("Who is the daddy now?");
});


