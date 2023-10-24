import express from 'express';
import { AppConfig } from './common/config/app.config';
import { logger } from './common/logger/logger.service';
import authRoutes from './auth/auth.routes';
import balanceRoutes from './balance/balance.routes';

const app = express();
const appConfig = new AppConfig();

app.use(express.json());

app.use(authRoutes);
app.use(balanceRoutes);

const port = appConfig.port || 3000;

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
  logger.info(`appConfig.port ${appConfig.port}`);
  logger.info(`appConfig.redisURL ${appConfig.redisURL}`);
});
