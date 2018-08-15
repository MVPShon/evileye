const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    if (args[0]) {
    if (message.mentions) {
        if (message.mentions.users) {
            targetUser = message.guild.members.get(message.mentions.users.first().id);
        }
    }
}
if (args[0]) {
    let moment = require("moment");
    let day = targetUser.user.createdAt.getDate()
    let month = 1 + targetUser.user.createdAt.getMonth()
    let year = targetUser.user.createdAt.getFullYear()
    let jday = targetUser.guild.joinedAt.getDate()
    let jmonth = 1 + targetUser.guild.joinedAt.getMonth()
    let jyear = targetUser.guild.joinedAt.getFullYear()
    if (targetUser.user.bot) {
        let embed = new Discord.RichEmbed()
            .setColor(0xff6464)
            .setTitle("Info for `" + targetUser.user.username + "`")
            .addField("Account Created", `${month}/${day}/${year}`, true)
            .addField("Bot", "This user is a bot.", true)
            .addField("Status", targetUser.user.presence.status, true)
            .addField("Last Seen", targetUser.user.lastMessage ? moment(targetUser.user.lastMessage.createdTimestamp).calendar() + ' UTC' : 'Unknown', true)
            .addField(`Joined ${message.guild.name}`, `${jmonth}/${jday}/${jyear}`, true)
            .addField("Roles", targetUser.roles.map(c => c.name).join(', '), true)
            .setFooter("Searched")
            .setTimestamp()
            .setThumbnail(targetUser.user.displayAvatarURL)
        message.channel.send(embed)
    }
    if (!targetUser.user.bot) {
        let embed = new Discord.RichEmbed()
            .setColor(0xff6464)
            .setTitle("Info for `" + targetUser.user.username + "`")
            .addField("Account Created", `${month}/${day}/${year}`, true)
            .addField("Bot", "This user is not a bot.", true)
            .addField("Status", targetUser.user.presence.status, true)
            .addField("Last Seen", targetUser.user.lastMessage ? moment(targetUser.user.lastMessage.createdTimestamp).calendar() + ' UTC' : 'Unknown', true)
            .addField(`Joined ${message.guild.name}`, `${jmonth}/${jday}/${jyear}`, true)
            .addField("Roles", targetUser.roles.map(c => c.name).join(', '), true)
            .setFooter("Searched")
            .setTimestamp()
            .setThumbnail(targetUser.user.displayAvatarURL)
        message.channel.send(embed)
        }   
    }
}