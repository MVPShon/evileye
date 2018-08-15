const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
if (message.author.bot) return;
let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
let day = message.guild.createdAt.getDate()
let month = 1 + message.guild.createdAt.getMonth()
let year = message.guild.createdAt.getFullYear()
let servicon = message.guild.iconURL;
let serverembed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, servicon)
    .setFooter(`Server Created on ${month}/${day}/${year}`)
    .setColor(0xff6464)
    .setThumbnail(servicon)
    .addField("Owner", message.guild.owner.user.tag, true)
    .addField("Region", message.guild.region, true)
    .addField("Channels", message.guild.channels.size, true)
    .addField("Members", message.guild.memberCount, true)
    .addField("Online", online.size, true)
    .addField("Roles", message.guild.roles.size, true);
message.channel.send(serverembed);
}