const { MessageEmbed } = require('discord.js');
const { MESSAGE_EMBED } = require('../common/constants');
const { prefix } = require('../common/settings');

module.exports = {
  name: 'help',
  description: 'Display a help message with all the available commands.',
  emoji: ':question:',
  execute(message, options) {
    const embed = new MessageEmbed()
      .setTitle('Text-to-Speech Help Message')
      .setColor(MESSAGE_EMBED.color)
      .setThumbnail(MESSAGE_EMBED.helpThumbnail)
      .setDescription("'say', 'aeiou', 'stop', 'lang', 'langs', 'speed'")
     // .addField('Spotted a bug?', `This bot is far from perfect, so in case you found a bug, please report it in this bot's [**GitHub Issues Page**](${MESSAGE_EMBED.helpURL}).`);
    
    message.channel.send(embed);
  }
};
