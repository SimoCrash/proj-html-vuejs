<template>
  <div class="container-page">
    <h2 class="secondary-title">Let's Dream Big Together</h2>
    <h1 class="primary-title">
      We are pioneers of the digital approach, using leading-edge
      technology to simplify procedures and aplly executive
      coaching in the new age of digitalization.
    </h1>
    <div class="container-cards">
      <div class="card">
        <h2>One to One</h2>
        <p>
          Getting the necessary clarity about the 
          current state to help you improve your 
          game.
        </p>
      </div>
      <div class="card">
        <h2>Anywhere</h2>
        <p>
          Access to valutable and portable 
          program which allow you to setup and 
          live anywhere you want.
        </p>
      </div>
      <div class="card">
        <h2>On Time</h2>
        <p>
          Punctually is out top priority beacuse it's 
          an essential criteria to assess a program 
          quality.
        </p>
      </div>
      <div class="card">
        <h2>Online Coures</h2>
        <p>
          Online business coaching now offers you 
          a very powerful way to empower your 
          business into success.
        </p>
      </div>
      <div class="card">
        <h2>Consulting</h2>
        <p>
          You will get a clear sense of direction for 
          your business, thorough assessment and 
          faster results.
        </p>
      </div>
      <div class="card">
        <h2>Self Development</h2>
        <p>
          Business Coaching often keep your focus 
          and develop you both in a professional 
          and personal way.
        </p>
      </div>
    </div>
    <div class="container-btn">
      <button class="btn-more"><h4>Learn more</h4></button>
      <button class="btn-start"><h4>Get started today</h4></button> 
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
    max-width: 55%;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .secondary-title {
      color: $color-base;
      text-align: center;
    }
    .primary-title {
      text-align: center;
    }
  }
  .container-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    .card {
      width: calc((100% - 2rem * 2) / 3);
    }
  }
  .container-btn {
    margin: auto;
    .btn-more {
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin: 2rem 1rem;
      h4 {
        padding: 0 2rem;
        color: $color-base;
        font-weight: bold;
      }
    }
    .btn-start {
        background-color: $color-base;
        border: none;
        border-radius: 5px;
        margin: 2rem 1rem;
        h4 {
          padding: 0 2rem;
          color: white;
          font-weight: bold;
        }
      }
  }
</style>