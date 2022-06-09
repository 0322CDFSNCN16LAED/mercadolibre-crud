const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "../public")));

const mainRouter = require("./routes/main-router"); // Rutas main
app.use("/", mainRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.path = req.path;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
});
