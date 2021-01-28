<template>
    <section id="contactUs" class="contactus-view">
        <h2 class="title-contact">
            Contatos
        </h2>
        <div class="sociais">
            <div class="whats">
                <WhatsIcon :size="40"/>
                <strong>Whatsapp</strong>
                <p>(98) 98888-8888</p>
            </div>
            <div class="atend">
                <ClockIcon :size="40"/>
                <strong>Atendimento</strong>
                <p>Seg à Sex | 9h às 16</p>
            </div>
            <div class="face">
                <FaceIcon :size="40"/>
                <strong>Facebook</strong>
                <p><a href="https://facebook.com">Contate-nos</a></p>
            </div>
            
            
        </div>
        <div class="email">

        </div>
    </section>
</template>

<script>
import WhatsIcon from 'vue-material-design-icons/Whatsapp';
import ClockIcon from 'vue-material-design-icons/Clock';
import FaceIcon from 'vue-material-design-icons/Facebook';


export default {
    components:{
        WhatsIcon,
        ClockIcon,
        FaceIcon
    }
}
</script>

<style scoped lang="scss">
    .contactus-view{
        grid-area: CT;
        margin: 0 230px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2{
            font-size: 50px;
            margin-bottom: 50px;
            color: var(--primary);
        }
        .sociais{
            display: flex;
            justify-content: space-between;
            width: 500px;
            a{
                text-decoration: none;
            }
            .whats{
                display: flex;
                flex-direction: column;
                align-items: center;
                color: var(--primary);
                p, strong{
                    color: black;
                    font-weight: 600;
                    margin-top: 1px;
                }
            }
            .atend{
                display: flex;
                flex-direction: column;
                align-items: center;
                color:  black;
                 p, strong{
                    color: black;
                    font-weight: 600;
                }
            }
            .face{
                display: flex;
                flex-direction: column;
                align-items: center;
                color: var(--face);
                 p, strong{
                    color: black;
                    font-weight: 600;
                }
            }
        }
    }
</style>