<div align="center">

<!-- Animated Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=Discord%20Bot&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=fff" width="100%"/>

<br/>

<!-- Typing Animation for subtitle -->
<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&multiline=false&repeat=true&width=600&lines=Modular+Discord+Bot;Moderation+%2B+Audit+Logging;Built+with+Discord.js+v14" alt="Typing SVG" />
</p>

<!-- Badges with animations -->
<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-%3E%3D18.17-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  </a>
  <a href="https://discord.js.org/">
    <img src="https://img.shields.io/badge/Discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord.js"/>
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License"/>
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/Lithap/clan-bot?style=social" alt="Stars"/>
  <img src="https://img.shields.io/github/forks/Lithap/clan-bot?style=social" alt="Forks"/>
  <img src="https://img.shields.io/github/issues/Lithap/clan-bot?style=flat-square" alt="Issues"/>
  <img src="https://img.shields.io/github/last-commit/Lithap/clan-bot?style=flat-square" alt="Last Commit"/>
</p>

<!-- Divider with gradient -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!-- Note with animated box -->
<table>
<tr>
<td>

### 💡 Project Origins & Credits

> **Important:** This project is heavily inspired by and builds upon the amazing work of **[Tomato (Milrato)](https://github.com/Tomcat-SL)** and their **[Milrato Discord Bot](https://github.com/Tomcat-SL/Milrato-Discord-Bot)** project.
>
> While Milrato's bot is no longer actively maintained, it served as the foundation and inspiration for many of the architectural decisions, features, and design patterns used in this project. This bot would not exist without Tomato's pioneering work in the Discord bot development space.
>
> **All credit for the original concepts, structure, and innovation goes to Tomato/Milrato.** 🙏

</td>
</tr>
</table>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

</div>

## ✨ Features

<!-- Features with animated icons -->
<div align="center">

```mermaid
graph LR
    A[🤖 Bot Core] --> B[🛡️ Moderation]
    A --> C[📊 Information]
    A --> D[🔍 Audit Logs]
    A --> E[⚙️ System]

    B --> F[Ban/Kick/Timeout]
    B --> G[Lockdown System]
    B --> H[Warning System]

    C --> I[Server Stats]
    C --> J[User Profiles]
    C --> K[Role/Channel Info]

    D --> L[48+ Events]
    D --> M[Categorized Logs]
    D --> N[Voice Tracking]

    E --> O[Web Dashboard]
    E --> P[Plugin System]
    E --> Q[Hot Reload]

    style A fill:#5865F2,stroke:#fff,stroke-width:2px,color:#fff
    style B fill:#ED4245,stroke:#fff,stroke-width:2px,color:#fff
    style C fill:#57F287,stroke:#fff,stroke-width:2px,color:#fff
    style D fill:#FEE75C,stroke:#fff,stroke-width:2px,color:#000
    style E fill:#EB459E,stroke:#fff,stroke-width:2px,color:#fff
```

</div>

<table>
<tr>
<td width="50%">

### 🛡️ Moderation

- ⚔️ Ban, kick, timeout, warn users
- 🔒 Emergency server lockdown
- 🗑️ Bulk message deletion
- 💥 Channel nuking
- ⚖️ Configurable warning system

</td>
<td width="50%">

### 📊 Information

- 📈 Server statistics
- 👤 User profiles & badges
- 🎭 Role & channel details
- 🖼️ Avatar & banner viewer
- 📖 Interactive help menu

</td>
</tr>
<tr>
<td width="50%">

### 🔍 Audit Logging

- 📝 48+ tracked Discord events
- 📂 Organized by categories
- 💬 Message, member, server changes
- 🔊 Voice state tracking
- 🔨 Moderation actions

</td>
<td width="50%">

### ⚙️ System

- 🌐 Web dashboard on port 3000
- 🔌 Plugin architecture
- 🔥 Hot-reload support
- 📊 Metrics endpoint
- 💾 Crash reporting

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

## 🙏 Acknowledgments & Credits

<div align="center">

### Special Thanks to Tomato (Milrato) 🎖️

<table>
<tr>
<td align="center" width="100%">

This entire project is based on the incredible work of **[Tomato (Milrato)](https://github.com/Tomcat-SL)**.

The **[Milrato Discord Bot](https://github.com/Tomcat-SL/Milrato-Discord-Bot)** project was a groundbreaking, feature-rich Discord bot that set the standard for modular bot architecture. Although it's no longer actively maintained, it remains one of the most influential Discord bot projects in the community.

**What we adapted from Milrato:**
- 🏗️ Modular command and event architecture
- 🎨 UI/UX design patterns and embed styling  
- 🔧 Advanced moderation systems
- 📊 Audit logging structure
- ⚙️ Plugin system concepts
- 🛠️ Overall project organization

**This project would not exist without Tomato's vision, innovation, and contributions to the Discord bot development community.**

Thank you, Tomato! 🙏❤️

🔗 **Original Project:** [Milrato Discord Bot](https://github.com/Tomcat-SL/Milrato-Discord-Bot)  
👤 **Creator:** [Tomato/Tomcat-SL](https://github.com/Tomcat-SL)

</td>
</tr>
</table>

</div>

---

<div align="center">

<!-- Animated divider -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

### 📊 Repository Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=Lithap&repo=clan-bot&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=00D9FF&icon_color=00D9FF&text_color=ffffff" alt="GitHub Stats" width="48%"/>
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=Lithap&theme=tokyonight&hide_border=true&background=0D1117&ring=00D9FF&fire=00D9FF&currStreakLabel=00D9FF" alt="GitHub Streak" width="48%"/>
</p>

<!-- Language Stats -->
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Lithap&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=00D9FF&text_color=ffffff" alt="Top Languages" width="48%"/>
</p>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!-- Activity Graph -->
<img src="https://github-readme-activity-graph.vercel.app/graph?username=Lithap&theme=tokyo-night&hide_border=true&bg_color=0D1117&color=00D9FF&line=00D9FF&point=ffffff" width="100%" alt="Contribution Graph"/>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

### 🛠️ Built With

<p align="center">
  <img src="https://skillicons.dev/icons?i=nodejs,javascript,discord,git,github,vscode,npm" alt="Tech Stack"/>
</p>

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<!-- Made with love badge -->
<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=18&pause=1000&color=00D9FF&center=true&vCenter=true&repeat=true&width=435&lines=Made+with+%E2%9D%A4%EF%B8%8F+using+Discord.js+v14;Open+Source+%7C+MIT+License;Star+%E2%AD%90+if+you+like+it!" alt="Made with love" />

<!-- Wave Footer -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>

</div>
