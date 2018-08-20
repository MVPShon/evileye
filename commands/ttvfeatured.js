const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    const Twitch = require("twitch.tv-api");
const twitch = new Twitch({
    id: "zepa42nmpvkny7kzh6fe2b3oht17no",
    secret: process.env.TWITCH_SECRET
});
twitch.getFeaturedStreams({limit: 3})
    .then(data => {
        message.channel.send("Top 3 Featured Twitch Channels:")
        let embed1 = new Discord.RichEmbed()
        .setColor(0x6441a5)
        .setTitle(data.featured[0].title)
        .setImage(data.featured[0].stream.preview.large)
        .setDescription(data.featured[0].text.replace(/<p>/g, "").replace(/<\/p>/g, ""))
        .setURL(data.featured[0].stream.channel.url)
        message.channel.send(embed1)
        let embed2 = new Discord.RichEmbed()
        .setColor(0x6441a5)
        .setTitle(data.featured[1].title)
        .setImage(data.featured[1].stream.preview.large)
        .setDescription(data.featured[1].text.replace(/<p>/g, "").replace(/<\/p>/g, ""))
        .setURL(data.featured[1].stream.channel.url)
        message.channel.send(embed2)
        let embed3 = new Discord.RichEmbed()
        .setColor(0x6441a5)
        .setTitle(data.featured[2].title)
        .setImage(data.featured[2].stream.preview.large)
        .setDescription(data.featured[2].text.replace(/<p>/g, "").replace(/<\/p>/g, ""))
        .setURL(data.featured[2].stream.channel.url)
        message.channel.send(embed3)
    })
    .catch(error => {
        console.error(error);
    });
}
