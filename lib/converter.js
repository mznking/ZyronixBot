/* 
╭━━━━┳╮╱╱╭┳━━━┳━━━┳━╮╱╭┳━━┳━╮╭━╮
╰━━╮━┃╰╮╭╯┃╭━╮┃╭━╮┃┃╰╮┃┣┫┣┻╮╰╯╭╯
╱╱╭╯╭┻╮╰╯╭┫╰━╯┃┃╱┃┃╭╮╰╯┃┃┃╱╰╮╭╯
╱╭╯╭╯╱╰╮╭╯┃╭╮╭┫┃╱┃┃┃╰╮┃┃┃┃╱╭╯╰╮
╭╯━╰━╮╱┃┃╱┃┃┃╰┫╰━╯┃┃╱┃┃┣┫┣┳╯╭╮╰╮
╰━━━━╯╱╰╯╱╰╯╰━┻━━━┻╯╱╰━┻━━┻━╯╰━╯

* @project_name Zyronix Bot [WA Multi-device]
* @author MzN KinG <https://github.com/mznking>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/mznking/ZyronixBot>
* @version 1.0.0
* @file converter.js - Convert media file to another media file. (e.g.: Video to audio)

All rights reserved. Copyright © Maazin Ahamed 2023. No part of this Zyronix WhatsApp Multi-Device Bot project may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the copyright holder, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law. For permission requests, contact maazinkingmc@gmail.com

This project is licensed under GPL-3.0 license.

WhatsApp: https://whatsapp.com/channel/0029VaJFtkeEFeXlBhk0CD3I
Github: https://github.com/mznking
YouTube: https://youtube.com/@mznking
*/

const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
  return new Promise(async (resolve, reject) => {
    try {
      let tmp = path.join(__dirname, '../src', + new Date + '.' + ext)
      let out = tmp + '.' + ext2
      await fs.promises.writeFile(tmp, buffer)
      spawn('ffmpeg', [
        '-y',
        '-i', tmp,
        ...args,
        out
      ])
        .on('error', reject)
        .on('close', async (code) => {
          try {
            await fs.promises.unlink(tmp)
            if (code !== 0) return reject(code)
            resolve(await fs.promises.readFile(out))
            await fs.promises.unlink(out)
          } catch (e) {
            reject(e)
          }
        })
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * Convert Audio to Playable WhatsApp Audio
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toAudio(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-ac', '2',
    '-b:a', '128k',
    '-ar', '44100',
    '-f', 'mp3'
  ], ext, 'mp3')
}

/**
 * Convert Audio to Playable WhatsApp PTT
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toPTT(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-c:a', 'libopus',
    '-b:a', '128k',
    '-vbr', 'on',
    '-compression_level', '10'
  ], ext, 'opus')
}

/**
 * Convert Audio to Playable WhatsApp Video
 * @param {Buffer} buffer Video Buffer
 * @param {String} ext File Extension 
 */
function toVideo(buffer, ext) {
  return ffmpeg(buffer, [
    '-c:v', 'libx264',
    '-c:a', 'aac',
    '-ab', '128k',
    '-ar', '44100',
    '-crf', '32',
    '-preset', 'slow'
  ], ext, 'mp4')
}

module.exports = {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
}
