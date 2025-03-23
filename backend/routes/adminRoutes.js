import express from "express";
import adminController from "../controller/adminController.js";
import { isAuthenticated, authorizeRoles } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", adminController.login);
router.get("/users", isAuthenticated, authorizeRoles("admin"), adminController.get_users);
router.get("/transactions", isAuthenticated, authorizeRoles("admin"), adminController.get_transactions);
router.get("/loans", isAuthenticated, authorizeRoles("admin"), adminController.get_loans);

export default router;
