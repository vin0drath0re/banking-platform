import express from "express";
import loanController from "../controller/loanController.js";
import { isAuthenticated, authorizeRoles } from "../middleware/auth.js";

const router = express.Router();

//router.get("/approve", isAuthenticated, authorizeRoles("admin"), loanController.approveLoan);
//router.post("/deny", isAuthenticated, authorizeRoles("admin"), loanController.denyLoan);
//router.get("/apply", isAuthenticated, authorizeRoles("user"), loanController.applyLoan);
//router.get("/pay_installment", isAuthenticated, authorizeRoles("user"), loanController.payInstallment);

export default router;
