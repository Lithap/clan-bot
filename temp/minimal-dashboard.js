/**
 * Dashboard - Show current status (MINIMAL MILRATO STYLE)
 */
async function showDashboard(interaction, isUpdate = false) {
  const config = getGuildAuditConfig(interaction.guild.id);
  const health = getSystemHealth();
  const stats = config?.stats;

  // NOT CONFIGURED VIEW
  if (!config || !config.enabled) {
    const embed = new EmbedBuilder()
      .setAuthor({
        name: 'Audit System',
        iconURL: interaction.client.user.displayAvatarURL(),
      })
      .setDescription('Configure audit logging for your server.')
      .addFields(
        {
          name: 'Status',
          value: '`Not Configured`',
          inline: true,
        },
        {
          name: 'Categories',
          value: '`0/5`',
          inline: true,
        },
        {
          name: 'Bot Filter',
          value: '`Disabled`',
          inline: true,
        },
      )
      .setColor(0x2b2d31)
      .setFooter({ text: 'Use the menu below to configure' });

    const selectMenu = new StringSelectMenuBuilder()
      .setCustomId('audit_setup_menu')
      .setPlaceholder('⚙️ Setup Options')
      .addOptions([
        {
          label: 'Quick Setup',
          description: 'Configure all categories at once',
          value: 'quick_setup',
          emoji: '⚡',
        },
        {
          label: 'Messages',
          description: 'Edits, deletions, bulk operations',
          value: 'setup_messages',
          emoji: '💬',
        },
        {
          label: 'Members',
          description: 'Joins, leaves, role changes',
          value: 'setup_members',
          emoji: '👥',
        },
        {
          label: 'Moderation',
          description: 'Bans, kicks, timeouts',
          value: 'setup_moderation',
          emoji: '🔨',
        },
        {
          label: 'Server',
          description: 'Channels, roles, settings',
          value: 'setup_server',
          emoji: '⚙️',
        },
        {
          label: 'Voice',
          description: 'Connects, mutes, moves',
          value: 'setup_voice',
          emoji: '🎤',
        },
      ]);

    const row = new ActionRowBuilder().addComponents(selectMenu);

    const payload = { embeds: [embed], components: [row], ephemeral: true };
    return isUpdate ? interaction.update(payload) : interaction.reply(payload);
  }

  // CONFIGURED VIEW - MINIMAL MILRATO STYLE
  const successRate =
    stats?.totalLogs > 0 ? ((stats.successfulLogs / stats.totalLogs) * 100).toFixed(1) : '100.0';

  const configuredCategories = Object.keys(config.channels || {}).length;

  const embed = new EmbedBuilder()
    .setAuthor({
      name: 'Audit System',
      iconURL: interaction.client.user.displayAvatarURL(),
    })
    .setDescription(
      `Logging to <#${Object.values(config.channels || {})[0] || '000'}> • **${formatNumberAnimated(stats?.totalLogs || 0)}** events tracked`,
    )
    .addFields(
      {
        name: 'Status',
        value: `\`${health.status === 'healthy' ? 'Active' : 'Issues'}\``,
        inline: true,
      },
      {
        name: 'Success Rate',
        value: `\`${successRate}%\``,
        inline: true,
      },
      {
        name: 'Categories',
        value: `\`${configuredCategories}/5\``,
        inline: true,
      },
    )
    .setColor(health.status === 'healthy' ? 0x57f287 : 0xed4245)
    .setFooter({
      text: config.enabled ? '● Active' : '● Paused',
    });

  // Management menu
  const selectMenu = new StringSelectMenuBuilder()
    .setCustomId('audit_manage_menu')
    .setPlaceholder('⚙️ Manage')
    .addOptions([
      {
        label: 'Messages',
        description: 'Configure message logging',
        value: 'setup_messages',
        emoji: '💬',
      },
      {
        label: 'Members',
        description: 'Configure member logging',
        value: 'setup_members',
        emoji: '👥',
      },
      {
        label: 'Moderation',
        description: 'Configure moderation logging',
        value: 'setup_moderation',
        emoji: '🔨',
      },
      {
        label: 'Server',
        description: 'Configure server logging',
        value: 'setup_server',
        emoji: '⚙️',
      },
      {
        label: 'Voice',
        description: 'Configure voice logging',
        value: 'setup_voice',
        emoji: '🎤',
      },
      {
        label: 'Bot Filter',
        description: 'Toggle bot action filtering',
        value: 'toggle_bots',
        emoji: '🤖',
      },
      {
        label: 'Test System',
        description: 'Send a test log',
        value: 'test_system',
        emoji: '🧪',
      },
    ]);

  const selectRow = new ActionRowBuilder().addComponents(selectMenu);

  const buttons = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('audit_toggle')
      .setLabel(config.enabled ? 'Pause' : 'Resume')
      .setEmoji(config.enabled ? '⏸️' : '▶️')
      .setStyle(config.enabled ? ButtonStyle.Secondary : ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId('audit_refresh')
      .setLabel('Refresh')
      .setEmoji('🔄')
      .setStyle(ButtonStyle.Secondary),
  );

  const payload = { embeds: [embed], components: [selectRow, buttons], ephemeral: true };
  return isUpdate ? interaction.update(payload) : interaction.reply(payload);
}
