const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    let text = `${args.join(" ")}`.replace(/c|k/g, "b").replace(/C|K/g, "B");
let embed = new Discord.RichEmbed()
    .setColor(0xff6464)
    .setDescription(text, true)
message.channel.send(embed)
}