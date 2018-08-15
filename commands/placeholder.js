const Discord = require("discord.js");
let evileye = new Discord.Client();
let prefix = "-";
var fs = require("fs");
let auditlogs = require("./auditlogs.json");
let settings = "./settings.json";
const countItDown = require('count-it-down');

evileye.on("guildCreate", guild => {
    evileye.users.get("168865955940794368").send("`" + guild.owner.user.username + "` has just added me to their server: `" + guild.name + "`");
});
evileye.on("guildDelete", guild => {
    evileye.users.get("168865955940794368").send("`" + guild.owner.user.username + "` has just removed me from their server: `" + guild.name + "`");
});
evileye.on("guildMemberRemove", member => {
    let kickgifs = [
        "http://1.bp.blogspot.com/-_iwR-5ML5HM/UTds3RJk3hI/AAAAAAAAFQQ/0ihxGgwCazw/s1600/KO.gif",
        "https://media1.giphy.com/media/l3V0j3ytFyGHqiV7W/giphy.gif",
        "https://media.giphy.com/media/wOly8pa4s4W88/giphy.gif",
        "https://i.kym-cdn.com/photos/images/newsfeed/001/054/543/c22.gif"
    ]

    let serverid = auditlogs[member.guild.id];
    let alogchan = auditlogs[member.guild.id].auditchannelid;
    if (!serverid) return message.reply(`Please set a channel using ${prefix}settings auditlogchannel <Channel ID>`);
    var kickmessage = `${member.user.username} has been kicked from ${member.guild.name}.\nReason: ${reason}`
    let randkick = Math.floor((Math.random() * kickgifs.length));
    let embed = new Discord.RichEmbed()
        .setColor(0xff6464)
        .addField("KICKED", kickmessage)
        .setFooter("Time of Kick: ")
        .setTimestamp()
        .setImage(`${kickgifs[randkick]}`)
    return evileye.channels.get(alogchan).send(embed)
})
       evileye.on("guildBanAdd", message => {
           let bangifs = [
                   "https://media1.tenor.com/images/66b9e27c779a1a314f0a8b31bb5609f7/tenor.gif?itemid=6072837",
                   "http://gifimage.net/wp-content/uploads/2017/07/banned-gif.gif",
                   "https://media1.tenor.com/images/d588d295136d07891a79ecc4d38e1a22/tenor.gif?itemid=10026092",
                  "https://media1.tenor.com/images/88bf753468fad45c30be74c6f4747453/tenor.gif?itemid=8540518",
                  "http://gifimage.net/wp-content/uploads/2017/07/ban-hammer-gif-5.gif",
              ]
              let randban = Math.floor((Math.random() * bangifs.length));

          let serverid = auditlogs[message.guild.id];
          let alogchan = auditlogs[message.guild.id].auditchannelid;
         if (!serverid) message.reply(`Please set a channel using ${prefix}settings auditlogchannel <Channel ID>`);
         var banmessage = `${member.user.username} has been banned from ${member.guild.name}.`
         let embed = new Discord.RichEmbed()
         .setColor(0xff6464)
        .addField("BANNED", banmessage)
         .setFooter("Time of Ban: ")
         .setTimestamp()
          .setImage(`${bangifs[randban]}`)
         evileye.channels.get(alogchan).send(embed)
          })

          evileye.on("guildBanRemove", member => {
            let unbangifs = [
                "https://media1.tenor.com/images/bace5a9d468cafc03881c83b26e74ff3/tenor.gif?itemid=8016390",
                "https://media.giphy.com/media/i3lukcl2dgaas/source.gif",
                "https://i.imgur.com/cSeUq3W.gif",
                "https://thumbs.gfycat.com/ObedientAdmirableKingbird-size_restricted.gif",
                "http://gifimage.net/wp-content/uploads/2017/11/im-back-gif-2.gif"
               ]
               let randunban = Math.floor((Math.random() * bangifs.length));
 
           let serverid = auditlogs[member.guild.id];
           let alogchan = auditlogs[member.guild.id].auditchannelid;
          if (!serverid) message.reply(`Please set a channel using ${prefix}settings auditlogchannel <Channel ID>`);
          var unbanmessage = `${member.user.username} has been unbanned from ${member.guild.name}.`
          let embed = new Discord.RichEmbed()
          .setColor(0xff6464)
         .addField("UNBANNED", unbanmessage)
          .setFooter("Time of Unban: ")
          .setTimestamp()
           .setImage(`${unbangifs[randunban]}`)
          evileye.channels.get(alogchan).send(embed)
           })
 //
 //          evileye.on("messageUpdate", (oldMessage, newMessage) => {
 //           let serverid = auditlogs[newMessage.guild.id];
 //           let alogchan = auditlogs[newMessage.guild.id].auditchannelid;  
 //           let embed = new Discord.RichEmbed()
 //           .setColor(0xff6464)
 //           .setAuthor("EDITED MESSAGE", newMessage.author.displayAvatarURL)
 //           .addField("Original Message","\"" + oldMessage + "\"")
 //           .addField("New Message","\"" + newMessage + "\"")
  //          .setFooter(newMessage.author.username + " edited at ")
  //          .setTimestamp()
  //          evileye.channels.get(alogchan).send(embed)
//})
evileye.on("messageDelete", message => {
    let serverid = auditlogs[message.guild.id];
    let alogchan = auditlogs[message.guild.id].auditchannelid;
    let embed = new Discord.RichEmbed()
    .setColor(0xff6464)
    .setAuthor("DELETED MESSAGE", message.author.displayAvatarURL)
    .setDescription("\""+message+ "\" deleted in: "+ message.channel)
    .setFooter(message.author.username + " deleted at ")
    .setTimestamp()
    evileye.channels.get(alogchan).send(embed)
})
evileye.on("message", async message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    evileye.setMaxListeners(100);


    ///Commands

    if (message.content.startsWith(prefix + "settings")) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You do not have the right permissions for this.");
        if (!args[0]) {
            let embed = new Discord.RichEmbed()
                .setTitle("Server Settings")
                .setColor(0xff6464)
                .addField("Audit Log", "Set your channel's audit log with this command. `Usage: " + prefix + "settings auditlogchannel (Channel ID Here)`")
                .addField("Prefix", "Set your channel's custom prefix with this command. `Usage: " + prefix + "settings prefix (prefix)`")
                .setThumbnail(evileye.user.displayAvatarURL)
            message.channel.send(embed)
        }
        if (args[0] === "auditlogchannel" || args[0] === "auditlog") {
            if (!args[1]) return message.reply("Please specify a channel ID! To find your channel ID type `\\#channelname`. Then type `" + prefix + "settings auditlogchannel (ID NUMBER)`. Note - You do not need the <, # or the > from the ID. Just the numbers.");

            auditlogs[message.guild.id] = {
                auditchannelid: args[1]
            }

            fs.writeFile("./auditlogs.json", JSON.stringify(auditlogs, null, 4), err => {
                if (err) throw err;
                message.reply(`Set auditlog channel to #${args[1]}`);
            });
        }
    }
 

    if (message.content.startsWith(prefix + "google") || (message.content.startsWith(prefix + "g") || (message.content.startsWith(prefix + "goog")))) {
        var google = require("google");
        google.resultsPerPage = 1
        var nextCounter = 0
        google(`${args.join(" ")}`, function(err, res) {
            var link = res.links[0];
            if (!link) return message.reply("No results found for your search!");
            if (!link.title && !link.description || !link.link && !link.description || (!link.link && !link.title)) {
                message.reply("Nothing seems to be found.")
            }
            if (!link.link === '') {
                let Embed = new Discord.RichEmbed()
                    .setAuthor("Google Search", evileye.user.displayAvatarURL)
                    .setColor(0xff6464)
                    .setTitle(link.title)
                    .addField("Description:", link.description)
                message.channel.send(Embed)
            }
            if (link.title == '') {
                console.log(link);
                let Embed = new Discord.RichEmbed()
                    .setAuthor("Google Search", evileye.user.displayAvatarURL)
                    .setColor(0xff6464)
                    .setTitle("Title", "There is no title for this site.")
                    .addField("Description:", link.description)
                    .setURL(link.link)
                    .setThumbnail("http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png")
                message.channel.send(Embed)
            }
            if (link.description == '') {
                console.log(link);
                let Embed = new Discord.RichEmbed()
                    .setAuthor("Google Search", evileye.user.displayAvatarURL)
                    .setColor(0xff6464)
                    .setTitle(link.title)
                    .addField("Description:", "There is no description for this site.")
                    .setURL(link.link)
                    .setThumbnail("http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png")
                message.channel.send(Embed)
            } else {
                console.log(link);
                let Embed = new Discord.RichEmbed()
                    .setAuthor("Google Search", evileye.user.displayAvatarURL)
                    .setColor(0xff6464)
                    .setTitle(link.title)
                    .addField("Description:", link.description)
                    .setURL(link.link)
                    .setThumbnail("http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png")
                message.channel.send(Embed)
            }
        }).catch(err => message.reply("Nothing seems to be found."));
    }
})
//evileye.login(process.env.BOT_TOKEN);

evileye.login("NDYzMzY1NjA4ODY4ODA2NjY2.Dko56Q.AbSGHFMDdOBgdIippjolhsWCD6w");