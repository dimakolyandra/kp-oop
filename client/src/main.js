import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false

// postgres://postgres:postgresd@db/postgres

new Vue({
	data: {
		show_button: true
	},
	render: h => h(App),
}).$mount('#app')
