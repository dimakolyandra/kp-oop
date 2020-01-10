<template>
    <div class="grid-container">
      <div class="grid-item"></div>
      <div class="grid-item"><Button name="Sign Up"></Button></div>
      <div class="grid-item"><Logo></Logo></div>
      <div class="grid-item"><router-link to='/login'><Button name="Sign In"></Button></router-link></div>
      <div class="grid-item"></div>
    </div>
</template>

<script>
import Button from './Button.vue'
import Logo from './Logo.vue'
export default {
  name: 'Main',
  components: {
    Button,
    Logo
  }
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto 10% 15% 10% auto;
  padding: 20% 0 0 0;
}

.grid-item {
  /*border: 1px solid rgba(0, 0, 0, 0.8);*/
  padding: 20px;
  font-size: 30px;
  justify-self: center;
  align-self: center;
}
</style>