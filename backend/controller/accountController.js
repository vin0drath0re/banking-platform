import * as argon2 from 'argon2';
import { Account, Admin, Loan, Transaction } from "../models.js";
import jwt from "jsonwebtoken";
import logger from '../middleware/logger.js';
import moment from "moment";

const PASSWORD_EXPIRY_DAYS = 90;

async function register(req, res) {
	const { name, username, email, password } = req.body;
	if (name === undefined || username === undefined || email === undefined || password === undefined) {
		return res.status(422).json({ error: "Enter input fields correctly" });  
	}
	const fixedSalt = "esfdjkefhhufuafhua"; // Fixed salt value
	const passwordHash = await argon2.hash(password + fixedSalt);
	try {
		const account = await Account.create({
			name,
			username,
			email,
			passwordHash
		});
		logger.info(`Account registered: ${username}`);
		res.status(200).json({ accountNumber: account.accountNumber });
	} catch (e) {
		logger.error(`Registration error: ${e.message}`);
		res.status(422).json({ error: e.errors[0].message });
	}
}

async function login(req, res) {
	const { username, password } = req.body;
	if (username === undefined || password === undefined) {
		return res.status(422).json({ error: "Enter username and password" });
	}
	try {
		const account = await Account.findOne({ where: { username } });
		if (account === null) {
			return res.status(422).json({ error: "No such account" });
		}
		const fixedSalt = "esfdjkefhhufuafhua"; // Fixed salt value
		if (await argon2.verify(account.passwordHash, password + fixedSalt)) {
			const iat = Math.floor(Date.now() / 1000);
			const exp = iat + 3600;
			const token = jwt.sign(
			{ iat, sub: username, exp, isAdmin: false },
			process.env.JWT_SECRET,
		    );

			const lastUpdated = moment(account.passwordLastUpdated);
			const now = moment();
	
			if (now.diff(lastUpdated, "days") > PASSWORD_EXPIRY_DAYS) {
				return res.status(403).json({ message: "Password expired. Please reset your password." });
			}

			logger.info(`Login successful: ${username}`);
			res.status(200).json({ token });
		} else {
			logger.warn(`Login failed: Invalid password for ${username}`);
			res.status(422);
		}
	} catch (e) {
		logger.error(`Login error: ${e.message}`);
		res.status(422);
	}

}

async function balance(req, res) {
	try {
		const { balance } = await Account.findOne({ where: { username: req.auth.sub } });
		logger.info(`Balance retrieved for user: ${req.auth.sub}`);
		res.status(200).json({ balance });
	} catch (e) {
		logger.error(`Balance retrieval error: ${e.message}`);
		res.sendStatus(422);
	}
}

async function details(req, res) {
	try {
		const { accountNumber, username, email, } = await Account.findOne({ where: { username: req.auth.sub } });
		logger.info(`Details retrieved for user: ${req.auth.sub}`);
		res.status(200).json({ accountNumber, username, email, });
	} catch (e) {
		logger.error(`Details retrieval error: ${e.message}`);
		res.sendStatus(422);
	}
}

async function transactions(req, res) {
	try {
		const transactions = await Transaction.findAll({ where: { username: req.auth.sub } });
		logger.info(`Transactions retrieved for user: ${req.auth.sub}`);
		res.status(200).json(transactions);
	} catch (e) {
		logger.error(`Transactions retrieval error: ${e.message}`);
		res.sendStatus(422);
	}
}

async function loans(req, res) {
	try {
		const loans = await Loan.findAll({ where: { username: req.auth.sub } });
		logger.info(`Loans retrieved for user: ${req.auth.sub}`);
		res.status(200).json(loans);
	} catch (e) {
		logger.error(`Loans retrieval error: ${e.message}`);
		res.sendStatus(422);
	}
}

async function addPaymentMethod(req, res) {
	try {
		logger.info(`Payment method added for user: ${req.auth.sub}`);
	} catch (e) {
		logger.error(`Add payment method error: ${e.message}`);
		res.sendStatus(422);
	}
}

export default { register, login, balance, details, transactions, loans, addPaymentMethod };
