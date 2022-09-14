import { Router } from "express";
import { methods as booksController } from "./../controllers/books.controller";

const router = Router()

router.get("/",booksController.getBooks);
router.get("/:id", booksController.getBook);
router.get("/", booksController.addBook);
router.get("/:id", booksController.updateBook);
router.get("/:id", booksController.deleteBook);

export default router;