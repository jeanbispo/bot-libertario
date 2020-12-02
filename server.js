const Twit = require('twit');
require('dotenv').config();

const Bot = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
});

function BotInit() {

  var stream = Bot.stream('statuses/filter', { track: 'imposto'});
  
    stream.on('tweet', tweet => {
        var reply = 'Imposto é roubo';
        var nameID = tweet.id_str;
        var name = tweet.user.screen_name;
        if(name != 'botimposto') Bot.post('statuses/update', {in_reply_to_status_id: nameID, status: reply + ' @' + name}, () => null);
    });

}

BotInit();