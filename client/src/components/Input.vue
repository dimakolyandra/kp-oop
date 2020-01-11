<template>	
<div class="wrapper">
  <form>
    <div class="group">
      <input type="text" required="required" v-model="value" @keyup="$emit('update', value);"/>
      <span class="highlight"></span><span class="bar"></span>
      <label>{{name}}</label>
    </div>
  </form>
</div>
</template>

<script>
	export default {
		name: "InputField",
		props: {
			name: String,
      value: String
		}
	}
</script>

<style scoped>
*,
:before,
:after {
  box-sizing: border-box;
}

body {
  background: #424242;
}

form {
  width: 320px;
  margin: 45px auto;
}
form hr.sep {
  background: #2196F3;
  box-shadow: none;
  border: none;
  height: 2px;
  width: 25%;
  margin: 0px auto 45px auto;
}
form .emoji {
  font-size: 1.2em;
}

.group {
  position: relative;
  margin: 45px 0;
}

textarea {
  resize: none;
}

input,
textarea {
  background: none;
  color: #c6c6c6;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 250px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #c6c6c6;
  margin-left: 10%
}
input:focus,
textarea:focus {
  outline: none;
}
input:focus ~ label, input:valid ~ label,
textarea:focus ~ label,
textarea:valid ~ label {
  top: -14px;
  font-size: 12px;
  color: #2196F3;
}
input:focus ~ .bar:before,
textarea:focus ~ .bar:before {
  width: 320px;
}

input[type="password"] {
  letter-spacing: 0.3em;
}

label {
  color: #c6c6c6;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  margin-left: 10%;
}


</style>