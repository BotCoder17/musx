const Discord = require("discord.js");
const client = new Discord.Client({
  disableMentionse: true
});
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

setInterval(() => {
  http.get(process.env.SECRET_LINK);
}, 60000);

const ownerID = process.env.OWNERID;

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("ready!");
  client.user
    .setPresence({
      activity: {
        name: "Music",
        type: "LISTENING"
      },
      status: "online"
    })
    .then("")
    .catch(console.error);
});

client.on("message", msg => {
  const cmd = msg.content.toLowerCase().trim();

  if (cmd == "ping")
    msg.channel.send(`Pinging...`).then(m => {
      var ping = m.createdTimestamp - msg.createdTimestamp;
      m.edit(`Pong! Your ping is,  **${ping}ms**`);
    });

  let rn = require("./music_cmds.js");
  rn.run(msg, cmd, client, Discord, ownerID);
});
