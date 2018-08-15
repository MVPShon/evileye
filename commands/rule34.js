const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    if (!message.channel.nsfw) return message.reply("🔞 This command can only be used on an NSFW Channel! 🔞")
    var Kaori = require('kaori');
    var kaori = new Kaori();
    kaori.search('rule34', {
            tags: [`${args[0]}`],
            limit: 1,
            random: true
        })
        .then(images => {
            let Embed = new Discord.RichEmbed()
                .setAuthor(`Result for: ${args[0]}`)
                .setColor(0xff6464)
                .setImage(images[0].common.fileURL)
            message.channel.send(Embed)
        }).catch(err => message.channel.send("No image found for your search!"));
}
