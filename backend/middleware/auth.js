import jwt from "jsonwebtoken";

export function isAuthenticated(req, res, next) {
	const token = req.get("X-BankEase-JWT");
	if (token == undefined) {
		return res.sendStatus(401);
	}

	try {
		req.auth = jwt.verify(token, process.env.JWT_SECRET);
		next();
	} catch (e) {
		res.sendStatus(401);
	}
}

export function authorizeRoles(role) {
	return (req, res, next) => {
		if ((role == "admin" && !req.auth.isAdmin) || (role == "user" && req.auth.isAdmin)) {
			res.sendStatus(401);
		}
		next();
	};
}
