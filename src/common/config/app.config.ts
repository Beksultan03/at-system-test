import dotenv from 'dotenv';

dotenv.config();

export class AppConfig {

  get port(): number {
    const port = process.env.PORT;

    if (!port) {
      throw Error('[ENV] PORT is undefined');
    }

    return Number(port);
  }

  get redisURL(): string {
    const redisURL = process.env.REDIS_URL;

    if (!redisURL) {
      throw Error('[ENV] REDIS_URL is undefined');
    }

    return redisURL;
  }

  get trendingUrl() {
    const url = process.env.TRENDING_URL;

    if (!url) {
      throw Error('[ENV] TRENDING_URL is undefined');
    }

    return url;
  }
}
