// LOLCÜ AVCISI
client.on('presenceUpdate', async (oldPresence, newPresence) => {
  const guild = newPresence.guild;
  const role = guild.roles.cache.get('935617380254642297'); //rol idsi
  const channelid = '936838099533713428' // yakalanan lolcülerin atılacağı kanal
  const member = newPresence.member;
  const activityname = member.presence.activities[0];           // Hangi activityde olduğunu gösteriyo

  try {
    if (member && activityname.name == 'League of Legends' && guild.id == '330105508935499778') {  //guild id'ye serverin id'si gelecek.

      client.channels.cache.get(channelid).send("lolcü yakaladım");

      const exampleEmbed = new MessageEmbed()
        .setTitle('LOL OYNARKEN YAKALANDI')
        .setURL('https://sptfy.com/Kaganobik')
        .setAuthor({ name: member.user.username, iconURL: member.avatarURL, url: 'https://sptfy.com/Kaganobik' })
        .setDescription(`<@${member.id}> adlı kullanıcı lol oynarken yakalandığı için utanç listesine eklendi.`)
        .setImage('https://cdn.discordapp.com/attachments/680209849422053457/936849229131943966/ezgif-2-2856114de2.gif')
        .setTimestamp()
        .setFooter({ text: 'Lol oynamayın.', iconURL: 'https://cdn.discordapp.com/attachments/680209849422053457/936845225417113620/240734817_803410537020629_6900674391509678983_n.png' });
      client.channels.cache.get(channelid).send({ embeds: [exampleEmbed] });

      client.channels.cache.get(channelid).send(`lolcüyü yakaladım <@${member.id}>`);
      return member.roles.add(role);

    }
  } catch (err) { }
});


client.login(token);


