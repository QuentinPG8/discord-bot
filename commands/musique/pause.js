const { Command, CommandoMessage } = require("discord.js-commando");
const { Streamdispatcher } = require('discord.js');

module.exports = class PauseCommand extends Command{
    constructor(client) {
        super(client, {
            name: 'pause',
            group: 'musique',
            memberName: 'pause',
            description: 'Met en pause la musique.',
        });
    }

    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message) {
        /**
         * @type Streamdispatcher 
         */
        const dispatcher = message.client.server.dispatcher;

        if (!message.member.voice.channel) {
            return message.say(':x: Tu dois être dans un salon vocal pour pouvoir utiliser cette commande.');
        }

        if(!message.client.voice.connections.first()) {
            return message.say(":x: Je ne suis pas connecté à un salon vocal. Ecris `-join` pour m'ajouter") 
        }

        if(dispatcher) {
            dispatcher.pause();
        }

        return message.say(":pause_button: Pause :thumbsup:");
    }    
}
