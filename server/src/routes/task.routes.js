import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("All Tasks");
});

router.post("/", (req, res) => {
  res.json("Create Task");
});

export default router;