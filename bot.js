const discord = require('discord.js')
const bot = new discord.Client
bot.login(process.env.username, process.env.pass)
