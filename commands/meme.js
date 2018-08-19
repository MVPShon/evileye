const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    var redditmeme = require('reddit-memes');
redditmeme(function(data, err) {
    var embed = new Discord.RichEmbed()
        .setTitle(data.title[0])
        .setColor(0xff6464)
        .setImage(data.url[0])
    message.channel.send({
        embed
    });
});
}
