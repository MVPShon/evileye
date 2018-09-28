const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
        var randomPuppy = require('random-puppy');
    var subreddits = [
        args.join()
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    randomPuppy(sub)
        .then(url => {
            let embed = new Discord.RichEmbed()
                .setImage(url);
            message.channel.send({
                embed
            });
        })
    message.channel.send(embed)
}
