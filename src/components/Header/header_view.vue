<template>
    <b-navbar toggleable="lg" type="light" variant="light"  class="header-view">
        <b-navbar-brand  v-scroll-to="{element: '#part-header', offset: -250,}"  class="logo">
            <img src="../../assets/logo.png" alt="logo da loja">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto text-center"> 
            <b-nav-item class="link" v-scroll-to="{element: '#part-header', offset: -250,}" >Home</b-nav-item>
            <b-nav-item class="link" v-scroll-to="{element: '#products-view', offset: -100,}">Produtos</b-nav-item>
            <b-nav-item class="link" v-scroll-to="{element: '#aboutus', offset: -100,}">Sobre</b-nav-item>
            <b-nav-item class="link" v-scroll-to="{element: '#contactUs',}">Contatos</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
  </b-navbar>
</template>

<script>


import menuOpenIcon from 'vue-material-design-icons/Menu';

export default {
    components:{
        menuOpenIcon,
       
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>

<style scoped lang="scss">
   .header-view{ /** corpo principal */
       grid-area: HD;
     
       display: flex;
       position: fixed;
       left: 0;
       width: 100%;
       
       right: 0;
       justify-content: space-between;
       
       box-shadow: 0 14px 28px rgba(155, 154, 154, 0.25);  
       
   }

   .nav-collapse, link{
       color: black;
   }

    .link{
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        transition: 0.5s;
        &:hover {
            background-color:  #2B9348;
            color: black;
            border-radius: 5px;
            
            &:hover > a {
                color: white;
            }
        }
    }

    .logo > img{
        max-width: 40px;
    }
   
</style>

