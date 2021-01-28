<template>
  <div id="app">
      <HeaderComponent />

      <BannersComponent />

      <ProductsComponent />

      <ContactUsComponent />

      <AboutUsComponent />
    
      <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header/header_view';
import BannersComponent from './components/Banners/Banner_view';
import ProductsComponent from './components/Products/Products_view';
import FooterComponent from './components/Footer/Footer_view';
import ContactUsComponent from './components/ContactUs/ContactUs_view';
import AboutUsComponent from './components/AboutUs/AboutUs_view';

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
  grid-template-rows: 82px 700px auto 500px 500px 90px;
  grid-template-areas: 
    "HD"
    "BB"
    "PD"
    "AB"
    "CT"
    "FT"
  ;
 
}

</style>
