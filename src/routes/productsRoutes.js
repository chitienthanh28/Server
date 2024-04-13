import express from "express";
import {
  create,
  getAll,
  getDetail,
  remove,
  update,
} from "../controllers/productsController.js";

const router1 = express.Router();

router1.get("/", getAll);
router1.get("/:id", getDetail);
router1.post("/", create);
router1.put("/:id", update);
router1.delete("/:id", remove);

export default router1;
