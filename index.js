const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors({
  origin: 'http://localhost:4000'
}));
const db = require("./models/index");
db.sequelize.sync().then(() => {
   
  initial();
});
 function initial(){
   console.log("connected");
 }
 // parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static("uploads"));
 
const userRoute =require("./routes/user.routes");
const CategoryRoute =require("./routes/category.routes");
const authRoute =require("./routes/auth.routes");
const productRoute =require("./routes/product.routes");
const orderRoute =require("./routes/order.controller");


app.use(express.json());
app.use("/api/product", productRoute);
app.use("/api/category", CategoryRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});