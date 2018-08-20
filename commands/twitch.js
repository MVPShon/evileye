const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    const Twitch = require("twitch.tv-api");
const twitch = new Twitch({
    id: "zepa42nmpvkny7kzh6fe2b3oht17no",
    secret: "6ho25l3q98a5nnqqsd1tcy7q8upt7v"
});
    twitch.getUser(args.join(" "))
    .then(data => {
        if(!data.stream) return message.reply(`\"${args.join(" ").charAt(0).toUpperCase()}${args.join(" ").slice(1)}\" is currently not streaming or \"${args.join(" ").charAt(0).toUpperCase()}${args.join(" ").slice(1)}\" does not exist on Twitch!`)
              //  console.log(data)
        let embed = new Discord.RichEmbed()
        .setTitle(data.stream.channel.status)
        .setAuthor(data.stream.channel.display_name + " is live!")
        .addField("Game", data.stream.game, true)
        .addField("Followers", data.stream.channel.followers, true)
        .setImage(data.stream.preview.large)
        .setURL(data.stream.channel.url)
        .setThumbnail(data.stream.channel.logo)
        .setTimestamp()
        .setColor(0x6441a5)
        .setFooter(data.stream.channel.description)
        message.channel.send(embed)
    })
    .catch(error => {
        console.error(error);
    });

}
