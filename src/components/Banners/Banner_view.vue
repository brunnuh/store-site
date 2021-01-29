<template>

    <section id="part-header" class="banner-view">
     <h2>Mais Vendidos</h2>
        <div class="best-seller">
             <strong  v-if="higlighted[0] != undefined" >{{higlighted[0][0].name.toUpperCase()}}</strong>
             <img v-if="higlighted[0] != undefined" :src="higlighted[0][0].images[0].url" :alt="higlighted[2][0].name">
        </div>
        <div class="adverts-all">
            <div class="adverts-spotlight">
                <strong  v-if="higlighted[1] != undefined" >{{higlighted[1][0].name.toUpperCase()}}</strong>
                <img v-if="higlighted[1] != undefined" :src="higlighted[1][0].images[0].url" :alt="higlighted[2][0].name">
            </div>
            <div class="adverts-columns">
                <div class="column-1">
                    <strong  v-if="higlighted[2] != undefined" >{{higlighted[2][0].name.toUpperCase()}}</strong>
                    <img v-if="higlighted[2] != undefined" :src="higlighted[2][0].images[0].url" :alt="higlighted[2][0].name">
                </div>
                <div class="column-2">
                    <strong  v-if="higlighted[3] != undefined" >{{higlighted[3][0].name.toUpperCase()}}</strong>
                    <img v-if="higlighted[3] != undefined" :src="higlighted[3][0].images[0].url" :alt="higlighted[3][0].name">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Api from '../../api/api';
    export default{

        mounted() {
            Api.getHiglighted().then(response => {
                this.higlighted = response.data.data
            })
        },

        data() {
            return {
                higlighted:[
                    
                ]
            }
        },
    }
</script>

<style scoped lang="scss">
 
    .banner-view{ /** site full */
        grid-area: BB;
        display: grid;
        grid-template-columns:  600px 600px;
        grid-template-rows: 60px auto;
        grid-template-areas: "H H" "BS AV";
        justify-content: center;
        margin: 250px 0 55px 0;
        grid-gap: 14px;
        
        h2{
            grid-area: H;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bolder;
            color: #007F5F;
            font-size: 50px;
        }

        .best-seller{
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            grid-area: BS;
            align-items: center;
            background-color: var(--magnat);
        
           img{
               height: 400px;
           }
           strong{
               
               font-size: 20px;
               font-weight: bolder;
               color: white;
           }
        }

        .adverts-all{
            grid-area: AV;
            display: grid;
            grid-template-rows: 188px 297px;
            grid-template-areas: "AVS" "AVSC";
            grid-gap: 14px;

            .adverts-spotlight{
                grid-area: AVS;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--pink);
                img{
                    height: 140px;
                }
                strong{
                    font-size: 24px;
                    font-weight: bolder;
                    color: white;
                    margin-right: 50px;
                }
            }

            .adverts-columns{
                grid-area: AVSC;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 14px;

                .column-1{
                    grid-area: 1fr;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color: var(--oro);
                    img{
                        height: 190px;
                    }
                    strong{
                        font-size: 18px;
                        font-weight: bolder;
                        color: white;
    
                    }
                }

                .column-2{
                    grid-area: 1fr;
                    background-color: var(--otheroro) ;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    img{
                        height: 190px;
                    }
                    strong{
                        font-size: 18px;
                        font-weight: bolder;
                        color: white;
    
                    }
                }
            }
        }
    }

   @media (max-width: 991px) { /** telas menores que 991px */
        .banner-view{
            display: flex;
            flex-direction: column;
            grid-gap: 0;
            align-content: center;
            justify-content: center;

            h2{
                display: flex;
                flex-direction: column;
                
                font-weight: bolder;
                color: #007F5F;
                font-size: 30px;
            }
            .best-seller{
                display: flex;
                flex-direction: row-reverse;
                max-width: 991px;
                height: 150px;
                
                img{
                    max-height: 130px;;
                }
                strong{
                    display: block;
                    font-size: 15px;
                    font-weight: bolder;
                    color: white;
                }
            }

            .adverts-all{
                display: flex;
                flex-direction: column;
                grid-gap: 0;
                
                .adverts-spotlight{
                    max-width: 991px;
                    height: 150px;
                    img{
                        max-height: 130px;;
                    }
                    strong{
                        display: block;
                        font-size: 15px;
                        font-weight: bolder;
                        color: white;
                    }
                }
                .adverts-columns{
                    display: flex;
                    flex-direction: column;
                    grid-gap: 0;
                    .column-1{
                        display: flex;
                        height: 150px;
                        flex-direction: row-reverse;
                    }
                    .column-2{
                        display: flex;
                        height: 150px;
                        flex-direction: row;
                    }
                    .column-1, .column-2{
                        
                        img{
                            max-height: 130px;;
                        }
                        strong{
                            display: block;
                            font-size: 15px;
                            font-weight: bolder;
                            color: white;
                        }
                    }
                }
            }
        }
    }
</style>