﻿let handler = async (m, { conn }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.DATABASE.data.settings
    const chats = conn.chats.all()
    const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    m.reply(`
┌─〔 Status 〕
├ Aktif selama ${uptime}
├ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
├ *${groups.length}* Grup
├ *${chats.length - groups.length}* Chat Pribadi
├ *${Object.keys(global.DATABASE.data.users).length}* Pengguna
├ *${totaljadibot.length}* Jadibot
├ *${conn.blocklist.length}* Terblock
├ *${Object.entries(global.DATABASE.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
├ *${Object.entries(global.DATABASE.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
└─
`.trim())
}
handler.help = ['mystat']
handler.tags = ['info']
handler.command = /^mystat$/i
module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}