const logger = require('@greencoast/logger');

module.exports = {
  name: 's',
  description: `Send a TTS message in your voice channel.`,
  emoji: '<:voice:781104924091613190>',
  execute(message, options) {
    const { channel } = message.member.voice;
    const { ttsPlayer, name: guildName, voice } = message.guild;
    const [atLeastOneWord] = options.args;
    let connection = client.voice ? client.voice.connection : null;
    connection = await channel.join()
    if (!channel) {
      return;
    }
    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return
    if (!channel.joinable) {
      message.reply('I cannot join your voice channel.');
      return;
    }

    if (!atLeastOneWord) {
      return;
    }
    
    if (connection) {
      ttsPlayer.say(options.args.join(' '));
    } else {
      channel.join()
        .then(() => {
          logger.info(`Joined ${channel.name} in ${guildName}.`);
          message.channel.send(`Joined ${channel}.`);
          ttsPlayer.say(options.args.join(' '));
        })
        .catch((error) => {
          throw error;
        });
    }
  }
};
