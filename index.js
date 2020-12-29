const Discord = require("discord.js")
const client = new Discord.Client()

// None config, disabled it
//const { prefix , token } = require("./config.json")
const prefix = "!";

// Your stock
var stock = "0";

// On Ready
client.on("ready", () => {
      console.log(`Logged in as ${client.user.tag}!`)
      client.user.setActivity("!help", {type: "PLAYING"})
})

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }

    // Version remade of AltGen Bot by someone

    // prefix
    let args = receivedMessage.content.substring(prefix.length).split(" ");

    // get user and space
    var getUser = receivedMessage.author.toString() + ' ';

    // mabe it outdated, check new bot for command and prefixes.
    switch(args[0]) {
        // gen alt
        case 'alt':
            // stock =/ 0
            if(stock > 0 ) {
		
                // Your alts, with example
		        var string = `your@mail.com:password
other@mail.com:otherpassword`
	
                var words = string.split('\n');
                let random = words[Math.floor(Math.random()*words.length)];
	    
	            // Send random alt to DM
	            receivedMessage.author.send(`${random}`);

                } else { // if stock = 0
                    receivedMessage.channel.send(getUser + 'Sorry, but there are currently no alts in stock.');
                }
        break;

        // Check alt in stock
        case 'alts':
            if(stock > 0) {
                receivedMessage.channel.send(getUser + '**' + stock + '** ' + 'alt(s) in stock.');
            } else {
                receivedMessage.channel.send(getUser + 'No alt in stock.');
            }
        break;
        
        // Help command
        case 'help':
            receivedMessage.channel.send(`__Here is ommand available__: \n*${prefix}alt* - Get an alt \n*${prefix}alts* - View alts are available \n*${prefix}help* - Help command`);
        break;
    }
});

// Login bot with your token
client.login(<YOUR TOKEN>)
