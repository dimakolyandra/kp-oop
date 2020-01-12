import Main from './components/Main.vue'
import Login from './components/Login.vue'
import OrdersList from './components/OrdersList.vue'
import Control from './components/Control.vue'

const routes = [
	{ path: '/', component: Main },
	{ path: '/login', component: Login},
	{ path: '/orlist', component: OrdersList},
	{ path: '/control', component: Control}
];

export default routes;