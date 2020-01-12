<template>
<div>
  <div class="container header">
    <div class="flex-item">
      <img src="../assets/logo.png" width=300%>
    </div>
    <div class="flex-item">
      <span style="background-color: rgb(206,60,60); font-size: 50px; font-family: Avenir Next; font-weight: 700; color: white">Menu</span>
    </div>
    <div class="flex-item">
      <img src="../assets/cash.png" width=60%>
    </div>
    <div class="flex-item">
        <span style="font-size: 20px; font-family: Avenir Next; font-weight: 700; color: rgb(169,143,80)">Сумма: {{ total_cost }}</span>     
    </div>
    <div class="flex-item">
        <span style="background-color: rgb(206,60,60); font-size: 20px; font-family: Avenir Next; font-weight: 700; color: white">Создать заказ</span>     
    </div>
  </div>
  <div class="container-grid">
    <div class="flex-item-icon" v-for="product in data" v-bind:key="product.product_name">
      <ProductIcon @clicked_add="addToOrder" @clicked_rem="removeFromOrder" :product_name="product.product_name" :product_cost="product.product_cost"></ProductIcon>
    </div>
  </div>
</div>
</template>

<script>
  import ProductIcon from './ProductIcon.vue'
  import axios from 'axios'
	export default {
		name: 'ProductsList',
    components: {
      ProductIcon
    },
    props: {
      total_cost: Number,
      order_content: Map
    },
    data: function(){
      return {
        data: []
      }
    },
    methods: {
      addToOrder: function(product_name, product_cost) {
        this.total_cost += product_cost;
        this.order_content[product_name];
        if (!(product_name in this.order_content)){
          this.order_content[product_name] = 0;
        }
        this.order_content[product_name]++;
        var order = "ЗАКАЗ\n";
        for (var key in this.order_content) {
            if (this.order_content.hasOwnProperty(key)) {
                order +=  "Продукт: " + key + " в количестве: " + this.order_content[key] + "\n";
            }
        }
        alert(order); 
      },
      removeFromOrder: function(product_name, product_cost){
        this.total_cost -= product_cost;
        this.order_content[product_name];
        if (!(product_name in this.order_content)){
          this.order_content[product_name] = 0;
        }
        this.order_content[product_name]--;
        var order = "ЗАКАЗ\n";
        for (var key in this.order_content) {
            if (this.order_content.hasOwnProperty(key)) {
                order +=  "Продукт: " + key + " в количестве: " + this.order_content[key] + "\n";
            }
        }
        alert(order);         
      },
      getProducts: function(){
        axios.get(`http://localhost:8081/product`)
        .then(response => {
          this.data = response.data;
        }).catch(e => {this.errors.push(e)})
      }
    },
    created() {
      this.total_cost = 0;
      this.order_content = {};
      this.getProducts();
    }
  }
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.container-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.flex-item {
  flex: 0.5;
}
.flex-item:nth-of-type(5) {
  margin-top:5%;
}
.flex-item:nth-of-type(4) {
  margin-top:5%;
}
.flex-item:nth-of-type(3) {
  margin-top:5%;
  margin-left:50%;
}
.flex-item:nth-of-type(2) {
  margin-top:5%;
  margin-left:10%;
}
.flex-item:nth-of-type(1) {
  flex: 0.1;
  margin-top:5%;
  margin-left: 5%;
}
.container-col {
  display:flex;
  flex-direction: column;
}
.flex-item-icon {
  flex: 1;
  margin-left: 5%;
  padding: 5px;
}
.icon {
  background-color: rgb(169,143,80);
  height: 250px;
  width: 300px;
  text-align: center;
}
</style>