import 'dotenv/config';
import { createLogger } from '../src/logger.js';
import { registerAllCommands } from '../src/commands/register.js';

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.GUILD_ID;

if (!token || !clientId) {
  console.error('DISCORD_TOKEN and DISCORD_CLIENT_ID are required');
  process.exit(1);
}

async function main() {
  try {
    const log = createLogger('register', '📝');
    const { total, added, removed } = await registerAllCommands({
      token,
      clientId,
      guildId,
      logger: log,
    });
    if (guildId)
      log.info(
        { total, added: added.length, removed: removed.length, guildId },
        'Guild commands registered',
      );
    else
      log.info(
        { total, added: added.length, removed: removed.length },
        'Global commands registered',
      );
  } catch (err) {
    console.error('Failed to register commands:', err);
    process.exitCode = 1;
  }
}

main();
