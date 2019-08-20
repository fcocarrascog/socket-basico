const { io } = require('../server')

io.on('connection', (cliente) => {
    console.log('Usuario conectado');

    cliente.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    cliente.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // ESCUCHAR EL CLIENTE
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //EMITE DATA A TODOS LOS USUARIOS CONECTADOS
        cliente.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         mensaje: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         mensaje: 'Todo salió mal'
        //     });
        // }
    });
});