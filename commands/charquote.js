const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    let quotes = require("./quotes.json");
    let result = quotes[Math.floor((Math.random() * quotes.length))];
    let Embed = new Discord.RichEmbed()
        .setTitle(`Random ${args.join("")} Quote`)
        .setColor(0xff6464)
        .setDescription(`${result.quote}`)
        .setFooter(`${result.name} from ${result.anime}`);
    message.channel.send(Embed)
}