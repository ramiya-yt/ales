const asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

asena.addCommand({pattern: 'btn1', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [
            {buttonId: 'id1', buttonText: {displayText: '⋮☰ 𝐒𝐈𝐍𝐇𝐀𝐋𝐀 𝐌𝐄𝐍𝐔'}, type: 1},
                    {buttonId: 'id2', buttonText: {displayText: '⋮☰ 𝐄𝐍𝐆𝐋𝐈𝐒𝐇 𝐌𝐄𝐍𝐔'}, type: 1}
                          ]
      const buttonMessage = {
                contentText: "Hi it's button message",
                          footerText: 'Hello World',
                                    buttons: buttons,
                                              headerType: 1
                                                    }
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
}));

asena.addCommand({pattern: 'bt2', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [
            {buttonId: 'id1', buttonText: {displayText: '⋮☰ 𝐒𝐈𝐍𝐇𝐀𝐋𝐀 𝐌𝐄𝐍𝐔'}, type: 1},
                    {buttonId: 'id2', buttonText: {displayText: '⋮☰ 𝐄𝐍𝐆𝐋𝐈𝐒𝐇 𝐌𝐄𝐍𝐔'}, type: 1}
                          ]
      const buttonMessage = {
                contentText: "Hi it's button message",
                          footerText: 'Hello World',
                                    buttons: buttons,
                                              headerType: 1,
											  imageMessage: "https://i.imgur.com/99N2b4d.jpeg"
                                                    }
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
}));

asena.addCommand({pattern: 'bt3', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    const buttons = [
            {buttonId: 'id1', buttonText: {displayText: '⋮☰ 𝐒𝐈𝐍𝐇𝐀𝐋𝐀 𝐌𝐄𝐍𝐔'}, type: 1},
                    {buttonId: 'id2', buttonText: {displayText: '⋮☰ 𝐄𝐍𝐆𝐋𝐈𝐒𝐇 𝐌𝐄𝐍𝐔'}, type: 1}
                          ]
      const buttonMessage = {
                contentText: "Hi it's button message",
                          footerText: 'Hello World',
                                    buttons: buttons,
									header: "imageMessage",
									imageMessage: "https://i.imgur.com/99N2b4d.jpeg"
                                              headerType: 1
                                                    }
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
}));
