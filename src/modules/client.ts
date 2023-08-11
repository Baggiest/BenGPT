import { Client } from "discord.js";
import { config } from "./config";
import handleMessage from "./events"

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});



export default client;