import { CacheService } from '../common/cache/cache.service';
import { SESSION_ID } from '../common/constants/auth.const';
import type { SessionCred } from './interfaces/session.cred';

const cacheService = new CacheService();

export function storeSession(sessionId: SessionCred) {
  return cacheService.set(SESSION_ID, sessionId);
}
