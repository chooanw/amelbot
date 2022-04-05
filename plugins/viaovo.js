let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
`.trim(), m)
}

handler.command = /^viaovo$/i

module.exports = handler
