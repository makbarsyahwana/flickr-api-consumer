import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import router from "./routes"

const app = express()
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use(function(_req, res) {
    res.status(404).json({
      status: 0,
      status_code: 404,
      message: 'Route not found'
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

module.exports = app;