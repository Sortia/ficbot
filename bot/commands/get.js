function get(bot) {
    bot.onText(/\/get/, (msg) => {
        bot.sendMessage(msg.chat.id, msg.chat.id);
    });
}

export default get
