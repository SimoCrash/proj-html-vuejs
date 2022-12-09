<template>
  <div class="container-page">
    <div class="part-left"><font-awesome-icon icon="fa-regular fa-circle" /></div>
    <div class="part-center">
      <div class="container-title">
        <h1 class="primary-title">Subcribe </h1>
        <p>Newsletters</p>
      </div>
      <p>
        Enter your email address to resister to our newsletter subsciprition
        delivered on a regular basis!
      </p>
      <div class="container-subscribe">
        <input type="text" placeholder="Enter your email">
        <button>Subscribe</button>
      </div>
    </div>
    <div class="part-right">
      <img class="img-top" src="@/img/maxcoach-shape-09.png" alt="">
      <img class="img-bottom" src="@/img/maxcoach-shape-02.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container-page {
    display: flex;
    .part-left, .part-right {
    width: 45%;
    }
  }
  .part-left {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8FD6CA;
    font-size: 50px;
  }
  .part-center {
    padding-bottom: 70px;
    .container-title {
      display: flex;
      align-items: baseline;
      .primary-title {
        text-align: center;
        color: #333333;
        font-size: 50px;
      }
      p {
        font-size: 50px;
        text-align: center;
        color: #20AD96;
      }
    }  
    p {
        color: #7E7E7E;
    }
    .container-subscribe {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      input {
        padding: 1rem;
        background-color: #F8F8F8;
        width: 75%;
        border: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      button {
        padding: 1rem;
        background-color: #20AD96;
        color: white;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      button:hover {
        background-color: #3f3a64;
        color: white;
        cursor: pointer;
      }
    }
  }
  .part-right {
    position: relative;
    .img-top {
      position: absolute;
      top: 50px;
      left: 80px;
    }
    .img-bottom {
      position: absolute;
      top: 40%;
      left: 120px;
    }
  }
</style>