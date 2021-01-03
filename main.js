const { CommandoClient, Client } = require('discord.js-commando');
const path = require('path');
const { token } = require('./config.json');

const client = new CommandoClient({
    commandPrefix: '-',
    owner: '478130892498534410',
    invite: 'https://discord.gg/mu7D8C7u',
});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup('musique','Musique')
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.server = {
    queue: [],
    currentVideo: { url:"", title: "Rien pour le moment !" },
    dispatcher: null,
    connection: null,
};

    client.once('ready', () => {
        console.log(`Connecté en tant que ${client.user.tag} -  (${client.user.id})`);
    });

    client.on('error', (error) => console.error(error));

    client.login(process.env.TOKEN);