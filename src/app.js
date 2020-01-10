import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'

Vue.component('h-button', Button)
Vue.component('h-icon', Icon)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false
    }
})