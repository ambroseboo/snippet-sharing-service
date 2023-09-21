import { Router } from "express";
import {
    getSnippets
} from "../controllers/snippets.controller.js";

const router = Router();

router.get("/snippets", getSnippets);
router.get("/", (req, res) => {
    res.send("Hello World!");
});

export default router;