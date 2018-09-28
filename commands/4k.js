const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
if (!message.channel.nsfw) return message.reply("🔞 This command can only be used on an NSFW Channel! 🔞")
var fourk = require('reddit4k');
fourk(function(data, err) {
    var embed = new Discord.RichEmbed()
message.channel.send(`**${data.title[0]}** -- r/${data.subreddit[0]}\n${data.url[0]}`);
});
}
