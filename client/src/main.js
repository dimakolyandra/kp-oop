import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
 state: {
     is_authorized: false,
     role: undefined
 }
})

const router = new VueRouter({routes});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');