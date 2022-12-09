<template>
  <div class="container-bg">
    <div class="container-page">
      <div class="container-address">
        <h4>Address</h4>
        <div v-for="add in arrAddress" :key="add">
          <p>{{ add }}</p>
        </div>
        <div class="container-icons">
          <font-awesome-icon icon="fa-brands fa-square-facebook" />
          <font-awesome-icon icon="fa-brands fa-twitter" />
          <font-awesome-icon icon="fa-brands fa-instagram" />
          <font-awesome-icon icon="fa-brands fa-linkedin" />
        </div>
      </div>
      <div class="container-explore-information">
        <div class="container-explore">
          <h4>Explore</h4>
          <div class="explore">
            <p v-for="exp in arrExplore" :key="exp">{{ exp }}</p>
          </div>
        </div>
        <div class="container-information">
          <h4>Information</h4>
          <div class="information">
            <p v-for="info in arrInformation" :key="info">{{ info }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-rights">
      <span class="corp">c</span><span> 2020 Maxcoach. All Rights Reserved</span> 
    </div>
    <a href="#header"><button class="btn-up"><font-awesome-icon icon="fa-solid fa-arrow-up-long" /></button></a>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
  data(){
    return {
      arrAddress: ["382 NE 191st St # 87394 Miami, FL 33179-3899", "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)", "support@maxcoach.com"],
      arrExplore: ["Start here", "Success story", "Blog", "Courses", "About us", "Contact us"],
      arrInformation: ["Membership", "Purchase guide", "Privacy policy", "Terms of service"]
    }
  }
}
</script>

<style lang="scss" scoped>

  h4 {
    color: white;
  }
  p {  
    font-weight: bold;
    font-size: 14px;
  }
  .container-bg {
    background-color: #171621;
    color: #7E7E7E;
    position: relative;
  }
  .container-page {
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .container-address {
      .container-icons {
        display: flex;
        gap: 1.5rem;
        font-size: 1.5rem;
      }
    }
  }
  .container-explore-information {
    display: flex;
    justify-content: flex-end;
    .container-explore {
      width: 50%;
      .explore {
        display: flex;
        flex-wrap: wrap;
        p {
          width: calc(100% / 2);
        }
      }
    }
  }
  .container-rights {
    padding: 50px 0 20px;
    text-align: center;
    .corp {
      padding: 0 4px;
      border-radius: 100%;
      border: 1px solid #7E7E7E;
    }
  }
  .btn-up {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 30px;
    background-color: #20AD96;
    color: white;
    cursor: pointer;
    border: none;
  }
</style>