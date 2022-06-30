const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const userController = require('./controller/user.controller')
const parkingController = require('./controller/parking.controller')


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
/*Gets*/
app.get('/api/users', (req, res) => {
    userController.getUsers().then(data => res.json(data));
});

app.get('/api/parkings', (req, res) => {
    parkingController.getParking().then(data => res.json(data));
});
/*Posts*/
app.post('/api/task', (req, res) => {
    console.log(req.body);
    userController.createUser(req.body.user).then(data => res.json(data));
});

app.put('/api/task', (req, res) => {
    userController.updateUser(req.body.user).then(data => res.json(data));
});
/*Delete*/
app.delete('/api/task/:id', (req, res) => {
    userController.deleteUser(req.params.id).then(data => res.json(data));
});
app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})