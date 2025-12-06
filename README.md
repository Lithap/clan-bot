<div align="center">

<!-- Animated Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:1a1b27,100:5865F2&height=120&section=header&animation=twinkling"/>

<!-- Animated Bot Icon -->
<img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" width="80"/>

<br>

<!-- Animated Title -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=35&duration=1&pause=99999&color=5865F2&center=true&vCenter=true&width=400&lines=DISCORD+BOT" alt="Title" />

<br>

<!-- Animated Subtitle -->
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=14&duration=2500&pause=1000&color=8B949E&center=true&vCenter=true&width=600&lines=Modular+%7C+Moderation+%7C+Audit+Logging;Built+with+Discord.js+v14;Plugin+Architecture+%7C+Hot+Reload" alt="Subtitle" />

<br><br>

<!-- Animated Badges -->
<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18.17+-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=0d1117" alt="Node.js"/></a>
<a href="https://discord.js.org/"><img src="https://img.shields.io/badge/Discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white&labelColor=0d1117" alt="Discord.js"/></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge&labelColor=0d1117" alt="License"/></a>

<br><br>

<!-- Animated Line -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

</div>

<!-- Credits Box -->
<div align="center">

> 💡 Based on [Tomato's Multipurpose Bot](https://github.com/Tomato6966/Multipurpose-discord-bot) by [Milrato](https://github.com/Tomato6966)

</div>

<br>

<!-- Features Section with Icons -->
## <img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="25"> Features

<div align="center">

<table>
<tr>
<td align="center" width="25%">
<img src="https://media.giphy.com/media/kH1DBkPNyZPOk0BxrM/giphy.gif" width="50"/><br>
<b>🛡️ Moderation</b><br>
<sub>Ban • Kick • Timeout<br>Warn • Lockdown • Purge</sub>
</td>
<td align="center" width="25%">
<img src="https://media.giphy.com/media/KzJkzjggfGN5Py6nkT/giphy.gif" width="50"/><br>
<b>📊 Information</b><br>
<sub>Server Stats • Profiles<br>Roles • Channels • Help</sub>
</td>
<td align="center" width="25%">
<img src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif" width="50"/><br>
<b>🔍 Audit Logs</b><br>
<sub>48+ Events • Categories<br>Voice • Mod Actions</sub>
</td>
<td align="center" width="25%">
<img src="https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif" width="50"/><br>
<b>⚙️ System</b><br>
<sub>Dashboard • Plugins<br>Hot Reload • Metrics</sub>
</td>
</tr>
</table>

</div>

<br>

<!-- Quick Start with Terminal Style -->
## <img src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/Giphy.gif" width="25"> Quick Start

```bash
# 📦 Clone & Install
git clone <repository-url>
cd discord-bot && npm install

# ⚙️ Configure
echo "DISCORD_TOKEN=your_token" > .env
echo "DISCORD_CLIENT_ID=your_id" >> .env

# 🚀 Launch
npm run register && npm run dev
```

<div align="center">

**Dashboard:** `http://localhost:3000`

</div>

<br>

<!-- Configuration Table -->
## <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="25"> Configuration

| Variable | Required | Description |
|:---------|:--------:|:------------|
| `DISCORD_TOKEN` | ✅ | Bot token from Developer Portal |
| `DISCORD_CLIENT_ID` | ✅ | Application ID |
| `GUILD_ID` | ⚡ | Server ID for instant updates |
| `OWNERS` | 📝 | Owner user IDs |
| `PORT` | 🌐 | Dashboard port (default: 3000) |

<br>

<!-- Commands Grid -->
## <img src="https://media.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif" width="25"> Commands

<div align="center">

```
┌─────────────────────────────────────────────────────────────────┐
│                         COMMAND LIST                            │
├──────────┬──────────────────────────────────────────────────────┤
│  ADMIN   │  /announce  /audit  /verify  /warn-setup             │
├──────────┼──────────────────────────────────────────────────────┤
│  MOD     │  /ban  /kick  /timeout  /warn  /lockdown  /purge     │
├──────────┼──────────────────────────────────────────────────────┤
│  INFO    │  /serverinfo  /userinfo  /roleinfo  /avatar  /help   │
├──────────┼──────────────────────────────────────────────────────┤
│  FUN     │  /coinflip  /dice                                    │
└──────────┴──────────────────────────────────────────────────────┘
```

</div>

<br>

<!-- Project Structure -->
## <img src="https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif" width="25"> Structure

```
📦 discord-bot
├── 📂 src
│   ├── 📁 commands/     → Slash commands by category
│   ├── 📁 components/   → Buttons, menus, modals
│   ├── 📁 events/       → Discord event listeners
│   ├── 📁 handlers/     → Interaction routing
│   ├── 📁 runtime/      → Services & plugins
│   └── 📁 util/         → Helper functions
├── 📂 config/           → JSON configurations
├── 📂 plugins/          → Extension modules
└── 📂 scripts/          → Utility scripts
```

<br>

<!-- Code Example -->
## <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="25"> Adding Commands

```javascript
// src/commands/fun/example.js
import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('example')
    .setDescription('Does something cool'),
  
  category: 'fun',
  cooldown: 5,

  async execute(interaction) {
    await interaction.reply({
      content: '✨ Hello from the bot!',
      ephemeral: true
    });
  }
};
```

```bash
npm run register && npm run dev
```

<br>

<!-- Development -->
## <img src="https://media.giphy.com/media/uhQuegHFqkVYuFMXMQ/giphy.gif" width="25"> Development

<div align="center">

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start with hot reload |
| `npm run lint` | Check for issues |
| `npm run lint:fix` | Auto-fix issues |
| `npm run format` | Format with Prettier |
| `npm run register` | Register slash commands |

</div>

<br>

<!-- Security -->
## 🔒 Security

<div align="center">

```diff
+ ✅ Never commit .env files
+ ✅ Keep bot token secret
+ ✅ Run npm audit regularly
+ ✅ Keep dependencies updated
- ⚠️ Don't share tokens publicly
```

</div>

<br>

<!-- Footer -->
<div align="center">

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<br>

### Tech Stack

<img src="https://skillicons.dev/icons?i=nodejs,js,discord,git,npm,vscode&theme=dark" />

<br><br>

<!-- Stats -->
<img src="https://img.shields.io/github/stars/Lithap/clan-bot?style=for-the-badge&color=5865F2&labelColor=0d1117&logo=github" alt="Stars"/>
<img src="https://img.shields.io/github/forks/Lithap/clan-bot?style=for-the-badge&color=5865F2&labelColor=0d1117&logo=github" alt="Forks"/>
<img src="https://img.shields.io/github/issues/Lithap/clan-bot?style=for-the-badge&color=5865F2&labelColor=0d1117" alt="Issues"/>
<img src="https://img.shields.io/github/last-commit/Lithap/clan-bot?style=for-the-badge&color=5865F2&labelColor=0d1117" alt="Last Commit"/>

<br><br>

<!-- Animated Footer Text -->
<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=12&duration=3000&pause=1000&color=5865F2&center=true&vCenter=true&width=400&lines=Made+with+%E2%9D%A4%EF%B8%8F+using+Discord.js+v14;Open+Source+%7C+MIT+License" alt="Footer" />

<br><br>

**[MIT License](LICENSE)** · Based on [Milrato's Bot](https://github.com/Tomato6966/Multipurpose-discord-bot)

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:1a1b27,100:5865F2&height=80&section=footer"/>

</div>
