const con = require("../DB/dbconnection");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { username, password } = req.body;
  con.query(
    "SELECT * from admin_creds WHERE username=?",
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

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || password === "") {
      return res
        .status(400)
        .send({ message: "Please provide email and password" });
    }
    con.query(
      "SELECT * FROM admin_creds WHERE username = ?",
      [username],
      (err, result) => {
        let stoken = "";
        if (result.length < 1 || !(result[0].password === password)) {
          return res.status(401).send({
            message: "Invalid Credentials",
          });
        } else {
          const id = result[0].id;
          const token = jwt.sign({ id }, "THISISTOPSECRETKEY", {
            expiresIn: "90d",
          });
          stoken = token;
          const cookieOptions = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true,
          };
          res.cookie("jwt", token, cookieOptions);
        }
        res.status(200).send({ stoken });
      }
    );
  } catch (error) {
    console.log(error);
  }
};
