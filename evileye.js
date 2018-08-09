const Discord = require("discord.js");
let evileye = new Discord.Client();
let prefix = ".";

evileye.on("ready", async () => {
    let statuses = [
        `${evileye.guilds.size} servers!`,
        `\"${prefix}` + `help\" for help with ${evileye.user.username}`,
        `newest episode of Overlord III`
    ]

    let status = Math.floor((Math.random() * statuses.length));
    console.log("Evileye is ready to go!")
    evileye.users.get("168865955940794368").send(`${evileye.user.username} has just restarted!`)
    setInterval(function() {
    evileye.user.setActivity(statuses[status], {
        type: 'WATCHING'
    })
    }, 30000)
});
evileye.on("guildCreate", guild => {
    evileye.users.get("168865955940794368").send("`" + guild.owner.user.username + "` has just added me to their server: `" + guild.name + "`");
});
evileye.on("guildDelete", guild => {
    evileye.users.get("168865955940794368").send("`" + guild.owner.user.username + "` has just removed me from their server: `" + guild.name + "`");
});
evileye.on("guildMemberAdd", member => {
    let welcmsgs = [
        `${member}, be ready to praise Lord Ainz, foolish human.`,
        `We usually do not allow your kind into this domain, ${member}.`,
        `Consider yourself lucky, ${member}, that Lord Ainz has permitted you to be here.`,
        `${member} has been admitted into Nazarick!`,
        `${member}, mere mortals like you cannot fathom how lucky you are to be here.`,
        `Lord Ainz expects great things from you, ${member}.`,
        `Nazarick welcomes you to its inner halls, ${member}.`,
        `${member} if only a mortal like you could understand Lord Ainz.`,
        `${member} should make fine food for the demons.`
    ]
        let randwelc = Math.floor((Math.random() * welcmsgs.length));
    
    if(member.guild.id !== "466436909607157770") return;
    evileye.channels.get("474651288517345280").send(`${welcmsgs[randwelc]}`)
    let pleb = member.guild.roles.find(r => r.name == "Mortals");
    member.addRole(pleb);
    });

evileye.on("message", async message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    ///Commands
    if (message.content.startsWith(prefix + "commands")) {
        let embed = new Discord.RichEmbed()
            .setAuthor(`ALL Commands for Evileye`)
            .setColor(0xff6464)
            .setThumbnail(evileye.user.displayAvatarURL)
            .addField("ASCII", "Turns your text into ascii.")
            .addField("MAL", "Looks up an anime off of MyAnimeList. `Usage: " + prefix + "mal Overlord`")
            .addField("Help", "Shows the bot's help command.")
            .addField("Meme", "Pastes random memes.")
            .addField("Overlord", "Provides a brief description and a link to a random site on the Overlord Wikia.")
            .addField("Quote", "Shows a random quote from an anime.")
            .addField("RedditMeme", "Even more memes for you.")
            .addField("OwO", "OwOifies your text.")
            .setFooter("If you're looking for admin commands then please type: " + prefix + "admin | If you're looking for music commands then please type " + prefix + "musichelp | If you're looking for NSFW commands then please type " + prefix + "nsfw")
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "musichelp")) {
        let embed = new Discord.RichEmbed()
            .setAuthor(`Music Commands for Evileye`)
            .setColor(0xff6464)
            .setThumbnail(evileye.user.displayAvatarURL)
            .addField("Add", "Adds a song using a specific link to the queue. `Usage: " + prefix + "add https://www.youtube.com/watch?v=3WSgJCYIewM`")
            .addField("Join", "Joins the bot to your music channel. `Usage: " + prefix + "join #MusicChannel`")
            .addField("Pause", "Pauses the currently playing song.")
            .addField("Play", "Plays the songs you've added to the queue.")
            .addField("Queue", "Shows the currently queued songs")
            .addField("Resume", "Resumes a song if paused.")
            .addField("Search", "Searches for a song by name. You can type `" + prefix + "play` to immediately play/add the searched song. `Usage: " + prefix + "search In My Feelings Drake`")
            .addField("Skip", "Skips the currently playing song.")
        message.channel.send(embed)
    }

    if (message.content.startsWith(prefix + "admin")) {
        let embed = new Discord.RichEmbed()
            .setAuthor(`ADMIN Commands for Evileye`)
            .setColor(0xff6464)
            .setThumbnail(evileye.user.displayAvatarURL)
            .addField("Ban", "Bans someone from your server. `Usage: " + prefix + "ban Evileye`")
            .addField("CreateRole", "Makes a role. `Usage: " + prefix + "createrole Red Evileye` *Note - The only colors that work with this are: `'default', 'aqua', 'green', 'blue', 'purple', 'gold', 'orange', 'red', 'grey', 'darker_grey', 'navy', 'dark_aqua', 'dark_green', 'dark_blue', 'dark_purple', 'dark_gold', 'dark_orange', 'dark_red', 'dark_navy', 'random'*`")
            .addField("Kick", "Kicks someone from your server. `Usage: " + prefix + "kick Evileye`")
            .addField("Mute", "Creates a muted role and mutes the target. `Usage: " + prefix + "mute Evileye`")
            .addField("Purge/Delete", "Purges/deletes up to 100 messages from chat. `Usage: " + prefix + "purge 50`")
            .addField("Unmute", "Unmutes the target. `Usage: " + prefix + "unmute Evileye`")
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "nsfw")) {
        let embed = new Discord.RichEmbed()
            .setAuthor(`NSFW Commands for Evileye`)
            .setColor(0xff6464)
            .setThumbnail(evileye.user.displayAvatarURL)
            .addField("4k", "Searches for some 4k wallpapers.")
            .addField("Ass", "Searches for booty pics. *Also works with `.booty` and `.butt`*")
            .addField("Hentai", "Pulls a random hentai picture off of Reddit.")
            .addField("Tits", "Searches for some nice tits. *Also works with `.boobs`*")
            .addField("Rule34/R34", "Searches https://rule34.xxx for hentai tags. `Usage: " + prefix + "rule34 Evileye` *Note - Spaces are represented as UNDERSCORES on the R34 website*")
        message.author.send(embed)
    }
    if (message.content.startsWith(prefix + "ping")) {
        message.reply(new Date().getTime() - message.createdTimestamp + " ms.")
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
            .setColor(0xff6464)
            .addField("Name", evileye.user.tag, true)
            .addField("Bot Owner", evileye.users.get("168865955940794368").tag, true)
            .addField(`Servers `, evileye.guilds.size, true)
            .addField(`Users `, evileye.users.size, true)
            .addField("Uptime", uptime)
            .addField("Ping", new Date().getTime() - message.createdTimestamp + " ms.")
            .addField("Description", "Multi-functional, ever growing bot based off of the character `Evileye` from the Overlord anime series. Constantly being updated daily with more cool, exciting stuff for you to enjoy!")
            .addField("Important Links", "Discord Server: https://discord.gg/tT8aZjJ \nUpvote Evileye: https://bit.ly/2vwCOz8")
            .setThumbnail(evileye.user.displayAvatarURL)
        message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "help")) {
        let embed = new Discord.RichEmbed()
            .setAuthor(`Help`)
            .setColor(0xff6464)
            .addField("Info", "To find basic info on the bot, just type `" + prefix + "info`")
            .addField("Commands", "Type `" + prefix + "commands` for a list of all commands.")
            .addField("Utility", "Type `" + prefix + "utility` for a list of all utility commands.")
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "utility")) {
        let embed = new Discord.RichEmbed()
            .setAuthor(`Utility`)
            .setColor(0xff6464)
            .addField("Info", "Sends statistics and a brief detail about the bot.")
            .addField("Ping", "Shows the bot's current ping.")
            .addField("News", "Look up news on a specific topic.")
            .addField("Report", "If you happen to find something wrong with the bot and/or the bot commands you can use this command to let the bot owner know! Usage: `" + prefix + "report (report here)`")
            .addField("Serverinfo", "Shows info about the current server.")
            .addField("Translate", "Translate text from English to target language.")
            .addField("Weather", "Looks up weather for a specific place. `Usage: " + prefix + "weather Hell`")
            .addField("Whois", "Find out information about a specific user.")
        message.channel.send(embed)

    }
    if (message.content.startsWith(prefix + "report")) {
        if (!args[0]) {
            return message.reply("Please specify something to report.")
        }
        let embed = new Discord.RichEmbed()
            .setColor(0xff6464)
            .setAuthor(`${message.author.tag}` + " in " + `${message.guild.name}`)
            .addField("Report", `${args.join(" ")}`)
            .setThumbnail(evileye.user.displayAvatarURL)
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
    if (message.content.startsWith(prefix + "whois")) {
        if (args[0]) {
            if (message.mentions) {
                if (message.mentions.users) {
                    targetUser = message.guild.members.get(message.mentions.users.first().id);
                }
            }
        }
        if (args[0]) {
            let moment = require("moment");
            let day = targetUser.user.createdAt.getDate()
            let month = 1 + targetUser.user.createdAt.getMonth()
            let year = targetUser.user.createdAt.getFullYear()
            //let jday = targetUser.guild.joinedAt.getDate()
            //let jmonth = 1 + targetUser.guild.joinedAt.getMonth()
            //let jyear = targetUser.guild.joinedAt.getFullYear()
            if (targetUser.user.bot) {
                let embed = new Discord.RichEmbed()
                    .setColor(0xff6464)
                    .setTitle("Info for `" + targetUser.user.username + "`")
                    .addField("Account Created", `${month}/${day}/${year}`, true)
                    .addField("Bot", "This user is a bot.", true)
                    .addField("Status", targetUser.user.presence.status, true)
                    .addField("Last Seen", targetUser.user.lastMessage ? moment(targetUser.user.lastMessage.createdTimestamp).calendar() + ' UTC' : 'Unknown', true)
                    //.addField(`Joined ${message.guild.name}`,`${jmonth}/${jday}/${jyear}`,true)
                    .addField("Roles", targetUser.roles.map(c => c.name).join(', '), true)
                    .setFooter("Searched")
                    .setTimestamp()
                    .setThumbnail(targetUser.user.displayAvatarURL)
                message.channel.send(embed)
            }
            if (!targetUser.user.bot) {
                let embed = new Discord.RichEmbed()
                    .setColor(0xff6464)
                    .setTitle("Info for `" + targetUser.user.username + "`")
                    .addField("Account Created", `${month}/${day}/${year}`, true)
                    .addField("Bot", "This user is not a bot.", true)
                    .addField("Status", targetUser.user.presence.status, true)
                    .addField("Last Seen", targetUser.user.lastMessage ? moment(targetUser.user.lastMessage.createdTimestamp).calendar() + ' UTC' : 'Unknown', true)
                    //.addField(`Joined ${message.guild.name}`,`${jmonth}/${jday}/${jyear}`,true)
                    .addField("Roles", targetUser.roles.map(c => c.name).join(', '), true)
                    .setFooter("Searched")
                    .setTimestamp()
                    .setThumbnail(targetUser.user.displayAvatarURL)
                message.channel.send(embed)
            }
        }
    }
    if (message.content.startsWith(prefix + "serverinfo")) {
        if (message.author.bot) return;
        let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
        let day = message.guild.createdAt.getDate()
        let month = 1 + message.guild.createdAt.getMonth()
        let year = message.guild.createdAt.getFullYear()
        let servicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, servicon)
            .setFooter(`Server Created on ${month}/${day}/${year}`)
            .setColor(0xff6464)
            .setThumbnail(servicon)
            .addField("Owner", message.guild.owner.user.tag, true)
            .addField("Region", message.guild.region, true)
            .addField("Channels", message.guild.channels.size, true)
            .addField("Members", message.guild.memberCount, true)
            .addField("Online", online.size, true)
            .addField("Roles", message.guild.roles.size, true);
        message.channel.send(serverembed);
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
                .setColor(0xff6464)
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
            return message.reply("I cannot kick someone with a higher role than me/without proper permissions!");
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";
        await member.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        let embed = new Discord.RichEmbed()
            .setAuthor("Kick", evileye.user.displayAvatarURL)
            .setColor(0xff6464)
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
                console.log(data)
                let Embed = new Discord.RichEmbed()
                    .setColor(0xff6464)
                    .setTitle(data.title)
                    .addField("Genres", data.genres)
                    .addField("Aired/Airing", data.aired, true)
                    .addField("Status", data.status + " with " + data.episodes + " episodes", true)
                    .addField("Rated", data.rating, true)
                    .addField("MAL Score", "`" + data.score + "8`/10 " + data.scoreStats, true)
                    .addField("Summary", data.synopsis.slice(0, 1021) + "...")
                    .setThumbnail(data.picture)
                    .setFooter("Ranked " + data.ranked + " on MAL.")
                    .setURL(data.url)
                message.channel.send(Embed)
            }).catch((err) => console.log(err))
    }
    if (message.content.startsWith(prefix + "owo ") || (message.content.startsWith(prefix + "owoify ") || (message.content.startsWith(prefix + "OwOify ") || (message.content.startsWith(prefix + "OwO "))))) {
        let text = `${args.join(" ")}`.replace(/r|l/g, "w").replace(/R|L/g, "W");
        let embed = new Discord.RichEmbed()
            .setColor(0xff6464)
            .setDescription(text.slice(0, 1024), true)
        message.channel.send(embed)
    }
    if (message.content.startsWith(prefix + "blood ")) {
        let text = `${args.join(" ")}`.replace(/c|k/g, "b").replace(/C|K/g, "B");
        let embed = new Discord.RichEmbed()
            .setColor(0xff6464)
            .setDescription(text, true)
        message.channel.send(embed)
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
            .setColor(0xff6464)
            .setTitle(`${member.user.tag} has been banned by ${message.author.tag}.`)
            .setFooter(`${member.user.tag} has been banned.`)
            .addField(`Reason:`, `${reason}`)
        message.channel.send(embed);
    }
    if (message.content.startsWith(prefix + "ass") || (message.content.startsWith(prefix + "butts") || (message.content.startsWith(prefix + "booty")))) {
        if (!message.channel.nsfw) return message.reply("🔞 This command can only be used on an NSFW Channel! 🔞")
        var randomPuppy = require('random-puppy');
        var subreddits = [
            'Ass',
            'Butts',
            'Butt',
            'Booties',
            'DatAss',
            'Pawg',
            'Booty'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        randomPuppy(sub)
            .then(url => {
                let embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setTitle("Booty <3")
                    .setFooter("Image doesn't load? Probably a video or a deleted image.")
                    .setImage(url);
                message.channel.send({
                    embed
                });
            })
    }

    if (message.content.startsWith(prefix + "tits") || (message.content.startsWith(prefix + "boobs"))) {
        if (!message.channel.nsfw) return message.reply("🔞 This command can only be used on an NSFW Channel! 🔞")
        var randomPuppy = require('random-puppy');
        var subreddits = [
            'Tits',
            'Nipples',
            'Boobies',
            'Titties',
            'Boobs'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        randomPuppy(sub)
            .then(url => {
                let embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setTitle("Boobs <3")
                    .setFooter("Image doesn't load? Probably a video or a deleted image.")
                    .setImage(url);
                message.channel.send({
                    embed
                });
            })
    }
    if (message.content.startsWith(prefix + "4k")) {
        if (!message.channel.nsfw) return message.reply("🔞 This command can only be used on an NSFW Channel! 🔞")
        var randomPuppy = require('random-puppy');
        var subreddits = [
            'NSFW_Wallpapers',
            'SexyWallpapers',
            'HighResNSFW',
            'nsfw_hd',
            'UHDnsfw'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        randomPuppy(sub)
            .then(url => {
                let embed = new Discord.RichEmbed()
                    .setColor(0xff6464)
                    .setFooter("Image doesn't load? Probably a video or a deleted image.")
                    .setImage(url);
                message.channel.send({
                    embed
                });
            })
    }
    if (message.content.startsWith(prefix + "RedditMeme") || (message.content.startsWith(prefix + "Redditmeme") || (message.content.startsWith(prefix + "redditmeme")))) {
        var meme = require('memejs');
        meme(function(data) {
            var embed = new Discord.RichEmbed()
                .setTitle(data.title[0])
                .setColor(0xff6464)
                .setImage(data.url[0])
                .setFooter(data.author[0] + "'s post in " + data.subreddit[0])
            message.channel.send({
                embed
            });
        });
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
                    .setColor(0xff6464)
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
                    .setColor(0xff6464)
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
                    .setColor(0xff6464)
                    .setImage(images[0].common.fileURL)
                message.channel.send(Embed)
            }).catch(err => message.channel.send("No image found for your search!"));
    }
    if (message.content.startsWith(prefix + "createrole")) {
        let role = message.guild.roles.find(r => r.name == `${args[1]}`);
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Sorry, you don't have permissions to use this!");
        if (!role) {
            message.guild.createRole({
                    name: `${args.slice(1).join(" ")}`,
                    color: `${args[0].toUpperCase()}`,
                })
                .then(role => message.channel.send(`Created new role with name "${role.name}" and color "${role.color}".`))
                .catch(error => message.reply("There was a problem making this role. Make sure you're using the right colors."))
        } else {
            message.reply(`There's already a role with the name "${role.name}".`)
        }
    }
    if (message.content.startsWith(prefix + "mute")) {
        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not have the right permissions for this.");
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!toMute) return message.channel.send("Please specify someone.");
        if (toMute.id === message.author.id) return message.channel.send("You're not allowed to mute yourself.");
        if (toMute.highestRole.position >= message.member.highestRole.position) return message.channel.send("Unable to mute a member that has the same or higher role than you!");
        let role = message.guild.roles.find(r => r.name == "Muted");
        if (!role) {
            try {
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
            } catch (e) {
                console.log(e.stack)
            }
        }
        if (toMute.roles.has(role.id)) return message.channel.send("This user is already muted!");
        await toMute.addRole(role);
        message.channel.send("I have muted this user!");

    }
    if (message.content.startsWith(prefix + "unmute")) {
        if (message.author.bot) return;
        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You do not have the right permissions for this.");
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!toMute) return message.channel.send("Please specify someone.")
        let role = message.guild.roles.find(r => r.name == "Muted");
        if (!role || !toMute.roles.has(role.id)) return message.channel.send("This user is not muted!");
        await toMute.removeRole(role);
        message.channel.send("I have unmuted this user.");
        return;
    }
    if (message.content.startsWith(prefix + "quote")) {
        let quotes = require("./quotes.json");
        let result = quotes[Math.floor((Math.random() * quotes.length))];
        let Embed = new Discord.RichEmbed()
            .setColor(0xff6464)
            .setDescription(`${result.quote}`)
            .setFooter(`${result.name} from ${result.anime}`);
        message.channel.send(Embed)

    }
    if (message.content.startsWith(prefix + "ascii") || (message.content.startsWith(prefix + "asciify"))) {
        var figlet = require('figlet');
        var maxLen = 14 // You can modify the max characters here
        if (args.join(' ').length > maxLen) return message.channel.send('Only 14 characters allowed!')
        if (!args[0]) return message.channel.send('Nothing was given for me to ASCIIfy');
        figlet(`${args.join(' ')}`, function(err, data) {
            if (err) {
                message.log('Hm.. Something seems to have gone wrong here.');
                console.dir(err);
                return;
            }
            message.channel.send(`${data}`, {
                code: 'AsciiArt'
            });
        });
    }
    if (message.content.startsWith(prefix + "overlord")) {
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
        if (message.content.startsWith(prefix + "translate")) {
        var translate = require('google-translate-api');
        var Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

        if (message.author.bot) return;
        if (args[0] === undefined) {

            var embed = new Discord.RichEmbed()
                .setColor(0xff6464)
                .setDescription("Please provide more for the bot to translate.\nUsage: `" + prefix + "translate <language> <text>`");
            return message.channel.send(embed);

        } else {

            if (args[1] === undefined) {
                var embed = new Discord.RichEmbed()
                    .setColor(0xff6464)
                    .setDescription("Please specify something to translate.\n `" + prefix + "translate <language> <text>`");
                return message.channel.send(embed);

            } else {

                let transArg = args[0].toLowerCase();

                args = args.join(' ').slice(prefix.length);
                let translation;

                if (!Langs.includes(transArg)) return message.channel.send(`That language was not found.`);
                args = args.slice(transArg.length);

                translate(args, {
                    to: transArg
                }).then(res => {

                    var embed = new Discord.RichEmbed()
                        .setTitle(`Translating to ${transArg}`)
                        .addField(`\"${args}\"`, `\"${res.text}\"`)
                        .setColor(0xff6464)
                    return message.channel.send(embed);

                });

            }

        }

    }
    if (message.content.startsWith(prefix + "news ")) {
        var NewsAPI = require('newsapi');
        var newsapi = new NewsAPI('e58c37a5847148ccb5c8f61e8c2d477b');
        var rand = Math.floor(Math.random() * 11) + 1;

        newsapi.v2.everything({

            q: `${args.join(" ")}`,
            domains: 'cnn.com,news.google.com,foxnews.com,npr.org,abcnews.go.com,yahoo.com/news/,bbc.co.uk,techcrunch.com',
            from: '2018-8-1',
            to: '2018-12-31',
            language: 'en',
            sortBy: 'relevancy',
            page: rand

        }).then(response => {
            console.log(response)
            if (response.totalResults == 0) return message.reply("Nothing found for your search.. Weird.")
            if (!response.articles[0].title) {
                let embed = new Discord.RichEmbed()
                    .setTitle(`Result For ${args.join("")}`)
                    .setDescription(response.articles[0].description)
                    .setImage(response.articles[0].urlToImage)
                    .setColor(0xff6464)
                    .setURL(response.articles[0].url)
                    .setFooter("Published On " + response.articles[0].publishedAt + " by: " + response.articles[0].author)
                message.channel.send(embed)
            }
            let embed = new Discord.RichEmbed()
                .setTitle(response.articles[0].title)
                .setDescription(response.articles[0].description)
                .setImage(response.articles[0].urlToImage)
                .setColor(0xff6464)
                .setURL(response.articles[0].url)
                .setFooter("Published On " + response.articles[0].publishedAt + " by: " + response.articles[0].author)
            message.channel.send(embed)
        }).catch(err => {
            if(err) message.reply("An error has occured with your search. Please try again.");
            })
    }
    if (message.content.startsWith(prefix + "eval")) {
        let botmessage = args.join(" ");
        if (message.author.id !== "168865955940794368") return;
        try {
            var code = args.join(" ");
            var evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled)
            var embed = new Discord.RichEmbed()
            message.channel.send({
                embed: {
                    color: 0xff6464,
                    author: {
                        name: evileye.user.username,
                        icon_url: evileye.user.avatarURL
                    },
                    description: botmessage,
                    fields: [{
                        name: "Result",
                        value: ("x1", clean(evaled))
                    }],
                    timestamp: new Date(),
                }
            });
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\``);
        }

        function clean(text) {
            if (typeof(text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }
    }
})

evileye.login(process.env.BOT_TOKEN);
