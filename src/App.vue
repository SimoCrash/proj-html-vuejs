<template>
  <div>
    <HeaderPage></HeaderPage>
    <MainPage></MainPage>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import MainPage from '@/components/MainPage.vue';
import FooterPage from '@/components/FooterPage.vue';

export default {
  components: {
    HeaderPage,
    MainPage,
    FooterPage
  }

}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
  body {
    font-family: 'Montserrat', sans-serif;
  }
</style>