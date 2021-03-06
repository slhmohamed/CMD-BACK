const db = require("../models");
const { user: User } = db;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.getAllAdmin = (req, res) => {
 

User.findAll({ where: { role: "Admin" } })

.then(data => {

res.send(data);

})

.catch(err => {

res.status(500).send({

message:

err.message || "Some error occurred while retrieving tutorials."

});

});

};
exports.getAllClient = (req, res) => {
 

  User.findAll({ where: { role: "Client" } })
  
  .then(data => {
  
  res.send(data);
  
  })
  
  .catch(err => {
  
  res.status(500).send({
  
  message:
  
  err.message || "Some error occurred while retrieving tutorials."
  
  });
  
  });
  
  }; 
  exports.getSingleAdmin = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };
  exports.updateAdmin = (req, res) => {
    const id = req.params.id;
    const current=User.findByPk(id)
    if(req.body.password){
      req.body.password  = bcrypt.hashSync(req.body.password, 8) 
    }else{
      req.body.password=current.password
    }

    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Category was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Category with id=" + id
        });
      });
  };
  exports.deleteAdmin = (req, res) => {
     
    const id = req.params.id_admin;
   
    User.destroy({
      where: { id: id }
    }) 
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Category was deleted successfully!"
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
 
  
   