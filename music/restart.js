exports.run = (msg, client, Discord, cl, ownerID) => {
    if(msg.author.id == ownerID){
       msg.channel.send(`Resetting... **${client.user.tag}**`)
         .then(client.destroy())
         .then(client.login(process.env.TOKEN))
         .then((mes) => {
           client.on('ready', () => {
              mes.edit(`**${client.user.tag}** is online!`);
           });
        });
     }
}