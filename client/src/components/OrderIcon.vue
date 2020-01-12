<template>
	<div class="container">
		<div class='flex-item'>
			<div class='icon'>
				<div><span style="font-size: 30px; font-family: Avenir Next; font-weight: 700; color: rgb(30, 30, 30)">{{id}}</span></div>
				<div><span style="font-size: 20px; font-family: Avenir Next; font-weight: 700; color: rgb(30, 30, 30)">{{name}}</span></div>
			</div>
		</div>
		<div class='flex-item'>
			<div class='container-col'>
				<div class='flex-item-icon' @click="returnId()">
					<div class="accept"><span>Accept</span></div>
				</div>
				<div class='flex-item-icon' @click="returnId()">
					<div class="cancel">
						<span>Cancel</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "OrderIcon",
		props: {
			id: Number,
			name: String
		},
		methods: {
			returnId: function() {
				this.$emit('clicked', this.id);
			}
		}
	}
</script>

<style scoped>
.accept {
	background-color: rgb(149,188,106);
	font-size: 20px; 
	font-family: Avenir Next;
	font-weight: 700;
	color: white;
	height: 30px;
	width: 100px;
	text-align: center;
	border-radius: 4px;
}
.cancel {
	background-color: rgb(206,60,60);;
	font-size: 20px; 
	font-family: Avenir Next;
	font-weight: 700;
	color: white;
	height: 30px;
	width: 100px;
	text-align: center;
	border-radius: 4px;
}
.icon {
	background-color: rgb(169,143,80);
	height: 150px;
	width: 300px;
	text-align: center;
	border-radius: 4px;
}
.container {
  display: flex;
  flex-direction: row
}
.flex-item {
	flex: 0.1;
}
.flex-item:nth-of-type(2) {
	margin-left:2%;
}

.container-col {
	display: flex;
	flex-direction: column;
}
.flex-item-icon {
	margin-top:25%;
	flex: 1;
	padding: 5px;
}

</style>