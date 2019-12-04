import particlesJS from 'particles.js';
import config from './config.json';

particlesJS.load('particles-js', config, function() {
  console.log('callback - particles.js config loaded');
});