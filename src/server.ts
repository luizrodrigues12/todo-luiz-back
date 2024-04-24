import express, { urlencoded } from "express";
import dotenv from "dotenv";
import router from "./routes/router";
import cors from "cors";
import connect from "./instances/mongo";

dotenv.config();

const server = express();

const port = process.env.PORT || 3001;

server.use(cors());
server.use(urlencoded({ extended: true }));
server.use(express.json());
server.use(router);

connect
  .then((result) => console.log(result ? "Sucesso Mongo" : "Erro"))
  .catch((err) => console.log(err));

server.listen(port, () => {
  console.log("server is running");
});
