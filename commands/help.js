const Discord = require("discord.js");
let prefix = ".";
exports.run = async (evileye, message, args) => {
let embed = new Discord.RichEmbed()
.setAuthor(`Help`)
.setColor(0xff6464)
.addField("Info", "To find basic info on the bot, just type `" + prefix + "info`")
.addField("Commands", "Type `" + prefix + "commands` for a list of all commands.")
.addField("MusicHelp", "List of all available music commands.")
message.channel.send(embed)
}
