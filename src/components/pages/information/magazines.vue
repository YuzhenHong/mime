<template>
<div id="magazines">
    <ul class="cards">
        <li class="card" v-for="magazine in magazines" v-bind:key="magazine.id" @click='handleFold(magazine)'>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4" id="cover">
                        <div class="cover" :style="bgcss(magazine.cover)">
                        </div>
                    </div>
                    <div class="col-sm-8" id="book-des">
                        <h2> {{magazine.name}} </h2>
                        <h4> {{magazine.author}} </h4>
                        <div>
                            <div class='containerb' :class="magazine.fold ? 'fold' : 'unfold'"   v-html="magazine.description"></div>
                            <span class="down"  v-show="magazine.fold"><i class="fas fa-angle-down"></i></span>
                            <span class="down"  v-show="!magazine.fold"><i class="fas fa-angle-up"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>
<script >
import axios from "axios";
export default({
    name: 'magazines',
    data() {
        return {
            magazines: []
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios.get('../../static/magazines.json').then(response => {
                this.magazines=response.data.magazines
                console.log(response.data);
            }, response => {
                console.log("error");
            });
            
        },
        bgcss(url){
            return {'background-image': 'url('+url+')',
                    'background-size': 'cover',
                    'background-position': 'center center'}
        },
        handleFold(magazine) {
            console.log(magazine.fold);
            magazine.fold = !magazine.fold;
            console.log(magazine.fold);
            
        }
    },
});

</script>

<style>
.cards{
    margin: 30px 10px 10px 0px;
    flex-direction: column;
    background-color: #fff;
    display: flex;
    align-items: center;
}
.card{
    margin: 20px;
    background-color: rgba(89,131,146,0.2);
    border-radius: 5px;
    padding: 20px;
    color: #827f8e;
    transition: 0.5s;
    cursor: pointer;
    }
.card:hover{
    box-shadow: 0px 10px 0px rgba(89,131,146,0.8); 
    transform: translate(0px,-10px);
}
#cover{
    display: flex;
    justify-content: center;
    align-items: center;
}
.cover{
    width: 120px;
    height: 170px;
    margin: 10px 10px 20px 10px;
    border-radius: 5px;
    transition: 0.5s 0.1s;
    box-shadow: 10px 10px 5px rgba(0,0,0,0.2);
}
#book-des h2{
    margin: 0;
    font-weight: bold;
    font-size: 24px;
    color: #444;
}
#book-des h4{
    margin-top: 10px;
    margin-bottom: 10px;
    opacity: 0.8;
    font-size: 18px;
    text-align: left;
}


.down {
    width: 50px;
    height: 30px;
    color: #598392;
    text-align: center;
}

.containerb {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: left;
    font-size: 16px;
    line-height: 1.5;
    opacity: 0.7;
    color: rgba(0,0,0);
    font-weight: normal;
    letter-spacing: 2px;
}

.containerb.fold {
    -webkit-line-clamp: 4;
}

.containerb.unfold {
    -webkit-line-clamp: 100;
}

#magazines span{
    padding: 20px 100px 0px 100px;
}
.fas.fa-angle-down,.fas.fa-angle-up{
    padding: 0px;
}

</style>