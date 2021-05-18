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
          message: "That username is already in use",
        });
      } else {
        con.query(
          "INSERT INTO admin_creds SET ?",
          {
            username,
            password,
          },
          (err, _) => {
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

exports.login = (req, res) => {
  const { username, password } = req.body;
  con.query(
    "SELECT * from   admin_creds where username=?",
    [username],
    (err, result) => {
      if (err) {
        res.status(404).send({ err: "you got an error" });
      } else if (result.length > 0) {
        if (result[0].password === password) {
          res.send({ msg: "Sucessfully log in" });
        } else {
          res.status(400).send({ msg: "Invalid Credentials" });
        }
      }
    }
  );
};
