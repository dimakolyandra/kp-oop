import Main from './components/Main.vue'
import Login from './components/Login.vue'
import ProductsList from './components/ProductsList.vue'
import OrdersList from './components/OrdersList.vue'

const routes = [
	{ path: '/', component: Main },
	{ path: '/login', component: Login},
	{ path: '/products', component: ProductsList},
	{ path: '/orlist', component: OrdersList}
];

export default routes;