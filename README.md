<div align="center">

<!-- Animated Title -->
<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=40&duration=3000&pause=1000&color=5865F2&center=true&vCenter=true&width=450&lines=🤖+Discord+Bot" alt="Title" />

<!-- Animated Tagline -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=14&duration=2000&pause=500&color=7289DA&center=true&vCenter=true&width=400&lines=Modular+•+Powerful+•+Extensible;Built+with+Discord.js+v14;Open+Source+%7C+MIT+License" alt="Tagline" />

<br><br>

<!-- Badges -->
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white&labelColor=0d1117)
![Discord.js](https://img.shields.io/badge/Discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white&labelColor=0d1117)
![License](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge&labelColor=0d1117)

<br>

[`Features`](#-features) · [`Install`](#-quick-start) · [`Commands`](#-commands) · [`Config`](#️-configuration)

<!-- Animated Divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<sub>Based on [Milrato's Bot](https://github.com/Tomato6966/Multipurpose-discord-bot)</sub>

</div>

<br>

## <img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="25"/> Features

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

## <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="25"/> Quick Start

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

## <img src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" width="25"/> Configuration

| Variable | Required | Description |
|:---------|:--------:|:------------|
| `DISCORD_TOKEN` | ✅ | Bot token |
| `DISCORD_CLIENT_ID` | ✅ | Application ID |
| `GUILD_ID` | ⚡ | Server ID (dev) |
| `OWNERS` | 👤 | Owner IDs |
| `PORT` | 🌐 | Dashboard port |

<br>

## <img src="https://media.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif" width="25"/> Commands

| Category | Commands |
|:--------:|:---------|
| 🔧 Admin | `announce` `audit` `verify` `warn-setup` |
| 🛡️ Mod | `ban` `kick` `timeout` `warn` `lockdown` `purge` |
| 📊 Info | `serverinfo` `userinfo` `roleinfo` `avatar` `help` |
| 🎲 Fun | `coinflip` `dice` |

<br>

## <img src="https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif" width="25"/> Structure

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

## <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="25"/> Development

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

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%"/>

<br>

### Tech Stack

<img src="https://skillicons.dev/icons?i=nodejs,js,discord,git,npm&theme=dark"/>

<br><br>

![Stars](https://img.shields.io/github/stars/Lithap/clan-bot?style=for-the-badge&color=5865F2&labelColor=0d1117)
![Forks](https://img.shields.io/github/forks/Lithap/clan-bot?style=for-the-badge&color=5865F2&labelColor=0d1117)
![Issues](https://img.shields.io/github/issues/Lithap/clan-bot?style=for-the-badge&color=5865F2&labelColor=0d1117)

<br>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=12&duration=2500&pause=1000&color=5865F2&center=true&vCenter=true&width=400&lines=Made+with+❤️+by+Lithap;Powered+by+Discord.js+v14;Open+Source+•+MIT+License" alt="Footer" />

<br>

**[MIT License](LICENSE)** · **[Lithap](https://github.com/Lithap)**

</div>
