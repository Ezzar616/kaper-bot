let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Tri [089509083794]
│ • Gopay  [087853163532]
│ • Dana  [087855032553]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6287853163532
│ _Hasil donasi akan digunakan buat sewa_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
