let fetch = require("node-fetch")
async function handler(m, {command}) {
//m.reply('_Loading..._')
let res = await fetch(`https://github.com/chooanw/botwanyaamel/raw/main/audio/${command}.mp3`)
json = await res.buffer()
     await conn.sendFile(m.chat, json, 'error.mp3', null, m, true)
}
handler.help = ['nisajelek', 'feparcantik']
handler.tags = ['vn']
handler.command = /^(nisajelek|feparcantik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = 2

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
