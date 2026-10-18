// Client HTTP del tavolo: solo axios (con header AJAX e CSRF via cookie XSRF), senza il resto di bootstrap.js.
import axios from 'axios';

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
