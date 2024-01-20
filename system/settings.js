let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Waktu
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`

// Hari Tanggal
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

// Owner
global.owner = [
  ['-'],
  ['-'],
  ['51902247905', 'kencito', 'contact@kemii.my.id', true]
] // Put your number here
global.mods = ['51902247905'] // Moderator
global.prems = ['51902247905'] // Premium
global.rose = '-';
global.xyro = '-';
global.btc = '-';
global.xzn = '-';
global.lolkey = '-';
global.yanz = '-';
global.zein = '-',
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    neoxr: 'https://api.neoxr.eu',
    xyro: 'https://api.xyroinee.xyz',
    btc: 'https://api.betabotz.org',
    xfarr: 'https://api.xfarr.com',
    dzx: 'https://api.dhamzxploit.my.id',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    popcat: 'https://api.popcat.xyz',
    xzn: 'https://skizo.tech',
    saipul: 'https://saipulanuar.cf',
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': '-',
    'https://api.xteam.xyz': '-',
    'https://api.xyroinee.xyz': '-',
    'https://api.neoxr.eu': '-',
    'https://api.xfarr.com': '-',
    'https://api.zahwazein.xyz': '-',
    'https://api.betabotz.org': '-',
    'https://api.lolhuman.xyz': '-',
    'https://api.itsrose.life': '-',
    'https://skizo.tech': '-',
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = '𝐂𝐎𝐃𝐄𝐗'
  var sticker_author = '𝐊𝐄𝐍𝐍'
} else {
  var sticker_name = '𝐂𝐎𝐃𝐄𝐗'
  var sticker_author = '𝐊𝐄𝐍𝐂'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
global.kiku = 'application/vnd.android.package-archive'

// Database
global.version = '1.0'
global.sessionName = '𝐤𝐞𝐧𝐧'
global.gcbot = 'https://whatsapp.com/channel/0029VaFgPI53WHTcT0I6480Z'
global.instagram = 'https://whatsapp.com/channel/0029VaFgPI53WHTcT0I6480Z'
global.namebot = '© 𝐜𝐨𝐝𝐞𝐱 v1 (privado Bot)'
global.thumb = 'https://telegra.ph/file/c91ec8a557494561fecd9.jpg'
global.thumbnail = 'https://telegra.ph/file/c91ec8a557494561fecd9.jpg'
global.myfile = fs.readFileSync(`./media/xfile.pdf`)
global.thumb2 = fs.readFileSync('./media/thumbnail.mp4')
global.qris = 'https://telegra.ph/file/c91ec8a557494561fecd9.jpg'
global.email = 'kennbot@gmail.com'
global.creator = "51902247905@s.whatsapp.net"
global.nomorbot = '-'
global.nomorown = '51902247905'
global.pairingNumber = ''

// Harga Nokos
global.nokosindo = '7000'
global.nokosusa = '8000'
global.nokosmalay = '12000'

// Panel
global.domain = '-' // Domain Web
global.apikey = 'ptla_sp05YjSSsGECwqLcgyDRn2h7lBXirq1r2paxbiVQFE2' // Key PTLA
global.c_apikey = 'ptlc_BQOrpge2VIepKGtZl5ng0qpgqguVst1A8KpKEaDre7s' // Key PTLC
global.eggs = '15'
global.locs = '1'

// Sosial Media
global.sig = '-'
global.syt = '-'
global.sgh = '-'
global.sgc = 'https://whatsapp.com/channel/0029VaFgPI53WHTcT0I6480Z'
global.swa = 'https://wa.me/51902247905'
global.swb = '-' // Link Discord
global.snh = 'https://whatsapp.com/channel/0029VaFgPI53WHTcT0I6480Z' // Link nhentai

// Pembayaran
global.pdana = '~Not Found~'
global.povo = '~Not Found~'
global.pgopay = '~Not Found~'
global.pulsa = '~Not Found~'
global.pulsa2 = '~Not Found~'
global.psaweria = '~Not Found~'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true
global.autoread = true

// Watermark
global.packname = '𝐂𝐎𝐃𝐄𝐗'
global.author = '// 𝐊𝐄𝐍𝐍'
global.wm = '𝐂𝐎𝐃𝐄𝐗'
global.wm2 = '𝐊𝐄𝐍𝐍'
global.bottime = `Time: ${wktuwib}`
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.titlebot = `${global.wm}`
global.danied = '𝐂𝐎𝐃𝐄𝐗!!'
global.done = '```Success...\nDont forget to donate```'
global.packname = '𝐂𝐎𝐃𝐄𝐗'
global.author = '𝐊𝐞𝐧𝐧'
global.nameown = '𝐊𝐄𝐍𝐍'
global.wait = '𝐞𝐬𝐩𝐞𝐫𝐚... '

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})//
