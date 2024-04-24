import mongoose, { Schema, SchemaType } from "mongoose";

interface TaskType {
  title: string;
  done: boolean;
}

const taskSchema = new mongoose.Schema<TaskType>({
  title: String,
  done: { type: Boolean, default: false },
});

const TodoModel = mongoose.model("tasks", taskSchema);

export default TodoModel;
