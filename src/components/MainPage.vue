<template>
  <div>
    <container-digital-main></container-digital-main>
    <container-help-main></container-help-main>
    <container-price-main></container-price-main>
    <container-faq-main></container-faq-main>
    <container-events-main></container-events-main>
    <container-comments-main></container-comments-main>
    <container-subcribe-main></container-subcribe-main>
  </div>
</template>

<script>
import ContainerDigitalMain from '@/components/ContainerDigitalMain.vue';
import ContainerHelpMain from '@/components/ContainerHelpMain.vue';
import ContainerPriceMain from '@/components/ContainerPriceMain.vue';
import ContainerFaqMain from '@/components/ContainerFaqMain.vue';
import ContainerEventsMain from '@/components/ContainerEventsMain.vue';
import ContainerCommentsMain from '@/components/ContainerCommentsMain.vue';
import ContainerSubcribeMain from '@/components/ContainerSubcribeMain.vue';
export default {
  components: {
    ContainerDigitalMain,
    ContainerHelpMain,
    ContainerPriceMain,
    ContainerFaqMain,
    ContainerEventsMain,
    ContainerCommentsMain,
    ContainerSubcribeMain
  }

}
</script>

<style>

</style>