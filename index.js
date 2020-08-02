'use strict';

const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true
});
const https = require("https");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  //console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
   https.get('https://musicappa.herokuapp.com/');
}, 60000);
const ownerID = process.env.OWNERID;
client.login(process.env.TOKEN);

client.on("message", msg => {
  
  if (msg.content.toLowerCase() == 'ping')
      msg.channel.send('Pong!');
  
  if (msg.content.toLowerCase() == 'play' && msg.author.id == ownerID) {
       try {
        msg.member.voice.channel
          .join()
          .then(connection => {
            const ytdl = require('ytdl-core');
            const broadcast = client.voice.createBroadcast();
            broadcast.play(ytdl('https://www.youtube.com/watch?v=v3jpVUOi9XU'));
            const dispatcher = connection.play(broadcast);
          })
          .catch(console.log);
      } catch (err) {
        msg.channel
          .send(`Join the VC ${msg.author}`);
      }
  }
});
