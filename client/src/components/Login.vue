<template>
	<div class="grid-container">
		<div class="grid-item"></div>
		<div class="grid-item"></div>
		<div class="grid-item"><img src="../assets/rice.png" width=100%></div>
		<div class="grid-item"></div>
		<div class="grid-item"></div>

		<div class="grid-item"></div>
		<div class="grid-item"><font class='text'>Login</font></div>
		<div class="grid-item"><InputField name='Enter Login'/></div>
		<div class="grid-item"></div>
		<div class="grid-item"></div>
		
		<div class="grid-item"></div>
		<div class="grid-item"><font class='text'>Password</font></div>
		<div class="grid-item"><InputField name='Enter Password'/></div>
		<div class="grid-item"></div>
		<div class="grid-item"></div>

		<div class="grid-item"></div>
		<div class="grid-item"></div>
		<div class="grid-item"><Button name="Sign In"></Button></div>
		<div class="grid-item"></div>
		<div class="grid-item"></div>
	</div>
</template>

<script>
	import InputField from './Input.vue'
	import Button from './Button.vue'
	export default {
		name: 'Login',
		components: {
			InputField,
			Button
		}
	}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto 10% 15% 10% auto;
  grid-template-rows: auto auto auto auto;
  padding: 20% 0 0 0;
}

.grid-item {
  /*border: 1px solid rgba(0, 0, 0, 0.8);*/
  padding: 20px;
  font-size: 30px;
  justify-self: center;
  align-self: center;
}

.text {
	color: rgb(130,130,130);
	font-style: normal;
	font-family: Avenir Next;
	font-weight: 700;
}
</style>