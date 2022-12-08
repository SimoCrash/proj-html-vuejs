<template>
  <div class="container-position">
    <div class="container-page">
      <h2 class="secondary-title">Wanna transform your life?</h2>
      <h1 class="primary-title">Upcoming Events</h1>
      <div class="container-cards ">
        <div class="card">
          <div>
            <p class="location"><font-awesome-icon icon="fa-solid fa-location-dot" /> Texas, US</p>
            <h3>Storytelling Workshop</h3>
          </div>
          <div class="container-date">
            <p class="number-date">22</p>
            <h4>NOV</h4>
            <button>Get ticket</button>
          </div>  
        </div>
        <div class="card">
          <div>
            <p class="location"><font-awesome-icon icon="fa-solid fa-location-dot" /> New York, US</p>
            <h3>Painting Art Contest 2020</h3>
          </div>
          <div class="container-date">
            <p class="number-date">10</p>
            <h4>OCT</h4>
            <button>Get ticket</button>
          </div>  
        </div>
        <div class="card">
          <div>
            <p class="location"><font-awesome-icon icon="fa-solid fa-location-dot" /> Hamburg, Germany</p>
            <h3>International Art Fair 2020</h3>
          </div>
          <div class="container-date">
            <p class="number-date">23</p>
            <h4>NOV</h4>
            <button>Get ticket</button>
          </div>  
        </div>
        <div class="card">
          <div>
            <p class="location"><font-awesome-icon icon="fa-solid fa-location-dot" /> Illinois, US</p>
            <h3>Street Performance: Call for Artist</h3>
          </div>
          <div class="container-date">
            <p class="number-date">15</p>
            <h4>DEC</h4>
            <button>Get ticket</button>
          </div>  
        </div>
        <div class="card">
          <div>
            <p class="location"><font-awesome-icon icon="fa-solid fa-location-dot" /> Illinois, US</p>
            <h3>Consumer Food Safety Education Conference</h3>
          </div>
          <div class="container-date">
            <p class="number-date">22</p>
            <h4>JUL</h4>
            <button>Get ticket</button>
          </div>  
        </div>
        <div class="card">
          <div>
            <p class="location"><font-awesome-icon icon="fa-solid fa-location-dot" /> Dubai</p>
            <h3>How meditation improve your mental health?</h3>
          </div>
          <div class="container-date">
            <p class="number-date">12</p>
            <h4>AUG</h4>
            <button>Get ticket</button>
          </div>  
        </div>
      </div>
      <div class="view-events">
        <span>Excited about our event?</span>
        <button><strong>View all events <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></strong></button>
      </div>
      <div class="img-bottom">
        <img src="@/img/background-main.jpg" alt="">
      </div>
    </div>
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
    .view-events {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      font-size: 20px;
      button {
        padding: 0;
        color: #20AD96;
        border: none;
        border-bottom: 1px solid #898989;
      }
    }
  }
  .container-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    .card {
      background-color: #F8F8F8;
      width: calc(((100% - 2rem) - 1rem * 4) / 2);
      display: flex;
      justify-content: space-between;
      padding: 0 1rem 1rem;
      border-radius: 5px;
      .location {
        color: #7E7E7E;
      }
      .container-date {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .number-date {
          font-size: 50px;
          height: 50px;
          margin: 0;
          color: #20AD96;
        }
        button {
          background-color: #20AD96;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 5px;
          padding: 5px 25px;
        }
      }
    }
  }
  .container-position {
    position: relative;
    padding: 100px 0 150px;
    .img-bottom {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 150px;
      img {
        width: 100%;
      }
    }
  }
  
</style>