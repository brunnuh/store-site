<template>
    <div class="product-box-view">
        <img src="../../assets/perfume.png" alt="imagem do produto tal" />
        <div class="details-product">
            <strong class="name">FRESH SUGAR LIP BALM</strong>
            <div class="stars"></div>
            <div class="price">
                R$12.31
            </div>
        </div>
    </div>
</template>

<script>
export default {

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