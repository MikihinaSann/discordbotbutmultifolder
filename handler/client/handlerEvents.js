module.exports = (client) => {
    client.handlerEvents = async (eventsFile) => {
        console.log(`[HANDLER]`);
        for (const file of eventsFile) {
            const event = require("../../events/" + file);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client));
            }
            console.log(`[HANDLER] ${event.name} loaded!`)
        }
    }
}