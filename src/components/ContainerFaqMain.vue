<template>
  <div class="container-page">
    <div class="container-bg-top">
      <img src="@/img/background-map-dots-top-right-transparent.png" alt="">
    </div>
    <div class="container-bg-bottom">
      <img src="@/img/maxcoach-shape-07-100x100.png" alt="">
    </div>
    <div class="container-position">
      <div class="container-content">
        <div class="content-left">
          <img src="@/img/icon-youtube-play.png" alt="">
        </div>
        <div class="content-right">
          <h1>To Thrive In Business Today, You'll Nedd a Good Plan</h1>
          <div class="container-icon">
            <div class="first-faq"><font-awesome-icon icon="fa-solid fa-circle-chevron-up" /></div>
            <div>
              <h2 class="first-faq">How can we help?</h2>
              <p>
                How many courses yuììou've been on, using however many techniques
                and methods. Unless you've come to reralize the value of mindset, then 
                you've yet to understand how success comes.
              </p>
              <p>
                With everyone else's mindset nvolved impacting too. Hence why 
                business coaching is so crucial for success.
              </p>
            </div>
          </div>
          <div class="container-icon">
            <div><font-awesome-icon icon="fa-solid fa-circle-chevron-down" /></div>
            <div>
              <h2>Why would I need a business COACH</h2>
            </div>
          </div>
          <div class="container-icon">
            <div><font-awesome-icon icon="fa-solid fa-circle-chevron-down" /></div>
            <div>
              <h2>What is one-on-one coaching?</h2>
            </div>
          </div>
        </div>
      </div>
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
    position: relative;
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
  .container-position {
    position: absolute;
    inset: 0;
  }
  .container-content {
    display: flex;
    align-items: center;
    gap: 100px;
    height: 100%;
  }
  .content-left {
    background-image: url('@/img/home-business-video-poster-670x450.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 700px;
    margin-left: 10%;
    border-radius: 5px;
  }
  .content-right {
    width: 50%;
    margin-right: 20%;
    color: white;
    h1 {
      font-size: 50px;
    }
    .container-icon {
      display: flex;
      border-bottom: 1px solid #9d99be;
      padding-bottom: 1rem;
      margin-top: 1rem;
      .first-faq {
        color: #45B9A7;
      }
      h2 {
        margin-top: 0;
      }
    }
  }
</style>