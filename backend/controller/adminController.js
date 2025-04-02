import * as argon2 from 'argon2';
import { Account, Admin, Loan, Transaction } from "../models.js";
import jwt from "jsonwebtoken";
import logger from '../middleware/logger.js';

async function login(req, res) {
	const { username, password } = req.body;
	if (username === undefined || password === undefined) {
		return res.sendStatus(422);
	}
	try {
		const admin = await Admin.findOne({ where: { username } });
		if (admin === null) {
			logger.warn(`Admin login failed: No such admin ${username}`);
			return res.status(422).json({ error: "No such admin" });
		}
		if (await argon2.verify(admin.passwordHash, password)) {
			const iat = Math.floor(Date.now() / 1000);
			const exp = iat + 3600;
			const token = jwt.sign(
			{ iat, sub: username, exp, isAdmin: true },
			process.env.JWT_SECRET,
		    );
			logger.info(`Admin login successful: ${username}`);
			res.status(200).json({ token });
		} else {
			logger.warn(`Admin login failed: Invalid password for ${username}`);
			res.sendStatus(422);
		}
	} catch (e) {
		logger.error(`Admin login error: ${e.message}`);
		res.sendStatus(422);
	}

}

async function get_users(req, res) {
	try {
		const accounts = await Account.findAll();
		logger.info(`Admin retrieved all users`);
		res.status(200).json(accounts);
	} catch (e) {
		logger.error(`Get users error: ${e.message}`);
		res.sendStatus(422);
	}
}

async function get_transactions(req, res) {
	try {
		const transactions = await Transaction.findAll();
		logger.info(`Admin retrieved all transactions`);
		res.status(200).json(transactions);
	} catch (e) {
		logger.error(`Get transactions error: ${e.message}`);
		res.sendStatus(422);
	}
}

async function get_loans(req, res) {
	try {
		const loans = await Loan.findAll();
		logger.info(`Admin retrieved all loans`);
		res.status(200).json(loans);
	} catch (e) {
		logger.error(`Get loans error: ${e.message}`);
		res.sendStatus(422);
	}
}

export default { login, get_users, get_transactions, get_loans };
