const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth()
});


client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Udah ke hubung nih cuy!');
});

client.on('message', message => {
  console.log(`${message.from}: ${message.body}`);

  if (message.body.toLowerCase() === '.aip') {
    message.reply('Halo! Ada yang bisa saya bantu?');
  }else if(message.body.toLowerCase() === '.pesan'){
    message.reply('Pesan apa cuy hsdjfisdifbisdfbdibsdifbsdibfidbsifbisdfibsdibfisdf')
  }else{
    message.reply('Hallo Teman! saya adalah Aip, kamu butuh bantuan ketik .aip')
}
});

client.initialize();

