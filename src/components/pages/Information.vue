<template>
<div id="information" v-cloak>
    <section>
        <div class="container" id="title">
            <div class="row">
                <div class="col-sm-6">
                    <h2> {{info7.title}}</h2>
                    <hr>
                    <p> {{info7.msg}}</p>
                </div>
            </div>
            <div class="row" id="kind">
                <div class="col-sm-12 content">
                    <ul>
                        <li v-for="(router, index) in routers" v-bind:key="router.name" >
                            <button class="btn" :class="{'active':ind === index}" @click="changeBgc(index);"><router-link :to="router.path">{{router.name}}</router-link></button>
                        </li>
                    </ul>
                    <div class="container">
                        <transition  name="page" mode="out-in">
                            <router-view :key="$route.path"></router-view>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import Books from '@/components/pages/information/books'
import Films from '@/components/pages/information/films'
import Movies from '@/components/pages/information/movies'
import Magazines from '@/components/pages/information/magazines'
export default {
    name: 'Information',
    data(){
        return{
            info7: {
                title: '相關資訊',
                msg: '迷．麋團隊整理許多詮釋了情緒勒索的相關作品，例如：書籍、電影、影集、雜誌等。閒時之餘不妨參考看看，希望能藉由這些媒介讓您更了解情緒勒索！'
            },
            routers:[
                {
                    name: '書籍',
                    path: '/information/books'
                },
                {
                    name: '電影',
                    path: '/information/movies'
                },
                {
                    name: '影集',
                    path: '/information/films'
                },
                {
                    name: '雜誌',
                    path: '/information/magazines'
                },
            ],
            ind: '',
        }
    },
    methods: {
        changeBgc: function (index) {
            this.ind = index
        }
    }
}
</script>

<style>
    #title p{
        color: #fff;
    }

    hr{
        background-color: rgba(255,255,255,0.5);
    }
    .btn{
        margin: 10px 20px 10px 20px;
    }
    .btn:hover{
        background-color: #598392;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
    a:hover{
        color: #fff;
        text-decoration: none;
    }
    #kind li{
        display: inline;
    }
    .active{
        background-color: #598392;
    }
    .page-enter-active, .page-leave-active{
        transition: 0.5s;
    } 

    .page-enter, .page-leave-to{
        opacity: 0;
    }
    
    .content{
        min-height: 500px
    }

    

</style>