<template>
    <div class="products-view">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
    </div>
</template>

<script>
import ProductBox from '../globais/product_box_view';
export default {
    components: {
        ProductBox
    }
}
</script>

<style scoped lang="scss">
    .products-view{
        grid-area: PD;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        height: 300px;
    }
</style>