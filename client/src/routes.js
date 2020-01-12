import Main from './components/Main.vue'
import Login from './components/Login.vue'
import ProductsWindow from './components/ProductsWindow.vue'
import OrdersList from './components/OrdersList.vue'

const routes = [
	{ path: '/', component: Main },
	{ path: '/login', component: Login},
	{ path: '/products', component: ProductsWindow},
	{ path: '/orlist', component: OrdersList}
];

export default routes;