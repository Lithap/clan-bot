<div align="center">

<br>

<!-- Bot Icon -->
<img src="https://cdn.discordapp.com/embed/avatars/0.png" width="80" style="border-radius: 50%;"/>

<br><br>

# 🤖 Discord Bot

<sup>**Modular • Powerful • Extensible**</sup>

<br>

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js&logoColor=white)
![Discord.js](https://img.shields.io/badge/Discord.js-v14-5865F2?style=flat&logo=discord&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat)
![Stars](https://img.shields.io/github/stars/Lithap/clan-bot?style=flat&color=5865F2)

<br>

[Features](#-features) · [Install](#-quick-start) · [Commands](#-commands) · [Config](#-configuration)

---

<sup>Based on [Milrato's Bot](https://github.com/Tomato6966/Multipurpose-discord-bot)</sup>

</div>

<br>

## ✨ Features

<table>
<tr>
<td>

**🛡️ Moderation**
- Ban, kick, timeout, warn
- Server lockdown
- Bulk message purge

</td>
<td>

**📊 Information**
- Server & user stats
- Role & channel info
- Interactive help

</td>
<td>

**🔍 Audit Logs**
- 48+ tracked events
- Categorized logging
- Voice tracking

</td>
<td>

**⚙️ System**
- Web dashboard
- Plugin support
- Hot reload

</td>
</tr>
</table>

<br>

## 🚀 Quick Start

```bash
git clone <repository-url> && cd discord-bot
npm install
```

Create `.env`:
```env
DISCORD_TOKEN=your_token
DISCORD_CLIENT_ID=your_id
```

```bash
npm run register && npm run dev
```

> 🌐 **Dashboard:** http://localhost:3000

<br>

## ⚙️ Configuration

| Variable | Required | Description |
|:---------|:--------:|:------------|
| `DISCORD_TOKEN` | ✓ | Bot token |
| `DISCORD_CLIENT_ID` | ✓ | Application ID |
| `GUILD_ID` | | Server ID (dev mode) |
| `OWNERS` | | Owner user IDs |
| `PORT` | | Dashboard port |

<br>

## 📋 Commands

| Category | Commands |
|:--------:|:---------|
| Admin | `announce` `audit` `verify` `warn-setup` |
| Mod | `ban` `kick` `timeout` `warn` `lockdown` `purge` |
| Info | `serverinfo` `userinfo` `roleinfo` `avatar` `help` |
| Fun | `coinflip` `dice` |

<br>

## 📁 Structure

```
src/
├── commands/      # Slash commands
├── components/    # Buttons & modals
├── events/        # Event handlers
├── handlers/      # Routing
└── util/          # Helpers
```

<br>

## 🔧 Development

| Command | Action |
|:--------|:-------|
| `npm run dev` | Dev mode |
| `npm run register` | Register commands |
| `npm run lint` | Lint code |

<br>

## 🔒 Security

- Keep `.env` private
- Never commit tokens
- Run `npm audit`

<br>

---

<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,js,discord,git&theme=dark" width="150"/>

<br><br>

**MIT License** · Made by [Lithap](https://github.com/Lithap)

</div>
