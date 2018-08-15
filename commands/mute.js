const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not have the right permissions for this.");
let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if (!toMute) return message.channel.send("Please specify someone.");
if (toMute.id === message.author.id) return message.channel.send("You're not allowed to mute yourself.");
if (toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("Unable to mute a member that has the same or higher role than you!");
let role = message.guild.roles.find(r => r.name == "Muted");
if (!role) {
    try {
        role = await message.guild.createRole({
            name: "Muted",
            color: "#000000",
            permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(role, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
    } catch (e) {
        console.log(e.stack)
    }
}
if (toMute.roles.has(role.id)) return message.channel.send("This user is already muted!");
await toMute.addRole(role);
message.channel.send("I have muted this user!");
}
