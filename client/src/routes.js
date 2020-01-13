import Main from './components/Main.vue'
import Login from './components/Login.vue'
import ProductsList from './components/ProductsList.vue'
import OrdersList from './components/OrdersList.vue'
import Control from './components/Control.vue'
import EditProduct from './components/EditProduct.vue'

const routes = [
	{ path: '/', component: Main },
	{ path: '/login', component: Login},
	{ path: '/products', component: ProductsList},
	{ path: '/orlist', component: OrdersList},
	{ path: '/control', component: Control},
	{ path: '/editprod', component: EditProduct}
];

export default routes;