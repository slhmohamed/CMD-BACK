const db = require("../models");
const { user: User, role: Role,category: Category } = db;
exports.create = (req, res) => {
    // Validate request
  
  
     const category = {
        name: req.body.name,
      description: req.body.description,
      
    };
  
     Category.create(category)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };
exports.getAllCategory = (req, res) => {
    Category.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  } 
  exports.findOneCategory = (req, res) => {
    const id = req.params.id;
  
    Category.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };
  exports.updateCategory = (req, res) => {
    const id = req.params.id;
  
    Category.update(req.body, {
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
  exports.deleteCategory = (req, res) => {
     
    const id = req.params.id_categorie;
   
    Category.destroy({
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