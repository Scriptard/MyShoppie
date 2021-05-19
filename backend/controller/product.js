const con = require("../DB/dbconnection");

exports.getProducts = (_, res) => {
  res.send({ msg: "Please set up JWT first" });
};
