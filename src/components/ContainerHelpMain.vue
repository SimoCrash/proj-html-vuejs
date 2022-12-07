<template>
  <div class="container-bg">
    <div class="container-page">
      <h2 class="secondary-title">Let's Dream Big Together</h2>
      <h1 class="primary-title">Explore How can I help you</h1>
      <div class="container-card">
        <div class="card">
          <div><img src="@/img/home-business-service-slide-01-480x298.jpg" alt=""></div>
          <div class="container-text">
            <h2>Consultive Training</h2>
            <p>
              With a coach addressing multiple issues
              that are off balance, affecting your
              business in various unconsidered ways.
            </p>
          </div>
          <div class="container-arrow"> 
            <div>Discover now <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></div>
          </div>
        </div>
        <div class="card">
          <div><img src="@/img/home-business-service-slide-02-480x298.jpg" alt=""></div>
          <div class="container-text">
            <h2>Real Deal Coaching</h2>
            <p>
              Brings an exceptionally powerful 
              opportunity. Beaing able to accept, to work 
              with that opportunity.
            </p>
          </div>
          <div class="container-arrow"> 
            <div>Discover now <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></div>
          </div>
        </div>
        <div class="card">
          <div><img src="@/img/home-business-service-slide-03-480x298.jpg" alt=""></div>
          <div class="container-text">
            <h2>Advisor Training Program</h2>
            <p>
              Getting high quality, entrepreneur mindset 
              driven online business coaching, is what is 
              needed.
            </p>
          </div>
          <div class="container-arrow"> 
            <div>Discover now <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  $color-base: #45B9A7;
  .container-bg {
    background-color: #f6f6f6;
    padding: 50px 0;
  }
  .container-page {
    max-width: 65%;
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
      color: #333333;
      text-align: center;
    }
  }
  .container-card {
    display: flex;
    gap: 2rem;
    .card {
      background-color: white;
      width: calc((100% - 2rem * 2) / 3);
      text-align: center;
      border-radius: 5px;
      img {
        max-width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .container-text {
        margin: 0 30px;
      }
      .container-arrow {
        border-top: 1px solid #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        color: #2BB19B;
        font-weight: bold;
      }

    }
  }
  

</style>