<template>
  <button>
    {{name}}
  </button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		name: String
	}
}
</script>

<style scoped>
button {
  background-color: rgb(246,204,106); /* Green */
  border: none;
  color: rgb(30, 30, 30);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
}
</style>