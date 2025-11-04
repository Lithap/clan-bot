<div align="center">

# 🤖 Discord Bot

### A modular Discord bot with moderation, audit logging, and more

[![Node.js](https://img.shields.io/badge/node-%3E%3D18.17-brightgreen.svg)](https://nodejs.org/)
[![Discord.js](https://img.shields.io/badge/discord.js-v14-blue.svg)](https://discord.js.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

**Note:** This project is inspired by and builds upon ideas from [Milrato's Discord Bot](https://github.com/Tomcat-SL/Milrato-Discord-Bot), which is no longer maintained. Many concepts and features were adapted from that project.

---

</div>

## ✨ Features

<table>
<tr>
<td width="50%">

### 🛡️ Moderation

- Ban, kick, timeout, warn users
- Emergency server lockdown
- Bulk message deletion
- Channel nuking
- Configurable warning system

</td>
<td width="50%">

### 📊 Information

- Server statistics
- User profiles & badges
- Role & channel details
- Avatar & banner viewer
- Interactive help menu

</td>
</tr>
<tr>
<td width="50%">

### 🔍 Audit Logging

- 48+ tracked Discord events
- Organized by categories
- Message, member, server changes
- Voice state tracking
- Moderation actions

</td>
<td width="50%">

### ⚙️ System

- Web dashboard on port 3000
- Plugin architecture
- Hot-reload support
- Metrics endpoint
- Crash reporting

</td>
</tr>
</table>

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or higher
- Discord bot token from the [Developer Portal](https://discord.com/developers/applications)

### Installation

**1. Clone and install**

```bash
git clone <repository-url>
cd discord-bot
npm install
```

**2. Configure environment**

Create a `.env` file:

```bash
DISCORD_TOKEN=your_bot_token_here
DISCORD_CLIENT_ID=your_application_id
GUILD_ID=your_server_id  # optional - for faster testing
```

**3. Register commands**

```bash
npm run register
```

**4. Start the bot**

```bash
npm run dev   # development with auto-restart
npm start     # production
```

The bot will be online and dashboard available at `http://localhost:3000`

## ⚙️ Configuration

### Environment Variables

| Variable            | Required | Description                                  |
| ------------------- | -------- | -------------------------------------------- |
| `DISCORD_TOKEN`     | ✅       | Your bot token                               |
| `DISCORD_CLIENT_ID` | ✅       | Your application ID                          |
| `GUILD_ID`          | ❌       | Server ID for instant command updates        |
| `OWNERS`            | ❌       | User IDs who can use owner-only commands     |
| `PORT`              | ❌       | Port for the web dashboard (default: 3000)   |
| `LOG_LEVEL`         | ❌       | How much to log: debug, info, warn, error    |
| `METRICS_ENABLED`   | ❌       | Turn on the /metrics endpoint (default: off) |

> **💡 Tip:** Set `GUILD_ID` during development for instant command updates. Remove it for production to deploy commands globally (takes up to 1 hour).

## 📁 Project Structure

```
discord-bot/
├── src/
│   ├── commands/      # slash commands by category
│   ├── components/    # button, menu, and modal handlers
│   ├── context/       # right-click context menus
│   ├── events/        # discord event listeners
│   ├── handlers/      # core interaction routing
│   ├── runtime/       # background services & plugins
│   └── util/          # helper functions
├── config/            # json configuration files
├── plugins/           # optional plugin modules
└── scripts/           # utility scripts
```

## 📋 Commands

### 🔧 Admin

| Command       | Description                    |
| ------------- | ------------------------------ |
| `/announce`   | Send announcements with embeds |
| `/audit`      | Setup audit logging            |
| `/verify`     | Setup verification system      |
| `/warn-setup` | Configure warnings             |

### 🛡️ Moderation

| Command     | Description                      |
| ----------- | -------------------------------- |
| `/ban`      | Ban a user                       |
| `/kick`     | Kick a user                      |
| `/lockdown` | Lock all channels at once        |
| `/unlock`   | Unlock channels                  |
| `/nuke`     | Delete all messages in a channel |
| `/purge`    | Bulk delete messages             |
| `/timeout`  | Timeout a user                   |
| `/warn`     | Warn a user                      |

### ℹ️ Information

| Command        | Description       |
| -------------- | ----------------- |
| `/avatar`      | Show user avatars |
| `/banner`      | Show user banners |
| `/serverinfo`  | Server stats      |
| `/userinfo`    | User details      |
| `/roleinfo`    | Role details      |
| `/channelinfo` | Channel info      |
| `/help`        | List commands     |

### 🎲 Fun

| Command     | Description |
| ----------- | ----------- |
| `/coinflip` | Flip a coin |
| `/dice`     | Roll dice   |

## 🔌 Adding Commands

Create a new file in `src/commands/{category}/`:

```javascript
// src/commands/fun/example.js
import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder().setName('example').setDescription('Does something cool'),

  category: 'fun',

  async execute(interaction) {
    await interaction.reply('Hello!');
  },
};
```

Register and restart:

```bash
npm run register  # register new command
npm run dev       # restart bot
```

## 🎨 Development

### Code Quality

```bash
npm run lint         # check for issues
npm run lint:fix     # auto-fix issues
npm run format       # format with prettier
npm run format:check # check formatting
```

### Web Dashboard

Access at `http://localhost:3000` to view:

- Bot status and uptime
- Command list
- Server count
- Memory usage
- `/metrics` endpoint (requires `METRICS_ENABLED=true`)

## 🧩 Plugins

Extend functionality without modifying core code:

```javascript
// plugins/example/index.js
export default {
  name: 'example-plugin',
  init(api) {
    api.on('ready', () => {
      console.log('Plugin loaded');
    });
  },
};
```

Plugins load automatically on startup.

## 🔒 Security

- ⚠️ Never commit your `.env` file
- 🔑 Keep your bot token secret
- 🔍 Run `npm audit` regularly
- 📦 Keep dependencies updated with `npm update`

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

This project was inspired by [Milrato's Discord Bot](https://github.com/Tomcat-SL/Milrato-Discord-Bot). While Milrato's bot is no longer maintained, many of the design patterns and feature ideas originated from that project. Thank you to the Milrato team for their contributions to the Discord bot development community.

---

<div align="center">

Made with ❤️ using Discord.js v14

</div>
