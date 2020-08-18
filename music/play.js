exports.run = (msg, client, Discord) => {
  client.on("warn", console.warn);
  client.on("error", errrr => {
    msg.channel.send(
      `An error occured! maybe i don't have the permission to join the voice channel`
    );
  });
  
    try {
      msg.member.voice.channel
        .join()
        .then(connection => {
          const ytdl = require("ytdl-core");
          const broadcast = client.voice.createBroadcast();
          broadcast.play(ytdl("https://www.youtube.com/watch?v=5qap5aO4i9A"));
          const dispatcher = connection.play(broadcast);
          msg.channel.send(`Let's rock 24/7!`);
        })
        .catch(console.log);
    } catch (err) {
      msg.channel.send(`Join the VC ${msg.author}`);
    }
  };
