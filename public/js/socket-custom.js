var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// LOS ON, SON PARA ESCUCHAR
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});


// LOS EMIT SON PARA ENVIAR INFORMACION
socket.emit('enviarMensaje', {
    usuario: 'Francisco',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});

// ESCUCHAR INFORMACION
socket.on('enviarMensaje', function(respuesta) {
    console.log('Servidor: ', respuesta);
});