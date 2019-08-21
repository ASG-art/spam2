const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("514840226708062264")
setInterval(function() {
channel.send(`انا مستر بيتر هنشرك علي التويتر`); 
}, 30)
})

client.login(process.env.BOT_TOKEN);
