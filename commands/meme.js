const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    var redditmeme = require('reddit-memes');
redditmeme(function(data, err) {
    message.channel.send(`**${data.title[0]}** -- r/${data.subreddit[0]}\n${data.url[0]}`);
});
}
