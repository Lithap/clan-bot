<div align="center">

# 🤖 Discord Bot

**Modular • Powerful • Extensible**

<br>

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=0d1117)
![Discord.js](https://img.shields.io/badge/Discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white&labelColor=0d1117)
![License](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge&labelColor=0d1117)

<br>

[`Features`](#-features) · [`Install`](#-quick-start) · [`Commands`](#-commands) · [`Config`](#-configuration)

---

<sub>Based on [Milrato's Bot](https://github.com/Tomato6966/Multipurpose-discord-bot)</sub>

</div>

<br>

## ✨ Features

<table>
<tr>
<td width="25%">

### 🛡️ Moderation
- Ban, kick, timeout
- Warn system
- Server lockdown
- Bulk purge

</td>
<td width="25%">

### 📊 Information
- Server stats
- User profiles
- Role & channel info
- Interactive help

</td>
<td width="25%">

### 🔍 Audit Logs
- 48+ events
- Categorized logs
- Voice tracking
- Mod actions

</td>
<td width="25%">

### ⚙️ System
- Web dashboard
- Plugin support
- Hot reload
- Metrics

</td>
</tr>
</table>

<br>

## 🚀 Quick Start

```bash
# Clone & Install
git clone <repository-url> && cd discord-bot
npm install

# Configure
echo "DISCORD_TOKEN=your_token" > .env
echo "DISCORD_CLIENT_ID=your_id" >> .env

# Launch
npm run register && npm run dev
```

<div align="center">

🌐 **Dashboard:** `http://localhost:3000`

</div>

<br>

## ⚙️ Configuration

| Variable | Required | Description |
|:---------|:--------:|:------------|
| `DISCORD_TOKEN` | ✅ | Bot token |
| `DISCORD_CLIENT_ID` | ✅ | Application ID |
| `GUILD_ID` | ⚡ | Server ID (dev) |
| `OWNERS` | 👤 | Owner IDs |
| `PORT` | 🌐 | Dashboard port |

<br>

## 📋 Commands

| Category | Commands |
|:--------:|:---------|
| 🔧 Admin | `announce` `audit` `verify` `warn-setup` |
| 🛡️ Mod | `ban` `kick` `timeout` `warn` `lockdown` `purge` |
| 📊 Info | `serverinfo` `userinfo` `roleinfo` `avatar` `help` |
| 🎲 Fun | `coinflip` `dice` |

<br>

## 📁 Structure

```
📦 discord-bot
├── 📂 src
│   ├── 📁 commands      # Slash commands
│   ├── 📁 components    # Buttons & modals
│   ├── 📁 events        # Event handlers
│   ├── 📁 handlers      # Routing
│   └── 📁 util          # Helpers
├── 📂 config            # JSON configs
└── 📂 plugins           # Extensions
```

<br>

## 🔧 Development

| Command | Action |
|:--------|:-------|
| `npm run dev` | 🔥 Dev mode |
| `npm run start` | 🚀 Production |
| `npm run register` | 📝 Register commands |
| `npm run lint` | 🔍 Lint code |

<br>

## 🔒 Security

```diff
+ ✅ Keep .env private
+ ✅ Never commit tokens
+ ✅ Run npm audit
- ⚠️ Don't share secrets
```

<br>

---

<div align="center">

### Tech Stack

<img src="https://skillicons.dev/icons?i=nodejs,js,discord,git,npm&theme=dark"/>

<br><br>

![Stars](https://img.shields.io/github/stars/Lithap/clan-bot?style=for-the-badge&color=5865F2&labelColor=0d1117)
![Forks](https://img.shields.io/github/forks/Lithap/clan-bot?style=for-the-badge&color=5865F2&labelColor=0d1117)
![Issues](https://img.shields.io/github/issues/Lithap/clan-bot?style=for-the-badge&color=5865F2&labelColor=0d1117)

<br>

**Made with ❤️ by [Lithap](https://github.com/Lithap)**

**[MIT License](LICENSE)** • Powered by Discord.js v14

</div>
