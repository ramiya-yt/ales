const Amazone = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('amazone');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
let tk = Config.WORKTYPE == 'public' ? false : true

// 🦹‍♂️  🕊  විධාන
//  🦹‍♂️ D විධාන 🕊 
// "⚙සම්පූර්ණ විධාන ලැයිස්තුව.\n\n\nසම්පූර්ණ විධාන ලැයිස්තුව ලබා ගැනීමට (.alexa) බාවිතා කරන්න"
const msg = "══════════════════\n      💠-ʀᴀᴍɪʏᴀ ʙᴏᴛ ᴠ6-💠\n*♡ＣＯＭＭＡＮＤ ＬＩＳＴ♡*\n══════════════════\n\n🦹‍♂️ RAMIYA Bot විධාන ලබා ගැනීමට පහත *Click Me* ඔබා අදාල විධාන Menu ඒක Select කර Send කරන්න. 🕊️"
const row1 = "1"
const row2 = "2"
const row3 = "1"
const row4 = "2"
const row5 = "1"
const row6 = "2"
const row7 = "1"
const row8 = "2"
const row9 = "1"
const row10 = "2"

Amazone.addCommand({pattern: 'testm1', fromMe: tk, desc: Lang.MENU}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '🦹‍♂️ Download විධාන 🕊', description: row1, rowId:"rowid1"},
		{title: '🦹‍♂️ පරිවර්තන විධාන 🕊', description: row2, rowId:"rowid2"},
        {title: '🦹‍♂️ Logo හා IMG විධාන 🕊', description: row3, rowId:"rowid3"},
        {title: '🦹‍♂️ තොරතුරු විධාන 🕊', description: row4, rowId:"rowid4"},
        {title: '🦹‍♂️ මීම් විධාන 🕊', description: row5, rowId:"rowid5"},
        {title: '🦹‍♂️ ඇනිම් විධාන 🕊', description: row6, rowId:"rowid6"},
        {title: '🦹‍♂️ TTP විධාන 🕊', description: row7, rowId:"rowid7"},
        {title: '🦹‍♂️ PDF පොත් විධාන 🕊', description: row8, rowId:"rowid8"},
        {title: '🦹‍♂️ APK විධාන 🕊', description: row9, rowId:"rowid9"},
        {title: '🦹‍♂️ සම්පූර්ණ විධාන  ඔක්කොම 🕊', description: row10, rowId:"rowid10"}
       ]
       
       const sections = [{title: "RamiYa BOT Command Panel", rows: rows}]
       
       const button = {
        buttonText: 'Click Me',
        description: msg,
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
