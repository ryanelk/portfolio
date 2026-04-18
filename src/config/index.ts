import type { UserConfig } from './types';
import ryan from './ryan';
import reina from './reina';

const userId = import.meta.env.PORTFOLIO_USER ?? 'ryan';

const configs: Record<string, UserConfig> = { ryan, reina };

if (!(userId in configs)) {
	throw new Error(`Unknown PORTFOLIO_USER: "${userId}". Valid values are: "ryan", "reina".`);
}

export const config: UserConfig = configs[userId];
export default config;
