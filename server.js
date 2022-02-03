const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection")


//Log Request:
app.use(morgan("tiny"));

//MongoDB Connection
connectDB();

//Parse request to body-parser:
app.use(bodyparser.urlencoded({extended:true}));

//Set View engine:
app.set("view engine", "ejs");

//Load asset:
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//Load router:
app.use("/", require("./server/routes/router"));

dotenv.config({path:".env"});
PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("App is runnig on:", PORT);
});