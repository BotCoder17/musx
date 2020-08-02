const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true
});
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

/*setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);*/

/*const pm2 = require("pm2");
pm2.start({
  name : "max_mem",
  script : "/app/index.js",
  exec_interpreter : "node",
  exec_mode : "fork_mode",
  max_memory_restart : "20M"
}, function(err, proc) {
   console.log(proc)
});*/

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
