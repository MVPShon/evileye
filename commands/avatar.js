const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    if (!args[0]) {
    let image = message.author.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}'s Avatar`)
        .setImage(image);
    message.channel.send(embed);
    } else {
        if (args[0]) {
            if (message.mentions) {
                if (message.mentions.users) {
                    targetUser = message.guild.members.get(message.mentions.users.first().id);
                }
            }
        }
        let image = targetUser.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
        .setTitle(`${targetUser.user.username}'s Avatar`)
            .setImage(image);
        message.channel.send(embed);
}
}