const { Command, CommandoMessage } = require("discord.js-commando");
const { Streamdispatcher } = require('discord.js');
const { UserNotInVoiceChannel,  BotNotInVoiceChannel } = require('../../strings.json');

module.exports = class ResumeCommand extends Command{
    constructor(client) {
        super(client, {
            name: 'resume',
            group: 'musique',
            memberName: 'resume',
            description: 'Reprendre la musique qui est en pause.',
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
            return message.say(UserNotInVoiceChannel);
        }

        if(!message.client.voice.connections.first()) {
            return message.say(BotNotInVoiceChannel) 
        }

        if(dispatcher) {
            dispatcher.resume();
        }

        return message.say("En train d'écouter de la musique :notes: ");
    }    
}
