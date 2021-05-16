const express = require("express");
const app = express();
const authrouter = require("./routes/authRoutes");
const fileupload = require("express-fileupload");
const port = process.env.PORT || 4040;
app.use(express.json({ limit: "100MB" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileupload());

app.use(authrouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log("Hello from " + port));
