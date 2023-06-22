require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Cross-Origin Resource Sharing handling for sefty
app.use(cors());
//setup morgan
const morgan = require('morgan');
//swagger api documentation
const swagger = require('./swagger')

swagger(app);
// api routes
app.get("/", (req,res)=>{
    return res.status(200).send("Welcome to the RTB Equipment Distribution System")
})
app.use('/users', require('./users/users.controller'));
app.use('/employees', require('./routes/employee.routes'))
// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));