const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
/*Se invocan todos los controladores*/
const userController = require('./controller/user.controller');
const parkingController = require('./controller/parking.controller');
const def_forma_pagoController = require('./controller/def_forma_pago.controller');
const mov_asignar_lugar_posicionController = require('./controller/mov_asignar_lugar_posicion.controller');
const clienteController = require('./controller/cliente.controller');
const vehiculoController =require('./controller/vehiculo.controller');
const tipoVehiculoController =require('./controller/tipoVehiculo.controller');

const app = express();
const port = process.env.PORT || 3000;
//Se especifica a la app para que haga el parse del body del request a json
app.use(bodyParser.json());
/*Gets*/
//Get users
app.get('/api/users', (req, res) => {
    userController.getUsers().then(data => res.json(data));
});
//Get Parking
app.get('/api/parkings', (req, res) => {
    parkingController.getParking().then(data => res.json(data));
});
//Get def_forma_pago
app.get('/api/formaPago', (req, res) => {
    def_forma_pagoController.getDef_forma_pago().then(data => res.json(data));
});
// get de asignacion de lugares
app.get('/api/lugar', (req, res) => {
    mov_asignar_lugar_posicionController.getMov_asignar_lugar_posicion().then(data => res.json(data));
});
// get de asignacion de clientes
app.get('/api/cliente', (req, res) => {
    clienteController.getCliente().then(data => res.json(data));
});
// get de vehiculo
app.get('/api/vehiculo', (req, res) => {
    vehiculoController.getVehiculo().then(data => res.json(data));
});
// get de tipo de vehiculo
app.get('/api/tipoVehiculo', (req, res) => {
    tipoVehiculoController.getTipoVehiculo().then(data => res.json(data));
});
/*Creates*/
//create user
app.post('/api/user', (req, res) => {
    console.log(req.body);
    userController.createUser(req.body.user).then(data => res.json(data));
});
//create parking
app.post('/api/parking', (req, res) => {
    console.log(req.body);
    parkingController.createParking(req.body.parking).then(data => res.json(data));
});
//create lugares
app.post('/api/lugar', (req, res) => {
    console.log(req.body);
    mov_asignar_lugar_posicionController.createMov_asignar_lugar_posicion(req.body.mov_asignar_lugar_posicion).then(data => res.json(data));
});
//create cliente
app.post('/api/cliente', (req, res) => {
    console.log(req.body);
    clienteController.createCliente(req.body.cliente).then(data => res.json(data));
});
//create vehiculo
app.post('/api/vehiculo', (req, res) => {
    console.log(req.body);
    vehiculoController.createVehiculo(req.body.vehiculo).then(data => res.json(data));
});
/*Updates*/
//update user
app.put('/api/user', (req, res) => {
    userController.updateUser(req.body.user).then(data => res.json(data));
});
//update parking
app.put('/api/parking', (req, res) => {
    parkingController.updateParking(req.body.parking).then(data => res.json(data));
});
//update lugares
app.put('/api/lugar', (req, res) => {
    mov_asignar_lugar_posicionController.updateMov_asignar_lugar_posicion(req.body.mov_asignar_lugar_posicion).then(data => res.json(data));
});
//update cliente
app.put('/api/cliente', (req, res) => {
    clienteController.updateCliente(req.body.cliente).then(data => res.json(data));
});

//update vehiculo
app.put('/api/vehiculo', (req, res) => {
    vehiculoController.updateVehiculo(req.body.vehiculo).then(data => res.json(data));
});
/*Delete*/
//delete user
app.delete('/api/user/:id', (req, res) => {
    userController.deleteUser(req.params.id).then(data => res.json(data));
});
//delete parking
app.delete('/api/parking/:id', (req, res) => {
    parkingController.deleteParking(req.params.id).then(data => res.json(data));
});
//delete lugar
app.delete('/api/lugar/:id', (req, res) => {
    mov_asignar_lugar_posicionController.deleteMov_asignar_lugar_posicion(req.params.id).then(data => res.json(data));
});
//delete cliente
app.delete('/api/cliente/:id', (req, res) => {
    clienteController.deleteCliente(req.params.id).then(data => res.json(data));
});
//delete vehiculo
app.delete('/api/vehiculo/:id', (req, res) => {
    vehiculoController.deleteVehiculo(req.params.id).then(data => res.json(data));
});
/*Se configura la app para que escuche en el puerto definido*/
app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})