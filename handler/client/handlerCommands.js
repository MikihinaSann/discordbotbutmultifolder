const {} = require('fs');

module.exports = (client) => {
    client.handlerCommands = async (commandsFile) => {
        console.log("[HANDLER] Loading commands...");
        for (const file of commandsFile) {
            const command = require("../../commands/" + file);
            client.commands.set(command.data.name, command);
            client.commandArray.push(command.data);
            console.log(`[HANDLER] ${command.data.name} loaded!`);
        }
    }
}