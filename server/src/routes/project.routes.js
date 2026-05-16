import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("All Projects");
});

router.post("/", (req, res) => {
  res.json("Create Project");
});

export default router;