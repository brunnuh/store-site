<template>
    <section class="banner-view">
        <div class="best-seller">

        </div>
        <div class="adverts-all">
            <div class="adverts-spotlight">

            </div>
            <div class="adverts-columns">
                <div class="column-1">

                </div>
                <div class="column-2">

                </div>
            </div>
        </div>
    </section>
</template>

<script>

</script>

<style scoped lang="scss">
    .banner-view{
        grid-area: BB;
        display: grid;
        grid-template-columns: 500px 700px;
        grid-template-areas: "BS AV";
        justify-content: center;
        margin: 55px 0 55px 0;
        grid-gap: 14px;

        
        .best-seller{
            grid-area: BS;
            background-color: red;
        }

        .adverts-all{
            grid-area: AV;
            display: grid;
            grid-template-rows: 188px 187px;
            grid-template-areas: "AVS" "AVSC";
            grid-gap: 14px;

            .adverts-spotlight{
                grid-area: AVS;
                background-color: rgb(0, 0, 0);
            }

            .adverts-columns{
                grid-area: AVSC;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 14px;

                .column-1{
                    grid-area: 1fr;
                    background-color: chartreuse;
                }

                .column-2{
                    grid-area: 1fr;
                    background-color: rgb(255, 19, 164);
                }
            }
        }
    }
</style>