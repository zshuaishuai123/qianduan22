import Vue from 'vue'


import app from './App.vue'


let vm = new Vue({
    el:'#app',
    render: c => c(app)
})