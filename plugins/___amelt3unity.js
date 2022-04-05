let handler = async m => m.reply(`
/T3ENTER 12007E346F540D55700A5E7D035E64195962 IN
`.trim()) // Tambah sendiri kalo mau
handler.help = ['']
handler.tags = ['']
handler.command = /^(amelt3unity)$/i

handler.limit = false

module.exports = handler
