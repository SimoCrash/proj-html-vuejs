<template>
  <div class="container-page">
    <h2 class="secondary-title">Let's Dream Big Together</h2>
    <h1 class="primary-title">Explore How can I help you</h1>
    <div class="container-cards">
      <div class="card course-02">
        <div class="container-price">
          <h2>$40</h2>
          <h3>.00</h3>
        </div>
        <h2 class="title-card">Learning to Write as a Professional Author</h2>
      </div>
      <div class="card stock-03">
        <div class="container-price">
          <h2>Free</h2>
        </div>
        <h2 class="title-card">Customer-centric Info-Tech Strategies</h2>
      </div>
      <div class="card stock-04">
        <div class="container-price">
          <h2>$19</h2>
          <h3>.00</h3>
        </div>
        <h2 class="title-card">Open Programming Courses for Everyone Python</h2>
      </div>
      <div class="card stock-06">
        <div class="container-price">
          <h2>$26</h2>
          <h3>.00</h3>
        </div>
        <h2 class="title-card">Academic Listening and Note-Taking</h2>
      </div>
    </div>
    <div class="container-btn">
      <span>
        Take the control of their life back and start doing things to make their
        dream come true.
      </span>
      <button><strong>View all ourses <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></strong></button>
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
    width: 90%;
    margin: auto;
    padding: 50px 0;
    .secondary-title {
      color: $color-base;
      text-align: center;
    }
    .primary-title {
      font-size: 50px;
      color: #333333;
      text-align: center;
    }
    .container-price {
      display: flex;  
      color: #2BB19B;
      }
    .container-btn {
      width: 40%;
      margin: auto;
      text-align: center;
    }
  }
  .container-cards {
    display: flex;
    gap: 2rem;
    .card {
      width: calc((100% - 2rem * 3) / 4);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0 20px;
      height: 600px;
      border-radius: 5px;
      .title-card {
        color: white;
      }
    }
  }
  .course-02 {
    background-image: url('@/img/course-02-443x600.jpg');
    width: calc((100% - 2rem * 3) / 4);
  }
  .stock-03 {
    background-image: url('@/img/stock-full-hd-03-443x600.jpg');
    width: calc((100% - 2rem * 3) / 4);
  }
  .stock-04 {
    background-image: url('@/img/stock-full-hd-04-443x600.jpg');
    width: calc((100% - 2rem * 3) / 4);
  }
  .stock-06 {
    background-image: url('@/img/stock-full-hd-06-443x600.jpg');
    width: calc((100% - 2rem * 3) / 4);
  }
</style>