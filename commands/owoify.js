const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    let text = `${args.join(" ")}`.replace(/r|l/g, "w").replace(/R|L/g, "W");
let embed = new Discord.RichEmbed()
    .setColor(0xff6464)
    .setDescription(text.slice(0, 1024), true)
message.channel.send(embed)
}