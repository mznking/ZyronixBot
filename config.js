/* 
╭━━━━┳╮╱╱╭┳━━━┳━━━┳━╮╱╭┳━━┳━╮╭━╮
╰━━╮━┃╰╮╭╯┃╭━╮┃╭━╮┃┃╰╮┃┣┫┣┻╮╰╯╭╯
╱╱╭╯╭┻╮╰╯╭┫╰━╯┃┃╱┃┃╭╮╰╯┃┃┃╱╰╮╭╯
╱╭╯╭╯╱╰╮╭╯┃╭╮╭┫┃╱┃┃┃╰╮┃┃┃┃╱╭╯╰╮
╭╯━╰━╮╱┃┃╱┃┃┃╰┫╰━╯┃┃╱┃┃┣┫┣┳╯╭╮╰╮
╰━━━━╯╱╰╯╱╰╯╰━┻━━━┻╯╱╰━┻━━┻━╯╰━╯

All rights reserved. Copyright © Maazin Ahamed 2023. No part of this Zyronix WhatsApp Multi-Device Bot project may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the copyright holder, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law. For permission requests, contact maazinkingmc@gmail.com

This project is licensed under GPL-3.0 license.

WhatsApp: https://whatsapp.com/channel/0029VaJFtkeEFeXlBhk0CD3I
Github: https://github.com/mznking
YouTube: https://youtube.com/@mznking
*/


import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

/*
          ⚡ BOT INFO ⚡
*/

global.owner = [
  ['94789481495', 'Maazin', true],
]
global.pairingNumber = "94771227821"
global.mods = ['94789481495']
global.allowed = ['94771227821', '94771227821', '94771227821']

/*
          ⚡ WATERMARK ⚡
*/

global.botname = '𝗭𝘆𝗿𝗼𝗻𝗶𝘅 𝗕𝗼𝘁 𝗠𝗗'
global.packname = '𝗭𝗬𝗥𝗢𝗡𝗜𝗫-𝗠𝗗' 
global.author = 'mznking' 
global.menuvid = 'https://telegra.ph/file/085c4b1068f0f4f8db970.mp4'
global.igfg = '⚡ Follow me on instagram: https://instagram.com/@mznking' 
global.dygp = 'https://whatsapp.com/channel/0029VaJFtkeEFeXlBhk0CD3I'
global.fgsc = 'https://github.com/mznking/ZyronixBot' 
global.fgyt = 'https://youtube.com/@mznking'
global.fgpyp = 'https://youtube.com/@mznking'
global.fglog = 'https://raw.githubusercontent.com/mznking/api/ZyronixBot/ZyronixBot.jpg' 
global.thumb = fs.readFileSync('./Assets/ZyronixBotlogo.jpg')

/*
          ⚡ REPLY & REACTIONS ⚡
*/
global.wait = '*♻️ *Processing your request, Please wait a while...*'
global.imgs = '*🖼️ *Uploading your images, Please wait a while...*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 

global.multiplier = 69 
global.maxwarn = '2'

/*
          ⚡ APIs & API KEYS ⚡
*/

global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { 
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { 
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
