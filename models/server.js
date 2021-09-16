const express = require('express');
const cors = require('cors');
const data = require('../data/data..json');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares() {

        this.app.use(cors());

        this.app.use(express.static('public'));
    }

    routes() {

        this.app.get('/api', function(req, res) {
            res.json(data);
        })

        this.app.put('/api', function(req, res) {
            res.json({
                msg: 'put API'
            });
        })

        this.app.post('/api', function(req, res) {
            res.json({
                msg: 'post API'
            });
        })

        this.app.delete('/api', function(req, res) {
            res.json({
                msg: 'delete API'
            });
        })

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en pueto', this.port);

        })
    }
}

module.exports = Server;