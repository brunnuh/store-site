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
     
    }
}
</script>

<style scoped lang="scss">
    .product-box-view{
        display: flex;
        flex-direction: column;
        height: 350px;
        width: 250px;
        border: transparent solid 1px;
        transition: 0.6s;
        border-radius: 10px;
        margin: 0 10px 0 10px;
        align-items: center;
       box-shadow: 0 14px 28px rgba(94, 93, 93, 0.25);


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
                font-size: 16px;
                font-weight: 600;
            }
            .price{
                margin: 20px 0px;
                font-weight: bold;
            }
        }
    }

   
</style>