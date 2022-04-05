let handler = async m => m.reply(`
/t3enter 14007E346F540B5A6D11576F084660005D79025D F
`.trim()) // Tambah sendiri kalo mau
handler.help = ['']
handler.tags = ['']
handler.command = /^(amelt3moveon)$/i

handler.limit = false

module.exports = handler
