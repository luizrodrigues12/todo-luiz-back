import mongoose from "mongoose";

const connect = mongoose.connect(
  "mongodb+srv://lort:Cleibson123@nodeexpressprojects.ehv28f7.mongodb.net/to-do?retryWrites=true&w=majority&appName=NodeExpressProjects"
);

export default connect;
