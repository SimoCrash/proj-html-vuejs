<template>
  <div>
    <div class="header-top" id="header">
        <div class="container-img"><img src="@/img/dark-logo.png" alt=""></div>
        <div class="menubar">
            <div v-for="list in arrMenuHeader" :key="list"><a :href="'#' + list">{{ list }} <font-awesome-icon icon="fa-solid fa-chevron-down" /></a></div>
        </div>
        <div class="h-t-right-container">
            <div>
                <div>
                    <img :src="'img/' + flagIcon + '.png'" alt="">
                    <select @change="changes(value)">
                        <option v-for="lang in arrLanguage" :key="lang" :value="lang" > {{ lang }}</option>                       
                    </select>
                    
                </div>
                <div>
                    <font-awesome-icon icon="fa-regular fa-circle-user" />
                </div>
            </div>
            <div>
                <input type="text" placeholder="Search">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </div>
        </div>
    </div>
    <div class="header-bottom">
        <div class="h-bottom-left">
            <div class="container-title">
                <h2 class="secondary-title">New Challanges, New Skills</h2>
                <h1 class="title">BUILD YOUR OWN LIFE COACHING BUSINESS</h1>
                <h3 class="third-title">Whole-Life Business Coaching for committed entrepreneurs</h3>
                <button class="btn-start"><h4>Get started today</h4></button>
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
    data(){
        return {
            arrMenuHeader: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
            arrLanguage: ['ENGLISH', 'FRANÇAIS', 'DEUTSCH'],
            flagIcon: 'en',
        }
    },
    methods: {
        changes(event){
            this.flagIcon = event.slice(0,2).toLowerCase();
        }
    }
}

</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
    }
    .header-top {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .container-img {
            margin: 150px;
            img {
                width: 50%;
            }
        }
        .menubar {
            display: flex;
            gap: 4rem;
            color: #3F3A64;
            flex: 1 0 0;
            font-weight: 600;
            .fa-chevron-down {
                font-size: 9px;
            }
        }
        .h-t-right-container {
            display: flex;
            align-items: center;
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
                .title {
                    font-size: 50px;
                    color: #333333;
                }
                .third-title {
                    color: #7B7B7C;
                }
                .btn-start {
                    background-color: #45B9A7;
                    border: none;
                    border-radius: 5px;
                    h4 {
                        padding: 0 2rem;
                        color: white;
                    }
                }
                .btn-start:hover {
                    background-color: #3F3A64;
                }
            }
            
        }
        .h-bottom-right {
            background-image: url('@/img/home-business-hero-global-image.png');
            background-repeat: no-repeat;
            width: 50%;
            img {
                margin-top: 50px;
            }
        }
    }
</style>


    
    <font-awesome-icon icon="fa-solid fa-ruler" /> <!-- icona a pagamento -->
    <font-awesome-icon icon="fa-solid fa-circle-radiation" /> <!-- icona a pagamento-->
    <font-awesome-icon icon="fa-solid fa-book" />
    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
    <font-awesome-icon icon="fa-solid fa-circle-chevron-up" /> <!-- icona a pagamento-->
    <font-awesome-icon icon="fa-solid fa-circle-chevron-down" /> <!-- icona a pagamento-->
    <font-awesome-icon icon="fa-solid fa-location-dot" /> <!-- icona a pagamento-->
    <font-awesome-icon icon="fa-regular fa-circle" />
    <font-awesome-icon icon="fa-solid fa-spinner" />
    <font-awesome-icon icon="fa-solid fa-people-arrows" />
    <font-awesome-icon icon="fa-solid fa-map-location-dot" />
    <font-awesome-icon icon="fa-regular fa-clock" />
    <font-awesome-icon icon="fa-solid fa-globe" />
    <font-awesome-icon icon="fa-solid fa-person" />
    <font-awesome-icon icon="fa-solid fa-code" />
    <font-awesome-icon icon="fa-brands fa-square-facebook" />
    <font-awesome-icon icon="fa-brands fa-twitter" />
    <font-awesome-icon icon="fa-brands fa-instagram" />
    <font-awesome-icon icon="fa-brands fa-linkedin" />
    <font-awesome-icon icon="fa-solid fa-arrow-up-long" />