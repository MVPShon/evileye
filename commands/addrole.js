const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have the right permissions for this.");
    if (args[0]) {
        if (message.mentions) {
            if (message.mentions.users) {
                targetUser = message.guild.members.get(message.mentions.users.first().id);
            }
        }
    }
    let role = message.guild.roles.find(r => r.name == args[1]);
    if (!role) return message.reply("I could not find that role.")
    if (targetUser.roles.has(role.id)) return message.channel.send(`${targetUser.user.username} already has the role: \"${role}\"`);
    targetUser.addRole(role)
    message.channel.send(`I have successfully added ${role} to ${targetUser.user.username}.`)
}