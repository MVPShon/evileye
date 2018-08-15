const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
    const WikiaAPI = require('nodewikiaapi')
const mywiki = new WikiaAPI('overlordmaruyama')
const wikilink = 'https://overlordmaruyama.wikia.com'
mywiki.getArticlesListExpanded().then(data => {
    var datas = data.items[Math.floor(Math.random() * data.items.length)];
    let embed = new Discord.RichEmbed()
        .setTitle(datas.title)
        .setURL(wikilink + datas.url)
        .setDescription(datas.abstract + "\n\nRead more by clicking the link above.")
        .setThumbnail(datas.thumbnail)
        .setColor(0xff6464)
        .setFooter("SPOILER ALERT")
        .setTimestamp()
    message.channel.send(embed)
}).catch(error => {
    console.log(error)
})
}