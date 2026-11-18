import express from "express"
import {listar, inserir } from "../controllers/hrController.js"

const router = express.Router();

router.get('/', listar);
router.post('/', inserir);

export default router