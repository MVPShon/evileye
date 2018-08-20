const Discord = require("discord.js");
let prefix = ".";
exports.run = async (evileye, message, args) => {
let embed = new Discord.RichEmbed()
.setAuthor(`ADMIN Commands for Evileye`)
.setColor(0xff6464)
.setThumbnail(evileye.user.displayAvatarURL)
.addField("AddRole","Adds an existing role to a user. `Usage: " + prefix + "addrole Evileye Bots`")
.addField("Ban", "Bans someone from your server. `Usage: " + prefix + "ban Evileye`")
.addField("CreateRole", "Makes a role. `Usage: " + prefix + "createrole Red Evileye` *Note - The only colors that work with this are: `'default', 'aqua', 'green', 'blue', 'purple', 'gold', 'orange', 'red', 'grey', 'darker_grey', 'navy', 'dark_aqua', 'dark_green', 'dark_blue', 'dark_purple', 'dark_gold', 'dark_orange', 'dark_red', 'dark_navy', 'random'*`")
.addField("Kick", "Kicks someone from your server. `Usage: " + prefix + "kick Evileye`")
.addField("Mute", "Creates a muted role and mutes the target. `Usage: " + prefix + "mute Evileye`")
.addField("Purge/Delete", "Purges/deletes up to 100 messages from chat. `Usage: " + prefix + "purge 50`")
.addField("RemoveRole","Removes an existing role from a user. `Usage: " + prefix + "removerole Evileye Bots`")
.addField("Settings", "Check all the current server management commands.`Usage: " + prefix + "settings")
.addField("Unmute", "Umutes the target. `Usage: " + prefix + "unmute Evileye`")
message.channel.send(embed)
}
