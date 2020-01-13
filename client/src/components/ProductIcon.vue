<template>
<div class='flex-item'>
  <div class='icon'>
    <div class='flex-item-product'>
      <span style="font-size: 20px; font-family: Avenir Next; font-weight: 700; color: rgb(30, 30, 30)">Название продукта: {{product_name}}</span>
    </div>
    <div class='flex-item-product'>
      <span style="font-size: 20px; font-family: Avenir Next; font-weight: 700; color: rgb(30, 30, 30)">Цена продукта: {{product_cost}}</span>
    </div>
    <div class='flex-item-product'>
      <span style="font-size: 20px; font-family: Avenir Next; font-weight: 700; color: rgb(30, 30, 30)">Количество товаров: {{product_count}}</span>
    </div>
    <div class='flex-item-product' @click="addToOrder()">
      <span style="background-color: rgb(206,60,60); font-size: 20px; font-family: Avenir Next; font-weight: 700; color: rgb(30, 30, 30)">Add</span>
    </div>
    <div class='flex-item-product' @click="removeFromOrder()">
      <span style="background-color: rgb(206,60,60); font-size: 20px; font-family: Avenir Next; font-weight: 700; color: rgb(30, 30, 30)">Remove</span>
    </div>
  </div>
</div>  
</template>


<script>
  export default {
    name: 'ProductIcon',
    props: {
      product_name: String,
      product_cost: Number,
      product_count: Number,
    },
    methods: {
      addToOrder: function() {
        this.$emit('clicked_add', this.product_name, this.product_cost, this.product_count);
      },
      removeFromOrder: function() {
        this.$emit('clicked_rem', this.product_name, this.product_cost);
      }
    }
  }
</script>

<style type="text/css">
.flex-item-product:nth-of-type(3){
  margin-top:20%;
  margin-left:3%; 
}
.flex-item-product:nth-of-type(4){
  margin-top:5%;
  margin-left:5%; 
}

.flex-item {
  flex: 0.5;
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
.icon {
  background-color: rgb(169,143,80);
  height: 250px;
  width: 300px;
  text-align: center;
}
</style>