const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
let facts = require("./facts.json");
let result = facts[Math.floor((Math.random() * facts.length))];
let Embed = new Discord.RichEmbed()
    .setColor(0xff6464)
    .setDescription(`${result}`)
message.channel.send(Embed)
}
