const app = require('./app');

const server = app.listen(8000, function(){
    console.log(`Express is running on port ${server.address().port}`);
}); // I used port 8000 instead of 3000 because the latter is not working