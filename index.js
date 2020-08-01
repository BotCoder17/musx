"use strict";

const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true
});
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  //console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 10000);

client.login(process.env.TOKEN);
client.on("message", msg => {
  if(msg.content == 'play'){
  msg.member.voice.channel
    .join()
    .then(connection => {
      const ytdl = require("ytdl-core");
      const broadcast = client.voice.createBroadcast();
      broadcast.play(
        ytdl("https://www.youtube.com/watch?v=v3jpVUOi9XU", {
          filter: "audioonly"
        })
      );
      const dispatcher = connection.play(broadcast);
    })
    .catch(console.error);
  }
});
