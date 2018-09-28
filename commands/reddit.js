const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
        if (!message.channel.nsfw) return message.reply("🔞 This command can only be used on an NSFW Channel! 🔞")
        var randomPuppy = require('random-puppy');
    var subreddits = [
        args.join()
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    randomPuppy(sub)
        .then(url => {
            message.channel.send(url);
        })
}
