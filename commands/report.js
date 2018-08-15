const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    if (!args[0]) {
    message.reply("Please specify something to report.")
}
let embed = new Discord.RichEmbed()
    .setColor(0xff6464)
    .setAuthor(`${message.author.tag}` + " in " + `${message.guild.name}`)
    .addField("Report", `${args.join(" ")}`)
evileye.channels.get("474492342552887302").send(embed)
let embed2 = new Discord.RichEmbed()
    .setTitle("Thanks for your Report!")
    .setColor(0xff6464)
    .setThumbnail(evileye.user.displayAvatarURL)
    .addField("Your Report", args.join(" "))
    .setDescription("Your report has been sent to the bot's main server. To follow through on your report, please join the bot's main server.")
    .addField('Discord Invite', 'https://discord.gg/tT8aZjJ2')
message.channel.send(embed2)
}
