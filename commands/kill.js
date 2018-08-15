const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    if (args[0]) {
    if (message.mentions) {
        if (message.mentions.users) {
            targetUser = message.guild.members.get(message.mentions.users.first().id);
        }
    }
}
let kills = require("./kills.json");
let killmethod = [Math.floor((Math.random() * kills.length))];
let embed = new Discord.RichEmbed()
    .setAuthor("| Kill", message.author.displayAvatarURL)
    .setColor(0xff6464)
    .setDescription(kills[killmethod].replace(/userkiller/g, message.author.username).replace(/userkilled/g, targetUser.user.username))
message.channel.send(embed)
}