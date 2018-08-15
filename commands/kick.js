        const Discord = require("discord.js");
        exports.run = async (evileye, message, args) => {
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