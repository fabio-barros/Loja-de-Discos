import {get, getByID} from "../controllers/Product.js";
import express from "express";
const router = express.Router();

router.route("/").get( get);
router.route("/:id").get(getByID);

export default router;
