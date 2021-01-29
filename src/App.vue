<template>
  <div id="app">
      <HeaderComponent />
      <BannersComponent />
      <ProductsComponent />

      <div class="link-whats">
        <a href="https://api.whatsapp.com/send?phone=5598984831112&text=Ol%C3%A1%20Inacio,%20poderia%20me%20informar%20sobre%20os%20produtos." target="_blank">
          <img src="../src/assets/whatsapp-logo.png" alt="link-whatsapp">
        </a>
      </div>
    
  </div>
</template>

<script>
import HeaderComponent from './components/Header/header_view';
import BannersComponent from './components/Banners/Banner_view';
import ProductsComponent from './components/Products/Products_view';
import FooterComponent from './components/Footer/Footer_view';
import ContactUsComponent from './components/ContactUs/ContactUs_view';
import AboutUsComponent from './components/AboutUs/AboutUs_view';
/**
 * 

      
      

      <ContactUsComponent />

      <AboutUsComponent />
    
      <FooterComponent />
 */
export default {
  name: 'App',
  components: {
    HeaderComponent,
    BannersComponent,
    ProductsComponent,
    FooterComponent,
    ContactUsComponent,
    AboutUsComponent
  }
}
 
</script>

<style scoped lang="scss">
#app {
  display: grid;
  width: 100%;
  align-items: center;
  justify-content: center;

  grid-template-columns: 1fr;
  grid-template-rows: auto 700px auto 500px 500px 90px;
  grid-template-areas: 
    "HD"
    "BB"
    "PD"
    "AB"
    "CT"
    "FT"
  ;
  .link-whats{
    position: fixed;
    right: 10px;
    bottom: 10px;
    img{
      max-width: 50px;
    }
  }
}

</style>
