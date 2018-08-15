const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
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