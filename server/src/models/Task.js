import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    priority: String,
    status: String,
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    deadline: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);