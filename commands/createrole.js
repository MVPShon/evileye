const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
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
