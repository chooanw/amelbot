gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/', ''] // ganti jadi group lu
global.owner = ['6285850617890'] // Put your number here //owner eval
global.kontak = ['6285850617890','0'] //Ketika ada yang ngetik #owner
global.mods = ['6285850617890'] // Want some help?
global.prems = ['6285850617890','6288992828500'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  bear: 'https://apikey-bear.herokuapp.com',
  bear2: 'https://apikey-bear2.herokuapp.com',
  bear3: 'https://apikey-bear3.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'MIMINETBOT',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://apikey-bear.herokuapp.com': 'scmcHKUx',
  'https://apikey-bear2.herokuapp.com': 'scmcHKUx',
  'https://apikey-bear3.herokuapp.com': 'scmcHKUx',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'buy'
zekskey = 'apivinz'
xteamkey = 'MIMINETBOT'
leyskey = 'dappakntlll'
bearkey = 'scmcHKUx'

//xteam        MIMINETBOT
namaig = ''
namagithub = 'GAK ADA :)'
kasihcaption = `Nih kak`
namakontak1 = 'Atlema'
namakontak2 = 'Atlema'

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'By Atlema' // ganti aja
global.author = 'Atlema' // ganti aja

//yyy
bc = 'Atlema' //King Of Bear Broadcast
footer = '\n©Ameltanindya'
namabot = 'Atlema-Bot'
namalu = 'Atlema'


// 
wait = '_*Tunggu Sebentar...*_'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})