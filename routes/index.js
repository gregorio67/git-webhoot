const express = require('express');
const Request = require('request-promise');

const router = express.Router();

const URI = 'http://127.0.0.1:7070/userTask.do'
router.post('/slack.do', (request, response) => {
    console.log(request.body)
    console.log(request.body.time)
    console.log(request.body.offset)
    console.log(request.body.pageSize)

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

module.exports = router;