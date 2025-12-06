<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:5865F2&height=100&section=header"/>

# Discord Bot

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=16&duration=3000&pause=1000&color=5865F2&center=true&vCenter=true&width=500&lines=Modular+Discord+Bot;Moderation+%2B+Audit+Logging;Built+with+Discord.js+v14" alt="Typing" />

<br>

[![Node.js](https://img.shields.io/badge/Node.js-18.17+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Discord.js](https://img.shields.io/badge/Discord.js-v14-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.js.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

</div>

---

> **Credits:** Based on [Tomato's Multipurpose Bot](https://github.com/Tomato6966/Multipurpose-discord-bot). All credit for original concepts goes to [Milrato](https://github.com/Tomato6966).

---

## Features

<table>
<tr>
<td width="50%">

### 🛡️ Moderation
- Ban, kick, timeout, warn
- Emergency server lockdown
- Bulk message deletion
- Configurable warning system

</td>
<td width="50%">

### 📊 Information
- Server statistics
- User profiles & badges
- Role & channel details
- Interactive help menu

</td>
</tr>
<tr>
<td width="50%">

### 🔍 Audit Logging
- 48+ tracked events
- Categorized logs
- Voice state tracking
- Moderation actions

</td>
<td width="50%">

### ⚙️ System
- Web dashboard (port 3000)
- Plugin architecture
- Hot-reload support
- Metrics endpoint

</td>
</tr>
</table>

---

## Quick Start

```bash
# Clone & install
git clone <repository-url>
cd discord-bot
npm install

# Configure
echo "DISCORD_TOKEN=your_token" > .env
echo "DISCORD_CLIENT_ID=your_id" >> .env

# Run
npm run register
npm run dev
```

Dashboard: `http://localhost:3000`

---

## Configuration

| Variable | Required | Description |
|----------|:--------:|-------------|
| `DISCORD_TOKEN` | ✅ | Bot token |
| `DISCORD_CLIENT_ID` | ✅ | Application ID |
| `GUILD_ID` | ❌ | Server ID (faster dev updates) |
| `OWNERS` | ❌ | Owner user IDs |
| `PORT` | ❌ | Dashboard port (default: 3000) |

---

## Commands

| Category | Commands |
|:--------:|----------|
| **Admin** | `/announce` `/audit` `/verify` `/warn-setup` |
| **Mod** | `/ban` `/kick` `/timeout` `/warn` `/lockdown` `/purge` `/nuke` |
| **Info** | `/serverinfo` `/userinfo` `/roleinfo` `/avatar` `/banner` `/help` |
| **Fun** | `/coinflip` `/dice` |

---

## Project Structure

```
src/
├── commands/      # Slash commands
├── components/    # Buttons, menus, modals
├── events/        # Event listeners
├── handlers/      # Interaction routing
├── runtime/       # Services & plugins
└── util/          # Helpers
```

---

## Adding Commands

```javascript
// src/commands/fun/example.js
import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('example')
    .setDescription('Does something'),
  
  async execute(interaction) {
    await interaction.reply('Hello!');
  }
};
```

```bash
npm run register && npm run dev
```

---

## Development

```bash
npm run lint         # Check issues
npm run lint:fix     # Auto-fix
npm run format       # Prettier
```

---

## Security

- Never commit `.env`
- Keep token secret
- Run `npm audit` regularly
- Keep dependencies updated

---

<div align="center">

### Tech Stack

<img src="https://skillicons.dev/icons?i=nodejs,js,discord,git&theme=dark" />

<br><br>

[![Stars](https://img.shields.io/github/stars/Lithap/clan-bot?style=flat-square&color=5865F2)](https://github.com/Lithap/clan-bot)
[![Issues](https://img.shields.io/github/issues/Lithap/clan-bot?style=flat-square)](https://github.com/Lithap/clan-bot/issues)
[![License](https://img.shields.io/badge/MIT-License-yellow?style=flat-square)](LICENSE)

<br>

**MIT License** · Based on [Milrato's Bot](https://github.com/Tomato6966/Multipurpose-discord-bot)

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:5865F2&height=80&section=footer"/>

</div>
