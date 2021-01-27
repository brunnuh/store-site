<template>
  <div id="app">
      <HeaderComponent />
      <BannersComponent />

      <ProductsComponent />

      <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/Header/header_view';
import BannersComponent from './components/Banners/Banner_view';
import ProductsComponent from './components/Products/Products_view';
import FooterComponent from './components/Footer/Footer_view';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    BannersComponent,
    ProductsComponent,
    FooterComponent
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
  grid-template-rows: 82px 700px auto auto 90px;
  grid-template-areas: 
    "HD"
    "BB"
    "PD"
    "AB"
    "FT"
  ;
}
</style>
