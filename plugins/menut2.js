const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const ldc = "ssf"

Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
        let regex1 = new RegExp('tmna')
        let regex2 = new RegExp('⋮☰ 𝐒𝐈𝐍𝐇𝐀𝐋𝐀 𝐌𝐄𝐍𝐔')
        let regex3 = new RegExp('⋮☰ 𝐄𝐍𝐆𝐋𝐈𝐒𝐇 𝐌𝐄𝐍𝐔')

        if (regex1.test(message.message)) {             
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        } 	
        else if (regex2.test(message.message)) {       
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
        else if (regex3.test(message.message)) {       
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
