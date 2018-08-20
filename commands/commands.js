const Discord = require("discord.js");
let prefix = ".";
exports.run = async (evileye, message, args) => {
        let embed = new Discord.RichEmbed()
            .setAuthor(`ALL Commands for Evileye`)
            .setColor(0xff6464)
            .setThumbnail(evileye.user.displayAvatarURL)
            .addField("ASCII", "Turns your text into ascii.")
            .addField("Info", "Sends statistics and a brief detail about the bot.")
            .addField("MAL", "Looks up an anime off of MyAnimeList. `Usage: " + prefix + "mal Overlord`")
            .addField("Help", "Shows the bot's help command.")
            .addField("Kill", "Kill your friends in creative ways!")
            .addField("Meme", "Pastes random Reddit memes.")
            .addField("OwO", "OwOifies your text.")
            .addField("Ping", "Shows the bot's current ping.")
            .addField("Weather", "Looks up weather for a specific place. `Usage: " + prefix + "weather Hell`")
            .setFooter("If you're looking for admin commands then please type: " + prefix + "admin | If you're looking for NSFW commands then please type " + prefix + "nsfw")
        message.channel.send(embed)
    }
