// import prisma from "./core/prisma";
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient()
const token = process.env.TOKEN;

// const Bot = require('node-telegram-bot-api');
import Bot from 'node-telegram-bot-api';
// const prisma = require("./core/prisma");
let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.on('message', async (msg) => {
  const user = await prisma.user.findFirst({
    where: {
      id: 1
    }
  });
  const name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'Hello, ' + name + '!' + user.first_name).then(() => {
    // reply sent!
  });
});

export default bot;
