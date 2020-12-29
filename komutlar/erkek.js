const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
 if(!message.member.roles.cache.has('762306051336437800')) return message.channel.send('Bu kodu kullanmak için yeterli yetkin yok!')
  
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  let al = "762306275916644372"; ///alınacak rol idsi
  let ver = "762306051999531068"; ///verilecek rol idsi
  let ver1 = "";
  if (!member) return message.channel.send("Lütfen bir üyeyi etiketle ve isim yaş belirt. @Xizy/İD");
  if (!isim) return message.channel.send("Lütfen bir üyeyi etiketle ve isim yaş belirt. @Xizy/İD");
  member.setNickname(`${isim}  [${yaş}]`);
  
    member.roles.add(ver);
    member.roles.remove(al);
    member.roles.add(ver1);


  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle(":butterfly: Kayıt işlemi başarılı :butterfly:")
    .setImage("https://media.tenor.com/images/5a8496cf0faf284d514a8cedc3f7332d/tenor.gif")
    .setDescription(`
**Kayıt Edilen Kullanıcı** : ${member.user.username}
**Kayıt Eden Yetkili** : ${message.author.username}

**Kayıt İşleminde Verilen Roller** : 
<@&762306051999531068> <@&>

**Kayıt İşleminde Alınan Rol** :
<@&762306275916644372>
`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["erkek" , "e"],
  permLevel: 0
}
exports.help = {
  name: 'Erkek',
  description: "Erkek Kayıt Sıstemı",
  usage: 'Erkek isim yaş'
}