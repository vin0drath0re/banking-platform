import express from "express";
import accountController from "../controller/accountController.js";
import { isAuthenticated, authorizeRoles } from "../middleware/auth.js";


const router = express.Router();

router.post("/register", accountController.register);
router.post("/login", accountController.login);
router.get("/balance", isAuthenticated, authorizeRoles("user"), accountController.balance);
router.get("/details", isAuthenticated, authorizeRoles("user"), accountController.details);
router.get("/transactions", isAuthenticated, authorizeRoles("user"), accountController.transactions);
router.get("/loans", isAuthenticated, authorizeRoles("user"), accountController.loans);
router.post("/add_payment_method", isAuthenticated, authorizeRoles("user"), accountController.addPaymentMethod);

export default router;
