<template>
    <div class='container' v-if="this.$store.state.is_authorized && this.$store.state.role === 'A'">
        <div class='flex-item'>
            <div class='icon'>
                <div class='container'>
                <div class='flex-text'>
                <span style="font-size: 30px; font-family: Avenir Next; font-weight: 700; color: rgb(30, 30, 30)">
                {{product.product_name}}
                </span>
                </div>
                </div>
            </div>
        </div>
        <div class='flex-item'>
            <div class='container-row'>
                <div class='flex-item-1'><font class='text'>QUANTITY</font></div>
                <div class='flex-item-1'><input class='input-style' v-model="product.product_count" type='text'/></div>
            </div>
        </div>
        <div class='flex-item'>
            <div class='container-row'>
                <div class='flex-item-1'><font class='text'>COST</font></div>
                <div class='flex-item-1'><input class='input-style' v-model="product.product_cost" type='text'/></div>
        </div>
        <div class='flex-item'>
            <div class='container-row'>
                <div class='flex-item-1'><div class="accept"><font>Accept</font></div></div>
                <div class='flex-item-1'><div class="cancel"><font>Cancel</font></div></div>
            </div>
        </div>
        </div>
    </div>
    <div v-else>
        <h1>Unauthorized!</h1>
    </div>
</template>

<script>
    export default {
        name: "EditProduct",
        created() {
            this.product = this.$route.query.name;
        }
    }
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.container-row {
    display: flex;
    flex-direction: row;
}
.flex-item-1 {
    flex:0.1;
}
.flex-item-1:nth-of-type(2) {
    margin-left:5%;
}
.flex-item {
    flex: 0.1;
    margin-top: 12%;
    margin-left: 35%;
}
.flex-item:nth-of-type(2) {
    margin-top:5%;
    margin-left:35%;
}
.flex-item:nth-of-type(3) {
    margin-top:1%;
    margin-left:35%;
}
.flex-item:nth-of-type(4) {
    margin-top:10%;
    margin-left:10%;
}
.flex-text {
    flex: 0.1;
    margin-top:40%;
}
.icon {
    background-color: rgb(169,143,80);
    height: 400px;
    width: 400px;
    text-align: center;
    border-radius: 4px;
}
.text {
    border: 4px solid rgb(90, 88, 85);
    color: rgb(130,130,130);
    font-style: normal;
    font-family: Avenir Next;
    font-weight: 600;
    font-size: 40px;
    background:none;
}
.input-style {
    color: rgb(130,130,130);
    font-style: normal;
    font-family: Avenir Next;
    font-weight: 600;
    font-size: 40px;
    background:none;
}
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


</style>