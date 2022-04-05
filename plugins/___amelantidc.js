let handler = async m => m.reply(`
*http://au.nav.co.id/files/ANTIDC.rar*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['']
handler.tags = ['']
handler.command = /^(amelantidc)$/i

handler.limit = 50

module.exports = handler