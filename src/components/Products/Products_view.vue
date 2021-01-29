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
        justify-content: center;
        align-items: center;
        grid-row-gap: 20px;
        
    }
    @media (max-width: 991px) {
        .products-view{
            margin: 200px 0px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
            
            grid-row-gap: 0px;
        }
        
    }
    @media (max-width: 990px) and (min-width: 600px){
        .products-view{
          
            
            grid-template-columns: 1fr 1fr 1fr;
            justify-items: center;
            
            grid-row-gap: 0px;
        }
    }
</style>