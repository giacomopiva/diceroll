import './bootstrap';

const log = document.getElementById('log');

window.Echo.channel('test').listen('PingEvent', (e) => {
    const li = document.createElement('li');
    li.textContent = new Date().toLocaleTimeString('it-IT') + ' — ' + e.message;
    log.prepend(li);
});

document.getElementById('send').addEventListener('click', () => {
    window.axios.post('/dev/ping', { message: 'ping da ' + (document.getElementById('who').value || 'anonimo') }, {
        headers: { 'X-Socket-ID': window.Echo.socketId() },
    });
});
