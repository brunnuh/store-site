<template>
    <div class="footer-view">
        <div class="sociais-midias">
            <faceIcon />
            <googleIcon/>
            <youtubeIcon/>
        </div>
        <div class="coprigth">
            <span>
                © {{year()}} Vue. All rights Reserved.
            </span>
        </div>
    </div>
</template>

<script>
import faceIcon from 'vue-material-design-icons/Facebook';
import googleIcon from 'vue-material-design-icons/GooglePlus';
import youtubeIcon from 'vue-material-design-icons/Youtube';


export default {
    components:{
        faceIcon,
        googleIcon,
        youtubeIcon
    },
    methods:{
        year(){
            const now = new Date;
            return now.getFullYear();
        }
    }
}
</script>

<style lang="scss" scoped>
    .footer-view{
        grid-area: FT;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        background-color: rgb(34, 33, 33);
        
        .sociais-midias > span{
            margin: 4px;
        }
        .coprigth > span{
            color: white;
        }
    }

</style>