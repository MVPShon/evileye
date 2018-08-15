const Discord = require("discord.js");
let prefix = "--";
exports.run = async (evileye, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(`NSFW Commands for Evileye`)
    .setColor(0xff6464)
    .setThumbnail(evileye.user.displayAvatarURL)
    .addField("4k", "Searches for some 4k wallpapers.")
    .addField("Ass", "Searches for booty pics. *Also works with `.booty` and `.butt`*")
    .addField("Hentai", "Pulls a random hentai picture off of Reddit.")
    .addField("Tits", "Searches for some nice tits. *Also works with `.boobs`*")
    .addField("Rule34/R34", "Searches https://rule34.xxx for hentai tags. `Usage: " + prefix + "rule34 Evileye` *Note - Spaces are represented as UNDERSCORES on the R34 website*")
message.author.send(embed)
}
