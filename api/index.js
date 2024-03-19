import express, { json } from "express";
import { query } from "./db.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  console.log(req.body.link);
  await query("INSERT INTO games VALUES ($1)", [req.body.link]);
});

app.get("/link", async (req, res) => {
  let links = await query("SELECT * FROM games");
  console.log("hello");
  console.log(links);
  res.send(links);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
