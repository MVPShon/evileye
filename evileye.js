const Discord = require("discord.js");
let evileye = new Discord.Client();
let prefix = ".";

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

evileye.on("guildMemberAdd", member => {
     if(member.guild.id == "249804584850161665")
        var tfollow = member.guild.roles.find(r => r.name == "Followers");
        member.addRole(tfollow); 
});
evileye.on("guildCreate", guild => {
    evileye.users.get("168865955940794368").send("`" + guild.owner.user.username + "` has just added me to their server: `" + guild.name + "`");
});
evileye.on("guildDelete", guild => {
    evileye.users.get("168865955940794368").send("`" + guild.owner.user.username + "` has just removed me from their server: `" + guild.name + "`");
});
evileye.on("ready", async () => {
    let statuses = [
        `${evileye.guilds.size} servers!`,
        `over ${evileye.users.size} people!`,
        `\"${prefix}` + `help\" for help with ${evileye.user.username}`,
        `${evileye.channels.size} rooms!`,
        `Music commands are up again, but still in testing! Use ".report" if you find anything wrong with the commands!`,
        `rewatching Overlord III!`
    ]

    console.log("Evileye is ready to go!")
    evileye.users.get("168865955940794368").send(`${evileye.user.username} has just restarted! \n${evileye.user.username} has been up for ${evileye.uptime} milliseconds!`)
    setInterval(function() {
    let status = Math.floor((Math.random() * statuses.length));
    evileye.user.setActivity(statuses[status], {
        type: 'WATCHING'
    })
    }, 15000)
});
evileye.on("message", message => {

    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    if(message.author.evileye) return;     
    if(!message.content.startsWith(prefix)) return;

    try {

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(evileye, message, args, prefix);

    } catch (e) {
        return;
    }

});
evileye.login(process.env.BOT_TOKEN);
