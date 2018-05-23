const Discord = require('discord.js');
const Bot = new Discord.Client();

client.login(process.env.BOT_TOKEN);

Bot.login('NDQ4NTk0MjMzMzE0NTA4ODIx.Deb9rw.9TqEyFhs8xtFDkL1gPFUQmSVmUU');

Bot.on('ready', function() {
    Bot.user.setActivity('Antika').catch(console.error)
})



Bot.on('message', function(message) {
    if (message.content === '!ping') {
        message.reply('pong')
    }

const args = message.content.substring().split(" ");

    switch (args[0].toLowerCase()) {
        case "!d":
            var d = Math.floor(Math.random() * args[1] )+1;
            if (!d) return message.reply ("Quel dé dois-je lancer ?");
            message.reply("Résultat du lancé: "+d);
            break;
    }
});