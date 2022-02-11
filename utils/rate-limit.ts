import LRU from "lru-cache";
import { NextApiResponse } from "next";

const DEFAULT_MAX_REQUESTS = 1;
const DEFAULT_TTL = 60000;
const DEFAULT_MAX_UNIQUE_TOKENS = 500;

interface RateLimitOptions {
  // Specify how long the rate limiter is in effect before it is reset, in milliseconds.
  ttl?: number;
  // Specify the max number of requests to allow before the rate limiter is reset.
  maxRequests?: number; // defaults to DEFAULT_MAX_REQUESTS
  // Specify the max number of unique tokens to track in the cache.
  maxUniqueTokens?: number;
}

const rateLimiter = (options: RateLimitOptions) => {
  const tokenCache = new LRU<string, number[]>({
    max: options.maxUniqueTokens || DEFAULT_MAX_UNIQUE_TOKENS,
    maxAge: options.ttl || DEFAULT_TTL,
  });
  const maxRequests = options.maxRequests || DEFAULT_MAX_REQUESTS;

  return {
    check: (res: NextApiResponse, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = tokenCache.get(token) || [0];
        if (tokenCount[0] === 0) tokenCache.set(token, tokenCount);
        tokenCount[0] += 1;
        const currentUsage = tokenCount[0];
        return currentUsage >= maxRequests ? reject() : resolve();
      }),
  };
};

export default rateLimiter;
