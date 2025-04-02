import * as argon2 from 'argon2';
import { Account, Admin, Loan, Transaction } from "../models.js";
import logger from '../middleware/logger.js';

async function approve(req, res) {
	try {
		/*	const { name, username, email, PAN, mobileNumber, password } = req.body;
			if (name === undefined || username === undefined || email === undefined || PAN === undefined || mobileNumber === undefined || password === undefined) {
				return res.status(422).json("Enter username and password");  
			}
			const passwordHash = await argon2.hash(password);
			try {
				const account = await Account.create({
					name,
					username,
					email,
					PAN,
					mobileNumber,
					passwordHash
				});
				res.status(200).json({ accountNumber: account.accountNumber });
			} catch (e) {
				res.status(422).json({ error: e.errors[0].message });
			}*/
		logger.info(`Loan approved for user: ${req.body.username}`);
	} catch (e) {
		logger.error(`Loan approval error: ${e.message}`);
		res.sendStatus(422);
	}
}

async function deny(req, res) {
	try {
		/*	const { username, password } = req.body;
			if (username === undefined || password === undefined) {
				return res.sendStatus(422);
			}
			try {
				const passwordHash = await argon2.hash(password);
				const account = await Account.findOne({ where: { username } });
				if (account.passwordHash === passwordHash) {
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
					res.sendStatus(422);
			}*/
		logger.info(`Loan denied for user: ${req.body.username}`);
	} catch (e) {
		logger.error(`Loan denial error: ${e.message}`);
		res.sendStatus(422);
	}
}

async function apply(req, res) {
	try {
		/*	try {
				const { balance } = await Account.findOne({ where: { username: req.auth.sub } });
				res.status(200).json({ balance });
			} catch (e) {
				res.sendStatus(422);
			}*/
		logger.info(`Loan application submitted by user: ${req.auth.sub}`);
	} catch (e) {
		logger.error(`Loan application error: ${e.message}`);
		res.sendStatus(422);
	}
}

async function pay_installment(req, res) {
	try {
		/*	try {
				const { accountNumber, username, email, PAN, mobileNumber } = await Account.findOne({ where: { username: req.auth.sub } });
				res.status(200).json({ accountNumber, username, email, PAN, mobileNumber });
			} catch (e) {
				res.sendStatus(422);
			}*/
		logger.info(`Loan installment paid by user: ${req.auth.sub}`);
	} catch (e) {
		logger.error(`Loan installment payment error: ${e.message}`);
		res.sendStatus(422);
	}
}

export default { approve, deny, apply, pay_installment };
