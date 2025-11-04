/**
 * Plugin Template
 * Copy this folder to create your own plugins
 *
 * Plugins extend bot functionality without modifying core code
 */

/**
 * Plugin initialization
 * Called when the plugin is loaded
 *
 * @param {Object} api - Plugin API
 * @param {Logger} api.logger - Scoped logger for this plugin
 * @param {Object} api.config - Bot configuration (env)
 * @param {Function} api.registerHook - Register hook listeners
 * @param {ServiceRegistry} api.services - Access bot services
 */
export async function init({ logger, config, registerHook, services }) {
  logger.info('Plugin initializing...');

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 1. Register Event Hooks
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // Available hooks:
  // - 'ready' - Bot is ready
  // - 'beforeCommand' - Before command execution
  // - 'afterCommand' - After command execution (receives { command, ok })
  // - 'beforeCommandDenied' - Command denied by guards
  // - 'shutdown' - Bot is shutting down

  registerHook('ready', async ({ client, env }) => {
    logger.info(
      {
        guilds: client.guilds.cache.size,
        users: client.users.cache.size,
      },
      'Bot ready',
    );
  });

  registerHook('afterCommand', async ({ command, ok }) => {
    if (!ok) {
      logger.warn({ command: command?.data?.name }, 'Command failed');
    }
  });

  registerHook('shutdown', async ({ signal }) => {
    logger.info({ signal }, 'Plugin shutting down');
    // Cleanup resources here
  });

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 2. Access Services
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // Available services:
  // - 'commands' - Commands service
  // - 'http' - HTTP router
  // - 'components' - Component handlers
  // - 'context' - Context menu handlers

  const commandsService = services.resolve('commands');
  if (commandsService) {
    const commands = commandsService.list();
    logger.info({ count: commands.length }, 'Commands available');
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 3. Register HTTP Endpoints (Optional)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  const http = services.resolve('http');
  if (http) {
    // Register GET endpoint
    http.register('GET', '/plugin/example', (req, res) => {
      const body = JSON.stringify({
        plugin: 'example',
        status: 'active',
        timestamp: new Date().toISOString(),
      });

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Length', Buffer.byteLength(body));
      res.end(body);

      return true; // Handled
    });

    logger.info('Registered HTTP endpoint: /plugin/example');
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 4. Plugin Logic
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  // Example: Periodic task
  const interval = setInterval(() => {
    logger.debug('Plugin heartbeat');
  }, 60000); // Every minute

  // Clean up interval on shutdown
  registerHook('shutdown', async () => {
    clearInterval(interval);
  });

  logger.info('Plugin initialized successfully');
}

/**
 * Optional: Plugin cleanup
 * Called when the bot shuts down
 */
export async function cleanup() {
  // Clean up resources
  // Close connections
  // Save state
}

/**
 * Optional: Plugin metadata
 * Provides information about the plugin
 */
export const metadata = {
  name: 'Example Plugin',
  version: '1.0.0',
  description: 'Template plugin demonstrating all features',
  author: 'Your Name',

  // Dependencies (other plugins this plugin requires)
  dependencies: [],

  // Required services
  requiredServices: [], // e.g., ['commands', 'http']

  // Configuration schema (optional, for validation)
  configSchema: {
    // Define expected config values
    // PLUGIN_EXAMPLE_ENABLED: 'boolean',
    // PLUGIN_EXAMPLE_API_KEY: 'string'
  },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Example Use Cases
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/*

1. COMMAND METRICS
   - Track command usage
   - Store statistics
   - Expose metrics endpoint

2. WELCOME SYSTEM
   - Listen for guildMemberAdd events
   - Send welcome messages
   - Assign default roles

3. MODERATION LOG
   - Track all moderation actions
   - Store in database
   - Generate reports

4. AUTO-BACKUP
   - Periodic backups of guild data
   - Store configurations
   - Export to external storage

5. CUSTOM COMMANDS
   - Dynamic command creation
   - Store in database
   - Load at runtime

6. LEVEL SYSTEM
   - Track message counts
   - Award XP and levels
   - Leaderboard endpoint

7. TICKET SYSTEM
   - Create support tickets
   - Manage ticket lifecycle
   - Archive tickets

8. STARBOARD
   - Track starred messages
   - Post to starboard channel
   - Leaderboard of popular messages

9. REACTION ROLES
   - Assign roles via reactions
   - Manage reaction mappings
   - Remove on unreact

10. CUSTOM API
    - Expose bot data via HTTP
    - Webhook integrations
    - External service connections

*/
