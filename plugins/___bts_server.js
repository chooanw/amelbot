let handler = async m => m.reply(`
Hai Betherst
[+] IP : 8.215.25.172
[+] Server Info : *NONAKTIF*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['bts_server']
handler.tags = ['betherst']
handler.command = /^(bts_server)$/i

handler.limit = false

module.exports = handler
