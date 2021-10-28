import dotenv from "dotenv";

dotenv.config();
import bot from './bot.js'
// var bot = require('./bot');
import web from './web.js'
web(bot);
