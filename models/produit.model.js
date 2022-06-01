module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produits", {
      nom: {
        type: Sequelize.STRING
      },
      prix_initial: {
        type: Sequelize.STRING
      },
      prix_en_promo: {
        type: Sequelize.STRING
      },
      prix_dachat: { 
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      quantite: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      }
    });
    return Produit;
  }; 