const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
 db.category = require("../models/category.model")(sequelize, Sequelize);
 db.produit = require("../models/produit.model")(sequelize, Sequelize);
 db.order = require("../models/order.model")(sequelize, Sequelize);

 //realation produit category
 db.category.hasMany(db.produit, { as: "produits" });
 db.produit.belongsTo( db.category, {
   foreignKey: "categoryId",
   as: "category",
 });

 //relation order client
 db.user.hasMany(db.order, { as: "orders" });
 db.order.belongsTo( db.user, {
   foreignKey: "userId",
   as: "users",
 });
 
module.exports = db;