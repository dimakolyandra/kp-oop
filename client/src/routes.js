import Main from './components/Main.vue'
import Login from './components/Login.vue'
import ProductsWindow from './components/ProductsWindow.vue'


const routes = [
	{ path: '/', component: Main },
	{ path: '/login', component: Login},
	{ path: '/products', component: ProductsWindow}
];

export default routes;