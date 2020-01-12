<template>
<div>
	<div class="container">
		<div class="flex-item">
			<img src="../assets/logo.png" width=100%>
		</div>
		<div class="flex-item">
			<span style="background-color: rgb(206,60,60); font-size: 50px; font-family: Avenir Next; font-weight: 700; color: white">Orders list</span>
		</div>
	</div>
	<div class="container-col">
		<div class="flex-item-icon" v-for="order in data" v-bind:key="order"><OrderIcon :id="order.order_id" :name="order.order_items"></OrderIcon></div>
	</div>
</div>
</template>

<script>
	import OrderIcon from './OrderIcon.vue'
	export default {
		name: 'OrdersList',
		components: {
			OrderIcon
		},
		data: function(){
			return {
				data: [ 
					{ 
						"order_id": 5, 
						"order_items": "10 огурцов; 12 помидоров" 
					}, 
					{ 
						"order_id": 6, 
						"order_items": "10 огурцов; 12 помидоров" 
					}, 
					{ 
						"order_id": 7, 
						"order_items": "10 огурцов; 12 помидоров" 
					} 
					]
			}
		}
	}
</script>


<style scoped>
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




