<template>
  <div class="container-page">
    <div class="container-bg-top">
      <img src="@/img/background-map-dots-top-right-transparent.png" alt="">
    </div>
    <div class="container-bg-bottom">
      <img src="@/img/maxcoach-shape-07-100x100.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container-page {
    background-color: #323043;
  }
  .container-bg-top {
    display: flex;
    justify-content: flex-end;
  }
  .container-bg-bottom {
    position: relative;
    img {
      position: absolute;
      left: 100px;
      bottom: 0px;
    }
  }
</style>