exports.run = (msg, cmd, client, Discord, ownerID) => {
  if (msg.author.id == ownerID) {
    switch (cmd) {
      case "play":
        let play = require("./music/play.js");
        play.run(msg, client, Discord);
        break;
      case "leave":
      case "dc":
        let leave = require("./music/leave.js");
        leave.run(msg, client, Discord);
        break;
    }
  }
};
