exports.run = (msg, client, Discord, ownerID) => {
  if(msg.author.id == ownerID){
  msg.member.voice.channel.leave();
    msg.channel.send(`Left the voice channel. Cya! ${msg.author}`);
  }
};
