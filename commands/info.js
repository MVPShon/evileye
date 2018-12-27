const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
let totalSeconds = (evileye.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.round(totalSeconds % 60);
let uptime = `${hours} hours, ${minutes} minutes and ${seconds} second(s).`;
let embed = new Discord.RichEmbed()
    .setAuthor(`Generated Stats`)
    .setColor(0xff6464)
    .addField("Name", evileye.user.tag, true)
    .addField("Bot Owner", evileye.users.get("168865955940794368").tag, true)
    .addField(`Servers `, evileye.guilds.size, true)
    .addField(`Users `, evileye.users.size, true)
    .addField("Uptime", uptime)
    .addField("Ping", new Date().getTime() - message.createdTimestamp + " ms.")
    .addField("Description", "Multi-functional, ever growing bot based off of the character `Evileye` from the Overlord anime series. Constantly being updated daily with more cool, exciting stuff for you to enjoy!")
    .addField("Important Links", "[Discord Server](https://discord.gg/EreEk58) | [Upvote Evileye](https://bit.ly/2vwCOz8) | [Invite Evileye](https://discordapp.com/oauth2/authorize?client_id=472335600477798420&scope=bot&permissions=8)")
    .setThumbnail(evileye.user.displayAvatarURL)
message.channel.send(embed);
}
