// Example plugin: logs lifecycle and greets on /ping via hooks

/**
 * @param {{
 *   logger: any,
 *   config: any,
 *   registerHook: (hook: string, fn: Function) => void,
 *   services: { register(name: string, service: any): void, resolve(name: string): any }
 * }} api
 */
export async function init(api) {
  const { logger, registerHook, config } = api;
  logger.info('example-hello plugin loaded');

  // When the bot is ready, log basic info
  registerHook('ready', ({ client }) => {
    const tag = client?.user?.tag || 'unknown';
    logger.info({ tag }, 'Bot is ready');
  });

  // Before a command runs, optionally intercept
  registerHook('beforeCommand', ({ interaction, command }) => {
    if (!interaction?.isChatInputCommand?.()) return;
    logger.debug({ cmd: command?.data?.name }, 'Before command');
  });

  // After a command runs, report result
  registerHook('afterCommand', ({ interaction, command, ok, err }) => {
    if (!interaction?.isChatInputCommand?.()) return;
    const name = command?.data?.name;
    if (ok) logger.info({ name }, 'Command ok');
    else logger.warn({ name, err: err?.message }, 'Command failed');
  });
}

export default { init };
