const express = require('express');

const router = express.Router();

router.post('/slack.do', (request, response) => {
    console.log(request.body)
    console.log(request.body.time)
    console.log(request.body.offset)
    console.log(request.body.pageSize)
    response.send('It works');
})

module.exports = router;