import 'dotenv/config';

import { Sequelize } from 'sequelize';
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

import logger from './middleware/logger.js';

import morgan from 'morgan';
import express from 'express';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors({ origin: "https://bankease-pegasus.netlify.app", credentials: true }));
const PORT = process.env.PORT || 8000;
import accountRoutes from "./routes/accountRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import loanRoutes from "./routes/loanRoutes.js";



// Log HTTP requests
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);


app.use("/account", accountRoutes);
app.use("/admin", adminRoutes);
app.use("/loan", loanRoutes);
app.locals.sequelize = sequelize;

app.listen(PORT, () => {
    console.log(`[+] Server listening on PORT: ${PORT}`);
});
