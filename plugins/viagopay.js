let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
`.trim(), m)
}

handler.command = /^viagopay$/i

module.exports = handler
