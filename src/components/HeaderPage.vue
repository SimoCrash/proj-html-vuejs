<template>
  <div>
    <div class="header-top">
        <div class="h-t-container-img"><img src="@/img/dark-logo.png" alt=""></div>
        <div></div>
        <div></div>
    </div>
    <div class="header-bottom">
        <div class="h-bottom-left">
            <div class="container-title">
                <h2 class="secondary-title">New Challanges, New Skills</h2>
                <h1 class="h-b-title">BUILD YOUR OWN LIFE COACHING BUSINESS</h1>
                <h3 class="h-b-third-title">Whole-Life Business Coaching for committed entrepreneurs</h3>
                <button class="h-b-btn"><h4>Get started today</h4></button>
            </div>
        </div>
        <div class="h-bottom-right">
            <img src="@/img/home-business-hero-avatar.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .header-top {
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .h-t-container-img {
            margin: 150px;
            img {
                width: 50%;
            }
        }
    }
    .header-bottom {
        background-color: #eceeef;
        display: flex;
        .h-bottom-left {
            width: 50%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .container-title {
                width: 590px;
                .secondary-title {
                    color: #45B9A7;
                }
                .h-b-title {
                    font-size: 50px;
                    color: #333333;
                }
                .h-b-third-title {
                    color: #7B7B7C;
                }
                .h-b-btn {
                    background-color: #45B9A7;
                    border: none;
                    border-radius: 5px;
                    h4 {
                        padding: 0 2rem;
                        color: white;
                    }
                }
            }
            
        }
        .h-bottom-right {
            background-image: url('@/img/home-business-hero-global-image.png');
            background-repeat: no-repeat;
            width: 50%;
        }
    }
</style>


<font-awesome-icon icon="fa-solid fa-chevron-down" />
    <font-awesome-icon icon="fa-regular fa-circle-user" />
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    <font-awesome-icon icon="fa-solid fa-ruler" /> <!-- icona a pagamento -->
    <font-awesome-icon icon="fa-solid fa-circle-radiation" /> <!-- icona a pagamento-->
    <font-awesome-icon icon="fa-solid fa-book" />
    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
    <font-awesome-icon icon="fa-solid fa-circle-chevron-up" /> <!-- icona a pagamento-->
    <font-awesome-icon icon="fa-solid fa-circle-chevron-down" /> <!-- icona a pagamento-->
    <font-awesome-icon icon="fa-solid fa-location-dot" /> <!-- icona a pagamento-->
    <font-awesome-icon icon="fa-solid fa-arrow-right-long" /> 
    <font-awesome-icon icon="fa-regular fa-circle" />
    <font-awesome-icon icon="fa-solid fa-spinner" />
    <font-awesome-icon icon="fa-solid fa-people-arrows" />
    <font-awesome-icon icon="fa-solid fa-map-location-dot" />
    <font-awesome-icon icon="fa-regular fa-clock" />
    <font-awesome-icon icon="fa-solid fa-globe" />
    <font-awesome-icon icon="fa-solid fa-person" />
    <font-awesome-icon icon="fa-solid fa-code" />