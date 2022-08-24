import express from "express";
const router = express.Router();
import courseController from "../controllers/studentController.js";

router.post("/", courseController.createCourse);
router.get("/", courseController.getAllDoc);
//router.get('/edit/:id',courseController.editDoc)
router.post("/update/:id", courseController.updateDocById);
router.post("/delete/:id", courseController.deleteDocById);

export default router;
