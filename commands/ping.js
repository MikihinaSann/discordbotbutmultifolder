module.exports = {
    data: {
        name: 'ping',
        description: 'ปิงไงละ'
    },
    async execute(interaction, client) {
        await interaction.reply('Pong!');
    }
}