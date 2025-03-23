import * as argon2 from 'argon2';
import { Account, Admin, Loan, Transaction } from "../models.js";
import jwt from "jsonwebtoken";
async function register(req, res) {
	const { name, username, email, password } = req.body;
	if (name === undefined || username === undefined || email === undefined || password === undefined) {
		return res.status(422).json({ error: "Enter input fields correctly" });  
	}
	const passwordHash = await argon2.hash(password);
	try {
		const account = await Account.create({
			name,
			username,
			email,
			passwordHash
		});
		res.status(200).json({ accountNumber: account.accountNumber });
	} catch (e) {
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
		if (await argon2.verify(account.passwordHash, password)) {
			const iat = Math.floor(Date.now() / 1000);
			const exp = iat + 3600;
			const token = jwt.sign(
			{ iat, sub: username, exp, isAdmin: false },
			process.env.JWT_SECRET,
		    );
			res.status(200).json({ token });
		} else {
			res.sendStatus(422);
		}
	} catch (e) {
		console.error(e);
		res.sendStatus(422);
	}

}

async function balance(req, res) {
	try {
		const { balance } = await Account.findOne({ where: { username: req.auth.sub } });
		res.status(200).json({ balance });
	} catch (e) {
		res.sendStatus(422);
	}
}

async function details(req, res) {
	try {
		const { accountNumber, username, email, } = await Account.findOne({ where: { username: req.auth.sub } });
		res.status(200).json({ accountNumber, username, email, });
	} catch (e) {
		res.sendStatus(422);
	}
}

async function transactions(req, res) {
	try {
		const transactions = await Transaction.findAll({ where: { username: req.auth.sub } });
		res.status(200).json(transactions);
	} catch (e) {
		res.sendStatus(422);
	}
}

async function loans() {
	try {
		const loans = await Loan.findAll({ where: { username: req.auth.sub } });
		res.status(200).json(loans);
	} catch (e) {
		res.sendStatus(422);
	}
}

async function addPaymentMethod() {
	try {
	} catch (e) {
		res.sendStatus(422);
	}
}

export default { register, login, balance, details, transactions, loans, addPaymentMethod };
