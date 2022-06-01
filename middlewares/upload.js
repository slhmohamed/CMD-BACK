const multer = require("multer");
var path = require('path');
// handle storage using multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
 });
  
 var uploadFile = multer({ storage: storage  });
module.exports = uploadFile;