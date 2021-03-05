const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('The Bot is Online');
    client.user.setActivity('With Nathan')
    });


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command  = args.shift().toLowerCase();

    if(command === 'ela'){
        message.channel.send('989 2768 3939');
        message.channel.send('LJA 2020')
    }

    if(command === 'math'){
        message.channel.send('970 2207 0038');
        message.channel.send('Math')
    }

    if(command === 'science'){
        message.channel.send('968 3381 7425');
        message.channel.send('scienceLJA')
    }

    if(command === 'french'){
        message.channel.send('944 8028 9200');
        message.channel.send('orange')
    }

    if(command === 'music'){
        message.channel.send('843 3179 9290');
        message.channel.send('389976')
    }

    if(command === 'ghc'){
        message.channel.send('960 1278 9941');
        message.channel.send('Ghc31')
    }

    if(command === "helpme"){
        message.channel.send("your.mother.does.not.like.you.");
    }

    if(command === "goodnight"){
        message.channel.send('goodnight.you.like.men')
    }

    if(command === "sciola"){
        message.channel.send("fat")
    }



});  


client.login('Nzk2NDMwOTA0NDg5OTM0ODY4.X_X0FA.7bEQAoLEjp1Wr09TOsTAb7FpNZM')