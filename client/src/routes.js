import Main from './components/Main.vue'
import Login from './components/Login.vue'
import OrdersList from './components/OrdersList.vue'
import Control from './components/Control.vue'
import EditProduct from './components/EditProduct.vue'

const routes = [
	{ path: '/', component: Main },
	{ path: '/login', component: Login},
	{ path: '/orlist', component: OrdersList},
	{ path: '/control', component: Control},
	{ path: '/editprod', component: EditProduct}
];

export default routes;