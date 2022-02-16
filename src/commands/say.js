const logger = require('@greencoast/logger');

module.exports = {
  name: 's',
  description: `Send a TTS message in your voice channel.`,
  emoji: '<:voice:781104924091613190>',
 async execute(message, options) {
    const { channel } = message.member.voice;
    const { ttsPlayer, name: guildName, voice } = message.guild;
    const [atLeastOneWord] = options.args;
    let connection = voice ? voice.connection : null;
    if (!channel) {
      return;
    }

//     if(message.guild.me.voice.channel && ) return
    if (!channel.joinable) {
      message.reply('I cannot join your voice channel.');
      return;
    }
    if (!atLeastOneWord) {
      return;
    }
         if(message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
       channel.join()
      .then(() => {
          logger.info(`Joined ${channel.name} in ${guildName}.`);
          message.channel.send(`Joined ${channel}.`);
          ttsPlayer.say(message.member.nickname + options.args.join(' '));
        })
        .catch((error) => {
        console.log(error)
//           throw error;
        });
         }
    if (connection) {
      ttsPlayer.say(`${message.member.nickname} nói ${options.args.join(' ')}`);
    } else {
      channel.join()
        .then(() => {
          logger.info(`Joined ${channel.name} in ${guildName}.`);
          message.channel.send(`Joined ${channel}.`);
          ttsPlayer.say(`${message.member.nickname} nói ${options.args.join(' ')}`);
        })
        .catch((error) => {
          throw error;
        });
    }
  }
};
