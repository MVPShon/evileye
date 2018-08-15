const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
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