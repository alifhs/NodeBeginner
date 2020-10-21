module.exports = (req, res, next) => {
    // res.status(404).send("<h1>Page not found </h1>");
    res.status(404);
    // res.sendFile(path.join(rootDir, "views", "404.html"));
    res.render('404', {path: '', pageTitle:"404 Error"});
    // console.log(typeof(adminRoutes));
    
    
}