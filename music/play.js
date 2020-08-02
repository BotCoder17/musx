exports.run = (msg, client, Discord, cl, ownerID) => {
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
          broadcast.play(ytdl("https://www.youtube.com/watch?v=v3jpVUOi9XU"));
          const dispatcher = connection.play(broadcast);
        })
        .catch(console.log);
      msg.channel.send(`Let's rock 24/7!`);
    } catch (err) {
      msg.channel.send(`Join the VC ${msg.author}`);
    }
  };
