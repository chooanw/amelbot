let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
`.trim(), m)
}

handler.command = /^viapulsa$/i

module.exports = handler
