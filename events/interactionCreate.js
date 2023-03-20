module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.user.bot || !interaction.guildId) return;
        
        const commands = client.commands.get(interaction.commandName);
        if (!commands) return;

        await commands.execute(interaction, client)
    }
}