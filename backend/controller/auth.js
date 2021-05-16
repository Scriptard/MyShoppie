const con = require("../DB/dbconnection");

exports.register = (req, res) => {
  const { username, password } = req.body;
  con.query(
    "SELECT * from   admin_creds WHERE username=?",
    [username],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(401).send({ err: "Error while registration" });
      } else if (result.length > 0) {
        res.send({
          message: "That email is already in use",
        });
      } else {
        con.query(
          "INSERT INTO admin_creds SET ?",
          {
            username,
            password,
          },
          (err, result) => {
            if (err) {
              res.send({ err: "Error occured" });
            } else {
              res.status(201).send({ msg: "Admin registered" });
            }
          }
        );
      }
    }
  );
};

