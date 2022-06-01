module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        
      id_payement: {
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.STRING,
        defaultValue: "En attente",
      }
    });
    return Order;
  };