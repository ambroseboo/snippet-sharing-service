import express from "express";
import {
    getSnippets,
    getSnippet,
    postSnippet
} from "../controllers/snippets.controller.js";

const router = express.Router();
router.use(express.json());

router.get("/snippets", getSnippets);
router.post("/snippet", postSnippet);
router.get("/snippet/:url_hash", getSnippet);

export default router;