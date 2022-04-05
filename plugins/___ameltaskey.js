let fs = require('fs')
let handler  = async (m, { conn, text }) => {
//m.reply('Tunggu Sebentar, Proses Getting File database.json')
let db = fs.readFileSync('./Files/TaskKeyHookWD.dll')
conn.sendFile(m.chat, db, 'TaskKeyHookWD.dll', m)
}
handler.help = [''].map(v => v + '')
handler.tags = ['']
handler.command = /^(ameltaskey)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)