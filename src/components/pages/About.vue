<template>
<div>
    <img class="headimg" src="/static/member/member.png">
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 content">
                    <h2> {{info6.title}}
                    </h2>
                    <hr>
                    <p>{{info6.msg}}</p>
                    <ul>
                        <div class="row" id="member">
                            <div class="col-sm-3" v-for="member in members" v-bind:key="member.id">
                                <li>
                                    <img class="memberphoto" :src="member.imgurl">
                                    <h3>{{member.name}}</h3>
                                    <p>{{member.opacity1}}<br/>{{member.opacity2}}</p>
                                    <ul class="list-inline.social-buttons">
                                        <li class="list-inline-item">
                                            <a :href="member.socialurl" target="_blank">
                                                <i class="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 content">
                    <h2> {{info7.title}}
                    </h2>
                    <hr>
                    <p>{{info7.msg}}</p>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    </section>
</div>

</template>

<script>
import ContactForm from './ContactForm.vue'
export default {
    name: 'About',
    components:{
        ContactForm: ContactForm,
    },
    data(){
        return{
            info6:{
                title: '團隊介紹',
                subtitle: '',
                msg: '您好，我們是105世新大學資訊傳播學系的學生！即將畢業的我們選擇了「 親子之間的情緒勒索」這個主題來製作畢業專題，期望透過整體展覽讓觀展者不僅能認識、瞭解情緒勒索的概念及定義；也能自我檢視所處家庭內的親子關係---「關係」本體是否健康；最後能省思並改善所處的關係狀態。'
            },
            info7:{
                title: '聯絡我們',
                subtitle: '',
                msg: '您好，對於網站內容、主題有任何疑問、建議或指教都請不吝賜教！再次感謝您的觀看！'
            },
            members:[
                {
                    id: 0,
                    imgurl: "/static/member/洪于軫-01.jpg",
                    name: "洪于軫",
                    opacity1: "專案經理",
                    opacity2: "程式設計",
                    socialurl: "https://www.facebook.com/profile.php?id=100000328880237&ref=bookmarks"
                },
                {
                    id: 1,
                    imgurl: "/static/member/侯亭妤-01.jpg",
                    name: "侯亭妤",
                    opacity1: "內容設計",
                    opacity2: "展場設計",
                    socialurl: "https://www.facebook.com/profile.php?id=100001737366996",
                },
                {
                    id: 2,
                    imgurl: "/static/member/李玟-01.jpg",
                    name: "李 玟",
                    opacity1: "公關經理",
                    opacity2: "品牌行銷",
                    socialurl: "https://www.facebook.com/coco.li.509"
                },
                {
                    id: 3,
                    imgurl: "/static/member/沈育秀-01.jpg",
                    name: "沈育秀",
                    opacity1: "美術設計",
                    opacity2: "形象總監",
                    socialurl: "https://www.facebook.com/chen.xiu.1694",
                },
            ]
        }
    }

}
</script>

<style>
    .headimg {
        width: 100%;
        height: auto;
        max-height: 90vh;
    }
    .memberphoto{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 20px;
        box-shadow: 10px 10px 20px rgba(0,0,0,0.3);
    }
    #member p{
        text-align: center;
    }
    
    .fa-facebook{
        font-size: 40px;
    }
    #member .fa-facebook:hover{
        color: #EEB868;
        transform: scale(1.2);
        transition: 0.5s;
    }

    ul{
        padding-inline-start: 0px;
    }
</style>
