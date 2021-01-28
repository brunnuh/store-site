<template>
    <div id="products-view" class="products-view">
        <ProductBox 
            v-for="product in products" :key="product.id" 
                :name="product.name"
                :price="product.price"
                :image="product.images[0].url"
        />
    </div>
</template>

<script>
import ProductBox from '../globais/product_box_view';
import Api from '../../api/api';


export default {
    components: {
        ProductBox
    },

    mounted(){
        Api.getProducts().then(response => {
            this.products = response.data.data;
        })
    },

    data() {
        return {
            products : [

            ]
        }
    },
}
</script>

<style scoped lang="scss">
    .products-view{
        grid-area: PD;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 0 230px;
        justify-items: center;
        align-items: center;
        grid-row-gap: 20px;
        
    }
</style>