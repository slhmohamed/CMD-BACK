const db = require("../models");
const config = require("../config/auth.config");
const { user: User  } = db;

const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signup = async(req, res) => {
  // Save User to Database
  console.log(req.body);
  let user= await User.findAll({ where: { email: req.body.email } })
  console.log(user.length==0);
  if(user.length>0)
 {
  res.status(500).send({ message: "Email already used" });
 }else{
      
    User.create({
      username: req.body.username,
      email: req.body.email,
      tel:req.body.tel,
      role:req.body.role,
      adress:req.body.adress,
      password: bcrypt.hashSync(req.body.password, 8) 
    })
      .then(user => {
         
              res.send({ message: "User was registered successfully!" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
    }
};
exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: config.jwtExpiration
      });
     
        
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
           accessToken: token,
         });
     
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
 