/** npm install request and request-promise */
const Request = require('request-promise');
/** Cron */
const cron = require('node-cron');

/** External service stack **/
var options = {
    method: 'GET',
    uri: 'https://wirewebhook.herokuapp.com/live.do'
};

const startcron = () => {
    cron.schedule("* */1 * * *", function() {
        console.log("call url :: [%s]", options.uri)
        Request(options)
        .then(function (body){
            console.log(body)
        })
        .catch(function (err) {
            console.log(err);
        })
    });        
    
};

exports.startcron = startcron;