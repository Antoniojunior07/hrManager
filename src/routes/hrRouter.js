import express from "express";
import {
  listar,
  inserir,
  atualizar,
  deletar,
} from "../controllers/hrController.js";

const router = express.Router();

router.get('/', listar);
router.post('/', inserir);
router.put('/:id', atualizar);
router.delete('/:id', deletar);

export default router;
