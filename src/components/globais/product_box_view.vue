<template>
    <div class="product-box-view">
        <img v-if="image != undefined" :src="image" alt="imagem do produto tal" />
        <img v-else :src="image" alt="imagem do produto tal" />
        <div class="details-product">
            <strong class="name">{{name}}</strong>
            <div class="stars"></div>
            <div class="price">
                R$ {{price}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        price: Number,
        image: String
    },
    mounted(){
        console.log(this.image)
    }
}
</script>

<style scoped lang="scss">
    .product-box-view{
        display: flex;
        flex-direction: column;
        height: 350px;
        width: 250px;
        border: rgb(189, 185, 185) solid 1px;
        margin: 0 10px 0 10px;
        align-items: center;

        &:hover{
          border: rgb(0, 0, 0) solid 1px; 
        }

        img{
            margin: 20px 0px;
            width: 180px;
            height: 200px;
        }
        .details-product{
            margin: 20px 0px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .name{
                font-size: 12px;
                font-weight: 600;
            }
            .price{
                margin: 20px 0px;
                font-weight: bold;
            }
        }
    }

   
</style>