const Discord = require("discord.js");
exports.run = async (evileye, message, args) => {
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
    if (err) message.reply("An error has occured with your search. Please try again.");
})
}
