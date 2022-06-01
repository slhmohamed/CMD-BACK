const db = require("../models");
const { order: Order} = db;
exports.create = (req, res) => {

     const order = {
        id_payement: req.body.id_payement,
        userId: req.body.userId,
      
    };
    console.log(order);
  
    Order.create(order)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Order."
        });
      });
  };
exports.getAllOrder = (req, res) => {
 
    Order.findAll({
        include: ["users"],
      }).then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch(err => {
      res.status(500).send({
      message:
      
      err.message || "Some error occurred while retrieving Order."
      
      });
      
      });
  } 
 
  
  exports.deleteOrder = (req, res) => {
     
    const id = req.params.id_order;
   
    Order.destroy({
      where: { id: id }
    }) 
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Order was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Category with id=" + id 
        });
      });
  };