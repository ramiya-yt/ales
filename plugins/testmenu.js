const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;
const varsx = "*: 💛 Sinhala :*"
const varsy = "*: 🤍 English :*"

var sin_var = ''
async function sinkey() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        sin_var = vars.SIN_KEY
    });
}
sinkey()
const ldc = "sin text"
Asena.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
        let regex1 = new RegExp(varsx)
        let regex2 = new RegExp(varsy)
        
        if (regex1.test(message.message)) {             
            await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
        } 	
        else if (regex2.test(message.message)) {       
            await message.client.sendMessage(message.jid,sin_var, MessageType.text, {quoted: message.data })
        }
}));
