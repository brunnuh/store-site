<template>
  <header class="header-view">
      <div class="logo">
          <a href="#">
              <img src="../../assets/logo.png" alt="logo da loja">
          </a>
      </div>
      <div class="nav-bar">
          <ul>
              <li v-scroll-to="{element: '#part-header', offset: -250,}"><a >Home</a></li>
              <li v-scroll-to="{element: '#products-view', offset: -100,}"><a>Produtos</a></li>
              <li v-scroll-to="{element: '#aboutus', offset: -100}"><a >Sobre</a></li>
              <li v-scroll-to="{element: '#contactUs'}"><a >Contatos</a></li>
          </ul>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
   .header-view{ /** corpo principal */
       grid-area: HD;
       background-color: var(--white) ;
       display: flex;
       position: fixed;
       left: 0;
       width: 100%;
       height: 70px;
       right: 0;
       justify-content: space-between;
       align-items: center;
       padding-bottom: 10px;
       box-shadow: 0 14px 28px rgba(155, 154, 154, 0.25);
       
    

        /**Logo */
        .logo > a > img{
            padding-left: 100px;
            width: 140px;
            height: 35px;
        }
       /** nav bar*/
       .nav-bar > ul{
            display: flex;
            padding-right: 100px;
           
            li{
                display: flex;    
                cursor: pointer;
                align-items: center;
                justify-content: center;
                width: 80px;
                height: 30px;
                transition: 0.6s;
                
                &:hover{
                    background-color: var(--secondary);
                    color: white;
                    border: var(--secondary) solid 1px;
                    border-radius: 5px;
                    
                    &:hover > a {
                        color: white;
                    }
                }
            }
            a{
                text-decoration: none;
                font-size: 14.5px;
                color: var(--primary);
                font-weight: bold;
               
            }
       }
   }
</style>

