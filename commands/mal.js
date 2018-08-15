const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    var malScraper = require('mal-scraper')

var name = `${args.join(" ")}`

malScraper.getInfoFromName(name)
    .then((data) => {
        console.log(data)
        let Embed = new Discord.RichEmbed()
            .setColor(0xff6464)
            .setTitle(data.title)
            .addField("Genres", data.genres)
            .addField("Aired/Airing", data.aired, true)
            .addField("Status", data.status + " with " + data.episodes + " episodes", true)
            .addField("Rated", data.rating, true)
            .addField("MAL Score", "`" + data.score + "8`/10 " + data.scoreStats, true)
            .addField("Summary", data.synopsis.slice(0, 1021) + "...")
            .setThumbnail(data.picture)
            .setFooter("Ranked " + data.ranked + " on MAL.")
            .setURL(data.url)
        message.channel.send(Embed)
    }).catch((err) => console.log(err))
}