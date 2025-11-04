// Plugin: command-metrics
// Counts commands by name and exposes JSON at /metrics/commands

const store = new Map();

export async function init({ registerHook, services, logger }) {
  registerHook('afterCommand', ({ command, ok }) => {
    const name = command?.data?.name || 'unknown';
    const rec = store.get(name) || { count: 0, ok: 0, fail: 0 };
    rec.count += 1;
    if (ok) rec.ok += 1;
    else rec.fail += 1;
    store.set(name, rec);
  });

  // HTTP endpoint
  const http = services.resolve('http');
  if (http) {
    http.register('GET', '/metrics/commands', (req, res) => {
      const out = Object.fromEntries(Array.from(store.entries()));
      const body = JSON.stringify(out);
      res.statusCode = 200;
      res.setHeader('content-type', 'application/json');
      res.setHeader('content-length', Buffer.byteLength(body));
      res.end(body);
      return true;
    });
    logger?.info('Registered /metrics/commands');
  }
}
