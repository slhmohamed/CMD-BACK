const fs = require("fs");
 const db = require("../models");
const { produit: Produit } = db;
exports.createProduct = async (req, res) => {
    console.log(req.body);
  try {
    console.log(req.file);
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    console.log({
        nom: req.body.nom,
        prix_initial:  req.body.prix_initial,
        prix_en_promo: req.body.prix_en_promo, 
        prix_dachat:  req.body.prix_dachat,
        description:req.body.description ,
        quantite: req.body.quantite,
        categoryId:req.body.categoryId,
    image:req.file.filename
  });
    Produit.create({
          nom: req.body.nom,
          prix_initial:  req.body.prix_initial,
          prix_en_promo: req.body.prix_en_promo, 
          prix_dachat:  req.body.prix_dachat,
          description:req.body.description ,
          quantite: req.body.quantite,
          categoryId:req.body.categoryId,
      image:req.file.filename
    }).then((result) => {
       
 
      return res.send(`Product has been created.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};
exports.getAllProducts=(req,res)=>{
 
      Produit.findAll({
      include: ["category"],
    }).then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
    
    res.status(500).send({
    
    message:
    
    err.message || "Some error occurred while retrieving produit."
    
    });
    
    });
}


exports.findOneProduct = (req, res) => {
  const id = req.params.id;

  Produit.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};
exports.updateProduct = (req, res) => {
  const id = req.params.id;

  Produit.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Produit was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Produit with id=${id}. Maybe Produit was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Category with id=" + id
      });
    });
};
exports.deleteProduct = (req, res) => {
   
  const id = req.params.id_produit;
 
  Produit.destroy({
    where: { id: id }
  }) 
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Produit was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Produit with id=${id}. Maybe Produit was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Category with id=" + id 
      });
    });
};