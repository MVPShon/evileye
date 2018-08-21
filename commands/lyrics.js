const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {

    const lyrics = require('get-azlyrics');
    var str = args.join(" ");
    function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
 
    lyrics.getLyrics(str)
      .then(x => {
          if (x.length > 2048) {
            let embed = new Discord.RichEmbed()
            .setAuthor(`Lyrics for \"${capitalize_Words(str)}\"`)
            .setColor(0xff6464)
            .setDescription(x.slice(0,1020)+ "...")
            .setThumbnail("https://www.azlyrics.com/az_logo_tr.png")
            message.channel.send(embed)
            let embed2 = new Discord.RichEmbed()
            .setColor(0xff6464)
            .setDescription("..." + x.slice(1020,2044) + "...")
            .setThumbnail("https://www.azlyrics.com/az_logo_tr.png")
            message.channel.send(embed2)
            let embed3 = new Discord.RichEmbed()
            .setColor(0xff6464)
            .setDescription("..." + x.slice(2044))
            .setThumbnail("https://www.azlyrics.com/az_logo_tr.png")
            return message.channel.send(embed3)
          }
          if (x.length > 1020 && x.length < 2048) {
        let embed = new Discord.RichEmbed()
        .setAuthor(`Lyrics for \"${capitalize_Words(str)}\"`)
        .setColor(0xff6464)
        .setDescription(x.slice(0,1020)+ "...")
        .setThumbnail("https://www.azlyrics.com/az_logo_tr.png")
        message.channel.send(embed)
        let embed2 = new Discord.RichEmbed()
        .setColor(0xff6464)
        .setDescription("..." + x.slice(1020,2044))
        .setThumbnail("https://www.azlyrics.com/az_logo_tr.png")
        return message.channel.send(embed2)
        } else {
            let embed = new Discord.RichEmbed()
            .setAuthor(`Lyrics for \"${capitalize_Words(str)}\"`)
            .setColor(0xff6464)
            .setDescription(x)
            .setThumbnail("https://www.azlyrics.com/az_logo_tr.png")
            return message.channel.send(embed)
    }
        }).catch(err => {
            let embed = new Discord.RichEmbed()
            .setTitle(message.author.username + ` - Error when searching for \"${capitalize_Words(str)}\"`)
            .setColor(0xff6464)
            .setDescription(err)
            .setThumbnail("https://www.freeiconspng.com/uploads/sign-red-error-icon-1.png")
            return message.channel.send(embed)
        })}
