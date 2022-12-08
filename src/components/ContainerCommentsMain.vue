<template>
  <div class="container-page">
    <h2 class="secondary-title">People are praising Maxcoach</h2>
    <h1 class="primary-title">What make they love us?</h1>
    <div class="container-cards">
      <div class="card">
        <h3 class="third-title">It's a choice of quality for people with special needs</h3>
        <h4>
          I'm a very strict person so I require everything to be
          organized and neat. Then, I'll be able to make things 
          right and shine. MaxCoach guys just got me.
        </h4>
        <div class="container-person">
          <div><img src="@/img/testimonial-avata-03.jpg" alt=""></div>
          <div>
            <h4>FLORENCE THEMES</h4>
            <p>/ Multimedia Admin</p>
          </div>
        </div>
      </div>
      <div class="card">
        <h3 class="third-title">High Level of efficiency and scientific teaching methods</h3>
        <h4>
          I am free to learn at my own pace, follow my own 
          schedule and choose the subject I want to learn from 
          the syllabus. Great study portal for people like me.
        </h4>
        <div class="container-person">
          <div><img src="@/img/testimonial-avata-02.jpg" alt=""></div>
          <div>
            <h4>MINA HOLLACE</h4>
            <p>/ Freelancer</p>
          </div>
        </div>
      </div>
      <div class="card">
        <h3 class="third-title">Professional team of specialists and passionate mentors at reach</h3>
        <h4>
          I need to get a certication for English proficiency and 
          MacCoach is my best choice. Their tutors are smart and 
          professional when deadling with students.
        </h4>
        <div class="container-person">
          <div><img src="@/img/testimonial-avata-01.jpg" alt=""></div>
          <div>
            <h4>MADLEY PONDOR</h4>
            <p>/ IT Specialist</p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container-page {
    background-color: #F8F8F8;
    margin-top: 227px;
    padding: 70px;
    .secondary-title {
      color: #45B9A7;
      text-align: center;
    }
    .primary-title {
      text-align: center;
      color: #333333;
      font-size: 50px;
    }
  }
  .container-cards {
    display: flex;
    max-width: 100%;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    .card {
      padding: 2rem;
      opacity: 0.5;
      background-color: white;
      border-radius: 10px;
      .third-title {
        color: #3F3A64;
      }
      h4 {
        color: #7E7E7E;
        line-height: 35px;
      }
      .container-person {
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
        h4 {
          color: #3F3A64;
        }
        p {
          color: #7E7E7E;
        }
      }
    }
    .card:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
</style>