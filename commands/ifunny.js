const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
let ifunny = require("ifunny")
ifunny({shuffle: true}, function (err, res) {
  message.channel.send(res[1].src)
})}
