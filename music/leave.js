exports.run = (msg, client, Discord) => {
  msg.member.voice.channel.leave();
    msg.channel.send(`Left the voice channel. Cya!`);
};
