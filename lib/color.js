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
* @file color.js - File of colours library for print.

All rights reserved. Copyright © Maazin Ahamed 2023. No part of this Zyronix WhatsApp Multi-Device Bot project may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the copyright holder, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law. For permission requests, contact maazinkingmc@gmail.com

This project is licensed under GPL-3.0 license.

WhatsApp: https://whatsapp.com/channel/0029VaJFtkeEFeXlBhk0CD3I
Github: https://github.com/mznking
YouTube: https://youtube.com/@mznking
*/

const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
