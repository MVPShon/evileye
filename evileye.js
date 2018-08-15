const Discord = require("discord.js");
let evileye = new Discord.Client();
let prefix = ".";
evileye.on("ready", async () => {
    let statuses = [
        `${evileye.guilds.size} servers!`,
        `over ${evileye.users.size} people!`,
        `\"${prefix}` + `help\" for help with ${evileye.user.username}`,
        `${evileye.channels.size} rooms!`,
        `newest anime episodes!`
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

        let commandFile = require(`./Commands/${cmd}.js`);
        commandFile.run(evileye, message, args, prefix);

    } catch (e) {
        return;
    }

});
evileye.login(process.env.BOT_TOKEN);
