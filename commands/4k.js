const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    if (!message.channel.nsfw) return message.reply("🔞 This command can only be used on an NSFW Channel! 🔞")
    var randomPuppy = require('random-puppy');
    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    randomPuppy(sub)
        .then(url => {
            let embed = new Discord.RichEmbed()
                .setColor(0xff6464)
                .setFooter("Image doesn't load? Probably a video or a deleted image.")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}