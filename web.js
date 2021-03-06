import express from 'express';
import bodyParser from 'body-parser';
import { init } from "./bot/index.js";
import get from "./bot/commands/get.js";
// import packageInfo from './package.json';


const app = express();
app.use(bodyParser.json());

// app.get('/', function (req, res) {
//   res.json({ version: packageInfo.version });
// });

var server = app.listen(process.env.PORT, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Web server started at http://%s:%s', host, port);
});

export default (bot) => {
  app.post('/' + bot.token, (req, res) => {
    // console.log(0, req.body)
    init(bot)

    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};
