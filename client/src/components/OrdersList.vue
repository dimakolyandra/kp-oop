<template>
<div v-if="this.$store.state.is_authorized && this.$store.state.role === 'A'">
	<div class="container">
		<div class="flex-item">
			<img src="../assets/logo.png" width=100%>
		</div>
		<div class="flex-item">
			<div class="header">
				<span>Orders list</span>
			</div>
		</div>
	</div>
	<div class="container-col">
		<div class="flex-item-icon" v-for="order in data" v-bind:key="order"><OrderIcon @clicked="removeOrder" :id="order.order_id" :name="order.order_items"></OrderIcon></div>
	</div>
</div>
<div v-else>
  <h1>Unauthorized!</h1>
</div>
</template>

<script>
	import OrderIcon from './OrderIcon.vue'
	import axios from 'axios'
	export default {
		name: 'OrdersList',
		components: {
			OrderIcon
		},
		data: function(){
			return {
				data: []
			}
		},
		methods: {
			addOrder: function(order_content) {
				axios.post(`http://localhost:8081/order_items_add`, {
					order_items: order_content
				}).then(response => {
					this.data = response.data;
				}).catch(e => {this.errors.push(e)})
			},
			removeOrder: function(id) {
				axios.post(`http://localhost:8081/order_items_delete`, {
					order_id: id
				}).then(response => {
					this.data = response.data;
				}).catch(e => {this.errors.push(e)})
			}

		},
		created() {
			axios.post(`http://localhost:8081/order_items_delete_all`)
			this.addOrder('карошка огурцы томат');
			this.addOrder('перец лук петрушка');
			this.addOrder('укроп селедка под шубой');
			this.addOrder('где мой гамбургер');
			this.addOrder('хто я');
			this.addOrder('укроп селедка под шубой');
		}
	}
</script>


<style scoped>
.header {
	background-color: rgb(206,60,60);
	font-size: 50px;
	font-family: Avenir Next;
	font-weight: 700;
	color: white;
	height: 70px;
	width: 300px;
	text-align: center;
	border-radius: 4px;
}
.container {
  display: flex;
  flex-direction: row
}
.flex-item {
	flex: 1;
}
.flex-item:nth-of-type(2) {
	margin-top:14%;
	margin-left:2%;
}
.flex-item:nth-of-type(1) {
	flex: 0.1;
	margin-top:10%;
	margin-left: 10%;
}
.container-col {
	display:flex;
	flex-direction: column;
}
.flex-item-icon {
	flex: 1;
	margin-left: 30%;
	padding: 5px;
}
</style>




