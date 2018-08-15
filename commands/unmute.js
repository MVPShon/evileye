const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    if (message.author.bot) return;
if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not have the right permissions for this.");
let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if (!toMute) return message.channel.send("Please specify someone.")
let role = message.guild.roles.find(r => r.name == "Muted");
if (!role || !toMute.roles.has(role.id)) return message.channel.send("This user is not muted!");
await toMute.removeRole(role);
message.channel.send("I have unmuted this user.");
return;
}