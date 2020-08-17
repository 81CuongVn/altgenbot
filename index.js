const Discord = require("discord.js")
const client = new Discord.Client()
const { prefix , token } = require("./config.json")

var stock = "0";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity("!help", {type: "PLAYING"})
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }

    let args = receivedMessage.content.substring(prefix.length).split(" ");
    var getUser = receivedMessage.author.toString() + ' ';

    if (receivedMessage.content === prefix) {
	receivedMessage.channel.send(getUser + 'Type `!help` for command')
    }

    switch(args[0]) {
      case 'alt':
        if(stock > 0 ) {
	var string = ``

        var words = string.split('\n');
        let random = words[Math.floor(Math.random()*words.length)];

	   receivedMessage.author.send(`${random}`);
     } else
          receivedMessage.channel.send(getUser + 'Sorry, but there are currently no alts in stock.')
	break;

      case 'alts':
        if(stock > 0) {
          receivedMessage.channel.send(getUser + '**' + stock + '** ' + 'alt(s) in stock.')
        } else
          receivedMessage.channel.send(getUser + 'No alt in stock.')
      break;

      case 'help':
        receivedMessage.channel.send(`__Here is ommand available__: \n*${prefix}alt* - Get an alt \n*${prefix}alts* - View alts are available \n*${prefix}help* - Help command`)
      break;
    }
});


client.login(token)
