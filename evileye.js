const Discord = require("discord.js");
let evileye = new Discord.Client();
let prefix = ".";
const Music = require('discord.js-musicbot-addon');

Music.start(evileye, {
    youtubeKey: "AIzaSyA9BBe0ud_2h_5q9SVBvrXfRGtxwIX5WaM",
    prefix: ".",
    helpCmd: "musichelp",
    global: false,
    disableLeave: "true",
    ownerOverMember: true,
    embedColor: 'DARK_RED',
    maxQueueSize: '50',
    botOwner: '168865955940794368',
    messageHelp: "true",
    defVolume: '75'
});

evileye.on("ready", async () => {
    console.log("Evileye is ready to go!")
    evileye.user.setActivity('Overlord III', {
        type: 'WATCHING'
    })
});
evileye.on("guildCreate", guild => {
    evileye.users.get("168865955940794368").send("`" + guild.owner.user.username + "` has just added me to their server: `" + guild.name + "`");
});
evileye.on("guildDelete", guild => {
    evileye.users.get("168865955940794368").send("`" + guild.owner.user.username + "` has just removed me from their server: `" + guild.name + "`");
});
evileye.on("message", async message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    ///Commands
    if (message.content.startsWith(prefix + "commands")) {
        let embed = new Discord.RichEmbed()
            .setAuthor(`ALL Commands for Evileye`)
            .setColor(0xFE2E2E)
            .setThumbnail(evileye.user.displayAvatarURL)
            .addField("Info", "Sends statistics and a brief detail about the bot.")
            .addField("MAL", "Looks up an anime off of MyAnimeList. `Usage: .mal Overlord`")
            .addField("Meme", "Pastes random Reddit memes.")
            .addField("Weather", "Looks up weather for a specific place. `Usage: .weather Hell`")
            .setFooter("If you're looking for admin commands then please type: .admin | If you're looking for NSFW commands then please type .nsfw")
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "admin")) {
        let embed = new Discord.RichEmbed()
            .setAuthor(`ADMIN Commands for Evileye`)
            .setColor(0xFE2E2E)
            .setThumbnail(evileye.user.displayAvatarURL)
            .addField("Ban", "Bans someone from your server. `Usage: .ban Evileye`")
            .addField("Kick", "Kicks someone from your server. `Usage: .kick Evileye`")
            .addField("Mute", "Creates a muted role and mutes the target. `Usage: .mute Evileye`")
            .addField("Purge/Delete", "Purges/deletes up to 100 messages from chat. `Usage: .purge 50`")
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "nsfw")) {
        let embed = new Discord.RichEmbed()
            .setAuthor(`NSFW Commands for Evileye`)
            .setColor(0xFE2E2E)
            .setThumbnail(evileye.user.displayAvatarURL)
            .addField("Hentai", "Pulls a random hentai picture off of Reddit.")
            .addField("Rule34/R34", "Searches https://rule34.xxx for hentai tags. `Usage: .rule34 Evileye` *Note - Spaces are represented as UNDERSCORES on the R34 website*")
        message.author.send(embed)
    }
    if (message.content.startsWith(prefix + "info")) {
        let totalSeconds = (evileye.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.round(totalSeconds % 60);
        let uptime = `${hours} hours, ${minutes} minutes and ${seconds} second(s).`;
        let embed = new Discord.RichEmbed()
            .setAuthor(`Generated Stats`)
            .setColor(0xFE2E2E)
            .addField(`Servers `, evileye.guilds.size)
            .addField(`Users `, evileye.users.size)
            .addField("Uptime", uptime)
            .addField("Ping", new Date().getTime() - message.createdTimestamp + " ms.", true)
            .addField("Description", "Multi-functional, ever growing bot based off of the character `Evileye` from the Overlord anime series. Constantly being updated daily with more cool, exciting stuff for you to enjoy! This bot was made by `MVPShon#1664`. If you would like to get in contact with him, please join the following discord server: https://discord.gg/WqVBymT")
            .setThumbnail(evileye.user.displayAvatarURL)
        message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "weather")) {
        var weather = require('weather-js');
        weather.find({
            search: `${args.join(" ")}`,
            degreeType: 'F'
        }, function(err, result) {
            if (err) return message.reply('Please enter a valid location!');
            if (result === undefined || result.length === 0) {
                message.reply('Please enter a valid location!')
                return;
            }
            var current = result[0].current;
            var location = result[0].location;
            let Embed = new Discord.RichEmbed()
                .setTitle("Weather results for `" + location.name + "`.")
                .setColor(0xFE2E2E)
                .addField("Skies Are", current.skytext, true)
                .addField("Humidity", current.humidity, true)
                .addField("Currently", current.temperature + "°F", true)
                .addField("Feels Like", current.feelslike + "°F", true)
                .setThumbnail(current.imageUrl)
            message.channel.send(Embed)
        });
    }
    if (message.content.startsWith(prefix + "kick")) {
        if (!message.member.hasPermission("KICK_MEMBERS"))
            return message.reply("Sorry, you don't have permissions to use this!");
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!member)
            return message.reply("Please mention a valid member of this server!");
        if (!member.kickable)
            return message.reply("I cannot kick this user! I may not have the sufficient permissions to kick this user or they may have a higher role than me!");
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";
        await member.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        let embed = new Discord.RichEmbed()
            .setAuthor("Kick", evileye.user.displayAvatarURL)
            .setColor(0xFE2E2E)
            .setTitle(`${member.user.tag} has been kicked by ${message.author.tag}.`)
            .setFooter(`${member.user.tag} has been cucked! I mean kicked.`)
            .addField(`Reason:`, `${reason}`)
        message.channel.send(embed);
    }

    if (message.content.startsWith(prefix + "purge") || (message.content.startsWith(prefix + "delete"))) {
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("Sorry, you don't have permissions to use this!");
        var splitMessage = message.content.split(" ");
        var deleteCount = parseInt(splitMessage[1], 10)
        if (!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.reply("Please provide a number between 2 and 100 for the number of messages to delete. ");
        var fetched = await message.channel.fetchMessages({
            limit: deleteCount
        });
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));

    }

    if (message.content.startsWith(prefix + "mal ")) {
        var malScraper = require('mal-scraper')

        var name = `${args.join(" ")}`

        malScraper.getInfoFromName(name)
            .then((data) => {
                let Embed = new Discord.RichEmbed()
                    .setColor(0xFE2E2E)
                    .setTitle(data.title)
                    .addField("Genres", data.genres)
                    .addField("Status", data.status + " with " + data.episodes + " episodes.", true)
                    .addField("Rated", data.rating, true)
                    .addField("Summary", data.synopsis)
                    .setThumbnail(data.picture)
                    .setFooter("Ranked " + data.ranked + " on MAL.")
                    .setURL(data.url)
                message.channel.send(Embed)
            }).catch((err) => console.log(err))
    }


    if (message.content.startsWith(prefix + "ban")) {
        if (!message.member.hasPermission("BAN_MEMBERS"))
            return message.reply("Sorry, you don't have permissions to use this!");
        let member = message.mentions.members.first();
        if (!member)
            return message.reply("Please mention a valid member of this server");
        if (!member.bannable)
            return message.reply("I cannot ban this user! I may not have the sufficient permissions to ban this user or they may have a higher role than me!");
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";
        await member.ban(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        let embed = new Discord.RichEmbed()
            .setAuthor("Ban")
            .setColor(0xFE2E2E)
            .setTitle(`${member.user.tag} has been banned by ${message.author.tag}.`)
            .setFooter(`${member.user.tag} has been banned.`)
            .addField(`Reason:`, `${reason}`)
        message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "meme")) {
        var randomPuppy = require('random-puppy');
        var subreddits = [
            'MemeEconomy',
            'Memes',
            'Dankmemes',
            'Animemes'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        randomPuppy(sub)
            .then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Memes make the world go 'round")
                    .setColor(0xFE2E2E)
                    .setFooter("Image doesn't load? Probably a video or a deleted image.")
                    .setImage(url);
                message.channel.send({
                    embed
                });
            })
    }
    if (message.content.startsWith(prefix + "hentai")) {
        if (!message.channel.nsfw) return message.reply("🔞 This command can only be used on an NSFW Channel! 🔞")
        var randomPuppy = require('random-puppy');
        var subreddits = [
            'Hentai',
            'HQHentai',
            'Rule34'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        randomPuppy(sub)
            .then(url => {
                let embed = new Discord.RichEmbed()
                    .setTitle("Some hentai for you <3")
                    .setColor(0xFE2E2E)
                    .setFooter("Image doesn't load? Probably a video or a deleted image.")
                    .setImage(url);
                message.channel.send({
                    embed
                });
            })
    }
    if (message.content.startsWith(prefix + "rule34") || (message.content.startsWith(prefix + "r34"))) {
        if (!message.channel.nsfw) return message.reply("🔞 This command can only be used on an NSFW Channel! 🔞")
        var Kaori = require('kaori');
        var kaori = new Kaori();
        kaori.search('rule34', {
                tags: [`${args[0]}`],
                limit: 1,
                random: true
            })
            .then(images => {
                let Embed = new Discord.RichEmbed()
                    .setAuthor(`Result for: ${args[0]}`)
                    .setColor(0xFE2E2E)
                    .setImage(images[0].common.fileURL)
                message.channel.send(Embed)
            }).catch(err => message.channel.send("No image found for your search!"));
    }
            if (message.content.startsWith(prefix + "mute")) {
            if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not have the right permissions for this.");
            let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
            if(!toMute) return message.channel.send("Please specify someone.")
            if(toMute.id === evileye.author.id) return message.channel.send("Like I'd let myself be muted... Fool.");
            if(toMute.id === message.author.id) return message.channel.send("You're not allowed to mute yourself.");
            if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("Unable to mute a member that has the same or higher role than you!");
            
            let role = message.guild.roles.find(r => r.name == "Muted");
            if(!role) {
              try{
                role = await message.guild.createRole({
                  name: "Muted",
                  color: "#000000",
                  permissions: []
                });
                message.guild.channels.forEach(async (channel, id) => {
                  await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                  });
                });
              } catch(e) {
              console.log(e.stack)
              }
            }
              if(toMute.roles.has(role.id)) return message.channel.send("This user is already muted!");
              await toMute.addRole(role);
              message.channel.send("I have muted this user!");
            
              }
    if (message.content.startsWith(prefix + "umute")) {
        if(message.author.bot) return;
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not have the right permissions for this.");
    
              let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
              if(!toMute) return message.channel.send("Please specify someone.")
    
              let role = message.guild.roles.find(r => r.name == "Muted");
    
                if(!role || !toMute.roles.has(role.id)) return message.channel.send("This user is not muted.");
                
                await toMute.removeRole(role);
                message.channel.send("This user is now unmuted");
    
                return;
          }
})
evileye.login(process.env.BOT_TOKEN);
