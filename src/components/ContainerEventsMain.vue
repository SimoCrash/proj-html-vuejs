<template>
  <div class="container-page">
    <h2 class="secondary-title">Wanna transform your life?</h2>
    <h1 class="primary-title">Upcoming Events</h1>
    <div class="container-cards">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    $color-base: #45B9A7;
  .container-page {
    max-width: 65%;
    padding: 70px 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .secondary-title {
      color: $color-base;
      text-align: center;
    }
    .primary-title {
      font-size: 50px;
      margin-top: .5rem;
      color: #333333;
      text-align: center;
    }
  }
</style>