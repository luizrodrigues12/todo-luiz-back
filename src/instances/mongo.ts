import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@nodeexpressprojects.ehv28f7.mongodb.net/to-do?retryWrites=true&w=majority&appName=NodeExpressProjects`
);

export default connect;
