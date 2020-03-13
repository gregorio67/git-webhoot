/** npm install express **/
const express = require('express');
/** npm install request and request-promise */
const Request = require('request-promise');

const router = express.Router();

const SLACK_URI = 'https://hooks.slack.com/services/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'

router.post('/message.do', (request, response) => {
    console.log(request.message)

    /** External service stack **/
    var options = {
        method: 'POST',
        uri: SLACK_URI,
        body : JSON.stringify(JSON.stringify()),
        json: true,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    /** Call external service **/
    console.info("Send message : [%s]", options.body);

    Request(options)
        .then(function (body){
            console.info(body)
            response.render('message'); 
        })
        .catch(function (err) {
            console.error(err);
            response.render('message'); 
        })
})


module.exports = router;

