const SECRETS = require('./secrets.js');

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(SECRETS.BOT_KEY);
