import { createClient } from 'redis';
import { logger } from '../logger/logger.service';
import { AppConfig } from '../config/app.config';

const appConfig = new AppConfig();

const client = createClient({ url: appConfig.redisURL });

client.on('error', (err) => logger.error(`Redis Client Error: ${err}`));
client.connect().then(() => logger.info('Redis connection is established'));

export class CacheService {
  async get<T>(cacheKey: string): Promise<T | null> {
    const data = await client.get(cacheKey);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  }

  set<T>(cacheKey: string, data: T) {
    return client.set(cacheKey, JSON.stringify(data));
  }

  delete(cacheKey: string) {
    return client.del(cacheKey);
  }
}
