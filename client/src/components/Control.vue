<template>
    <div v-if="this.$store.state.is_authorized && this.$store.state.role === 'A'">
        <div class='container'>
            <div class='flex-item'>
                <input v-model="product_name" class='search' type='text' placeholder=" Search"/>
            </div>
        </div>

        <div class='container'>
            <div class='flex-item-buttons'>
                <div class="go_search" @click="product_req()"><span>Search</span></div>
            </div>
        </div>
    </div>
    <div v-else>
        <h1>Unauthorized!</h1>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Control",
        data: function() {
            return {
                product_name: '',
                product_info: {}
            }
        },
        methods: {

            product_req: function() {
                axios.get(`http://localhost:8081/find_product?name=` + this.product_name)
                .then(response => {
                    this.product_info = response.data
                    this.$router.push({ path: '/editprod',query:{name:this.product_info}});
                })
                .catch(e => {
                    this.errors.push(e)
                })
            },
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
    margin-left:35%;
    margin-top:30%;
}
.flex-item-buttons {
    flex:0.1;
    margin-left:42%;
    margin-top:2%;
}
.flex-item-buttons:nth-of-type(2) {
    margin-left:1%;
}
.search {
    background: none;
    border: 3px solid rgb(90, 88, 85);
    width: 500px;
    height: 30px;
    font-family: Avenir Next;
    font-weight: 500;
    font-size: 20px;
    color: rgb(90, 88, 85);
}
.go_search {
    background-color: rgb(149,188,106);
    font-size: 30px; 
    font-family: Avenir Next;
    font-weight: 700;
    color: rgb(30, 30, 30);
    height: 40px;
    width: 120px;
    text-align: center;
    border-radius: 4px;
}
.add {
    background-color: rgb(246,204,106);
    font-size: 30px; 
    font-family: Avenir Next;
    font-weight: 700;
    color: rgb(30, 30, 30);
    height: 40px;
    width: 120px;
    text-align: center;
    border-radius: 4px;
}

</style>