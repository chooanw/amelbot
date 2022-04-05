let handler = async m => m.reply(`
Coming Soon!!!

`.trim()) // Tambah sendiri kalo mau
handler.help = ['bts_download']
handler.tags = ['betherst']
handler.command = /^(bts_download)$/i

handler.limit = false

module.exports = handler