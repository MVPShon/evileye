const Discord = require("discord.js");
let prefix = ".";
exports.run = async (evileye, message, args) => {
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
