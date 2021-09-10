const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const ldc = "ssf"

Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
        let regex1 = new RegExp('*SINHALA*')
        let regex2 = new RegExp('*ENGLISH*')

        if (regex1.test(message.message)) {             
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        } 	
        else if (regex2.test(message.message)) {       
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        }
}));
