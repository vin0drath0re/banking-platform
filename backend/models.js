import { Sequelize, DataTypes } from "sequelize";
import * as argon2 from 'argon2';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Account = sequelize.define(
  'Account',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accountNumber: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accountBalance: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      allowNull: false,
    },
    dateOfOpening: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    lastUpdated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
);

const Admin = sequelize.define(
  'Admin',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

const Transaction = sequelize.define(
  'Transaction',
  {
    transactionID: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    payerAccountNumber: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    payeeAccountNumber: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    transactionDescription: {
      type: DataTypes.STRING,
    },
  }
);

const Loan = sequelize.define(
  'Loan',
  {
    loanID: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
    },
    accountNumber: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    lastUpdate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    installmentsPaid: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
      allowNull: false,
    },
    loanStatus: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
      allowNull: false,
    },
  }
);

//await Admin.create({
//  username: "admin",
//  passwordHash: await argon2.hash("admin")
//});
await sequelize.sync();
export { Account, Admin, Transaction, Loan };
/* vi: set et sw=2: */
