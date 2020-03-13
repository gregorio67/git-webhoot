/** npm install express **/
const express = require('express');
/** npm install request and request-promise */
const Request = require('request-promise');

const router = express.Router();

const URI = 'http://192.168.219.108:7070/userTask.do'
router.post('/slack.do', (request, response) => {
    console.log(request.body)
    console.log(request.body.time)
    console.log(request.body.offset)
    console.log(request.body.pageSize)

    /** External service stack **/
    var options = {
        method: 'POST',
        uri: URI,
        body : request.body,
        json: true,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    /** Call external service **/
    Request(options)
        .then(function (body){
            console.log(body)
            response.status(200).json(body);
        })
        .catch(function (err) {
            console.log(err);
        })
})

router.get('/', (request, response) => {
    var message = 'Welcome to wire webhook !!!'
    response.status(200).send(message);
});

module.exports = router;