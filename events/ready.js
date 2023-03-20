module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`[READY] Logged in as ${client.user.tag}!`);

        client.application.commands.set(client.commandArray);
    }
}