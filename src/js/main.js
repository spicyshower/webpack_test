import './reactApp.jsx';
import my from './my.js';
import '../scss/style.scss';

import Vue from 'vue';
import VueApp from './VueApp.vue';

import add from './add.ts';

new Vue({
    el: '#vue-root',
    render: (h) => h(VueApp),
});

// console.log(add(3,9));
console.log('webpack');
my();
