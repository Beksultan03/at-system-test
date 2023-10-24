import { CacheService } from '../common/cache/cache.service';
import { AppConfig } from '../common/config/app.config';
import { logger } from '../common/logger/logger.service';
import { SESSION_ID } from '../common/constants/auth.const';
import type { SessionCred } from '../auth/interfaces/session.cred';
import { objectToQueryString } from '../common/utils/object.util';
import type { PaymentInfo } from './interfaces/payment-info.interface';

const appConfig = new AppConfig();
const cacheService = new CacheService();

export async function fetchBalance() {
  const sessionId = await cacheService.get<SessionCred>(SESSION_ID);

  if (!sessionId) {
    logger.error('SessionId is undefined');
  }

  const response = await fetch(
    `${appConfig.trendingUrl}/advertiserapi/payment/getinfo`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: objectToQueryString(sessionId),
      },
    },
  );

  const paymentInfo: PaymentInfo = await response.json();

  return {
    status: paymentInfo.code == 200,
    balance: paymentInfo.data.balance,
  };
}
