Cyber Insecurity

Loan and MFA is on hold for now, since we are short on time
For loans, see https://en.wikipedia.org/wiki/Loan#Loan_payment


Backend APIs

Payment Methods:
NetBanking
Credit Card
Debit Card
By default, banking accounts have a single payment method attached to it - NetBanking. Adding payment methods requires some amount of money, which will be cut from that account’s balance automatically.

JWT payload:
{ “iat”: issued_at, “sub”: username, “exp”: expiration_time, “isAdmin”: true or false }

/api/account/login
Parameters:
Username
Password

Returns a JWT

/api/account/register
Parameters:
Name
Username
Email
PAN
Mobile Number
Password

Returns a JWT

/api/account/balance
Parameters:
JWT

Returns { balance }

/api/account/transactions
Parameters:
JWT

Returns a list of all transactions.

/api/account/loans
Parameters:
JWT

Returns a list of all loans.

/api/account/details
Parameters:
JWT

Returns { account_number, username, email, pan, mobile }

/api/account/add_payment_method
Parameters:
JWT
Payment Method

Issues a new payment method (credit card or debit card) and cuts some money from the account for issuing it.
Returns a 200 status code

/api/admin/login
Parameters:
Username
Password

Returns a JWT

/api/admin/get_users
Returns a list of all users

/api/admin/get_loans
Returns a list of all loans along with their status (Pending or Denied or Approved or Defaulted or PaidOff)

/api/loan/approve
Parameters:
JWT with isAdmin: true
Loan ID

Returns a 200 status code

/api/loan/deny
Parameters:
JWT with isAdmin: true
Loan ID

Returns a 200 status code

/api/loan/apply
Parameters:
JWT

Returns a 200 status code

/api/loan/pay_installment
Parameters:
JWT

Subtracts the installment amount from the account balance
Returns a 200 status code

/api/payment
Parameters:
JWT
Payee account number
Payment Method
Amount

Returns a 200 status code

DB Schema

Account:
Name
Username
Email
PAN
Mobile Number
Uniquely generated account number (primary key)
Argon2id hashed password
Account Balance
Date of opening account
Timestamp (for adding interest every month)

Admin:
Username
Argon2id hashed password

Transaction:
Transaction ID (primary key)
Payer account number
Payee account number
Amount
Transaction description

Loan:
Loan ID
Account Number
Amount
Timestamp
Installments Paid
Loan status (Pending or Denied or Approved or Defaulted or PaidOff)

Vulnerabilities
CWE-223 Omission of Security-relevant Information
CWE-778 Insufficient Logging
CWE-521 Weak Password Requirements
CWE-262: Not Using Password Aging
CWE-759 Use of a One-Way Hash without a Salt

