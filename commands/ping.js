const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
message.reply(new Date().getTime() - message.createdTimestamp + " ms.")
}
