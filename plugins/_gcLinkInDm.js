export async function all(m) {

  if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('join')) && !m.isBaileys && !m.isGroup) {
   this.sendMessage(m.chat,{text:`👋 Hey @${m.sender.split('@')[0]}, Would you want to add bot to your group?\nContact bot owner by use *.owner* command.\n\n*© ＺＹＲＯＮＩＸ - ＭＤ  |  ２０２４*`.trim()}, {quoted:m});
   m.react('📌')
} 

 return !0
}
