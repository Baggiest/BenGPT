import client from "./modules/client";
import { config } from "./modules/config";

client.once("ready", () => {
    console.log("Ben is fucking your mom")
})
client.on("messageCreate", async (m) => {
    console.log("bro said " + m)
    // await handleMessage(m)
})

client.login(config.DISCORD_TOKEN)
