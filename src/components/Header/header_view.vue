<template>
  <div class="header-view">
      <div class="logo">
          <a href="#">
              <img src="../../assets/logo.png" alt="logo da loja">
          </a>
      </div>
      <div class="nav-bar">
          <ul>
              <li>Home</li>
              <li>Produtos</li>
              <li>Sobre</li>
              <li>Contato</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
   .header-view{ /** corpo principal */
       grid-area: HD;
       background-color: var(--white);
       display: flex;
       
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
                padding-right: 10px;
                list-style-type: none;
                font-size: 14.5px;
                color: var(--grey);
                font-weight: bold;
            }
       }
   }
</style>

