import dotenv from "dotenv";

dotenv.config();
import bot from './bot/index.js'
// var bot = require('./bot');
import web from './web.js'
web(bot);
