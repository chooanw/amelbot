let handler = async m => m.reply(`
/t3enter 19007B217E273225326412261D401E161D0A513A171C531304 IN
`.trim()) // Tambah sendiri kalo mau
handler.help = ['']
handler.tags = ['']
handler.command = /^(amelt3ayodance)$/i

handler.limit = false

module.exports = handler
