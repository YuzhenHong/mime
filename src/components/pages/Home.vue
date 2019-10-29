<template>
<div>
  <img class="headimg" src="/static/headimg.png">
  <section id="mime">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 content">
          <h2> {{mime.title}}
            <span>{{mime.subtitle}}</span>
          </h2>
          <hr>
          <p v-html="mime.msg"></p>
          <div class="row" id="element">
            <ul class="col-sm-4" v-for="element in elements" v-bind:key="element.id">
              <li>
                <img class="icon" :src="element.imgurl">
                <h3>{{element.reason}}</h3>
                <div class="toolbox">
                  <p v-html="element.description"></p>
                </div>
              </li>
            </ul>
          </div>
          <router-link to="/About" class="btn">去看看</router-link>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 content"> 
          <h2> {{foginfo.title}}</h2>
          <hr>
          <p v-html="foginfo.msg"></p>
          <router-link to="/Fog" class="btn">去看看</router-link>
        </div>
        <div class="col-sm-4">
          <img src="/static/icon/情緒勒索 2.png" class="smallimg">
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-4"> 
            <img src="/static/icon/表單.png" class="smallimg">
        </div>
        <div class="col-sm-8 content"> 
              <h2> {{detectinfo.title}}</h2>
              <hr>
              <p v-html="detectinfo.msg"></p>
              <router-link to="/Detection" class="btn">去檢測</router-link>
        </div>
        
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-8 content"> 
          <h2> {{informationinfo.title}}</h2>
          <hr>
          <p v-html="informationinfo.msg"></p>
          <router-link to="/Information" class="btn">去看看</router-link>
        </div>
        <div class="col-sm-4"> 
          <img src="/static/icon/放大鏡.png" class="smallimg">
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container" id="show">
      <div class="row">
        <div class="col-sm-12 content"> 
          <h2> {{show.title}}</h2>
          <hr>
          <div class="row">
            <div class="col-sm-6">
              <h3>校內展</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.3796550275833!2d121.54583841500539!3d24.98721228399433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346801fd50239bcd%3A0xa65aac763e031255!2z5LiW5paw5aSn5a24566h55CG5a246Zmi!5e0!3m2!1szh-TW!2stw!4v1567944895327!5m2!1szh-TW!2stw" width="250" height="250" frameborder="0" style="border:0;" allowfullscreen=""></iframe>   
              <p>時間 : 2019/10/30(三)-11/1(五)<br>地點 : 世新大學管理學院</p>
            </div>
            <div class="col-sm-6">
              <h3>校外展</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.9022603078697!2d121.50039331187766!3d25.037390810325977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9a8d017b6dd%3A0xff3361bbadd40fe9!2z5Ymd55qu5a-u5q235Y-y6KGX5Y2A!5e0!3m2!1szh-TW!2stw!4v1563938336466!5m2!1szh-TW!2stw" width="250" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
              <p>時間 : 2019/12/6(五)-12/8(日)<br>地點 : 剝皮寮歷史街區</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 content"> 
          <h2> {{info5.title}}</h2>
          <hr>
          <ul class="sponsor">
            <li v-for="sponsor in sponsors" v-bind:key="sponsor.id"> 
              <img :src="sponsor.imgurl">
              <p>{{sponsor.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      mime:
        {
          title: '「迷．靡」',
          subtitle: '出走糜爛的迷霧之途',
          msg: '您好，我們是105世新大學資訊傳播學系的學生。我們的畢業專題以<highlight>「親子間的情緒勒索」</highlight>做發想，探討家庭成員之間相處的模式和界線。專題名稱<highlight>「迷·麋」</highlight>代表了以下幾個含義：',
        },
      foginfo:{
          title: '親子間的情緒勒索',
          msg: '你聽過情緒勒索嗎？<highlight>「情緒勒索」</highlight>到底是什麼呢？近幾年來爆紅的這個詞你真的知道它實際上代表的意義嗎？快讓我們來一探究竟吧！'
        },
        detectinfo:{
          title: '自我檢測',
          msg: '<highlight>三分鐘檢測您是否深陷情緒勒索之苦！</highlight> 我們設計了一些問題來檢測您是否深陷於情緒勒索之中，即使您沒感覺到自己和情緒勒索有關，做個小測驗也無妨喔～這些題目可以幫助您替自己或您關心的人來鑒別有沒有相關方面的困擾。希望對您有幫助！'
        },
        informationinfo:{
          title: '相關資訊',
          msg: '迷．麋團隊整理許多詮釋了情緒勒索的相關作品，例如：書籍、電影、影集、雜誌等。閒時之餘不妨參考看看，希望能藉由這些媒介讓您更了解情緒勒索！'
        },
        show:{
          title: '展出資訊',
          subtitle: '',
          msg: ''
        },
        info5:{
          title: '贊助廠商',
          subtitle: '',
          msg: ''
        },
      elements:[
        {
          id: 0,
          imgurl: 'https://i.postimg.cc/BZxyNyXt/icon-final-1.png',
          reason: '迷霧',
          description: '情緒勒索由<highlight>恐懼(Fear)</highlight>、<highlight>義務(Obligation)</highlight>、<highlight>罪惡感(Guilt)</highlight>三個核心概念組合而成，因此取其英文首字母之雙關意<highlight>「FOG」</highlight>，如迷霧般之<highlight>「迷」</highlight>。'
        },
        {
          id: 1,
          imgurl: 'https://i.postimg.cc/NGxL2RJq/icon-1.png',
          reason: '迷路',
          description: '<highlight>「迷」</highlight>意即處於親子關係之中，雙方陷入勒索的<highlight>迴圈</highlight>狀態，如同在<highlight>「迷」</highlight>霧中<highlight>「迷」</highlight>路般，<highlight>「迷」</highlight>失自我、難以出逃。'
        },
        {
          id: 2,
          imgurl: 'https://i.postimg.cc/gkpNgyYM/icon-circle.png',
          reason: '糜爛',
          description: '一段關係若進入情緒勒索的迴圈中，「關係」本體便已<highlight>腐敗、糜爛</highlight>。'
        }
      ],
      sponsors :[
        {
          id: 0,
          name: '男朋友',
          imgurl: 'static/sponsors/boyfriend.png'
        }
        ,
        {
          id: 1,
          name: "畫兒",
          imgurl: 'static/sponsors/chez.jpg'
        },
        {
          id: 2,
          name: '犀牛盾',
          imgurl: 'static/sponsors/shinoshield.jpeg'
        },
        {
          id: 3,
          name: 'PONCHI',
          imgurl: 'static/sponsors/松鼠-黑.jpg'
        },
        {
          id: 4,
          name: '兜',
          imgurl: 'static/sponsors/兜logo.jpg'
        }
        
]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @keyframes toolbox{
    0%{
    top:0px;
  }
    50%{
      top:10px; 
    }
    100%{
      top:0px;
    }
  }
  @keyframes jumping{
    0%{
    top:0px;
    box-shadow: 0px 50px 40px rgba(black,0.2)
  }
    50%{
      top:10px; 
      box-shadow: 0px 10px 10px rgba(black,0.2)
    }
    100%{
      top:0px;
      box-shadow: 0px 50px 40px rgba(black,0.2)
    }
  }
  
  .headimg {
    width: 100%;
    height: auto;
    max-height: 650px;
  }
  
  .icon{
    position: relative;
    width: 160px;
    height: 160px;
    background-color: #598392;
    border-radius: 50%;
}
highlight{
  color: #EEB868;
}

.toolbox::before{
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  top: -40px;
  left: 50%;
  transform: translate(-50%);
  border-width: 20px;
  border-style: solid;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: rgba(229,222,165,0.25);
  border-left-color: transparent;
}

.toolbox{
  width: 250px;
  max-height: 150px;
  height: auto;
  background-color: rgba(229,222,165,0.25);
  border-radius: 5px;
  position: relative;
  margin: 20px 10px 20px 10px; 
  animation: toolbox 2s infinite 
}

#mime span{
  font-size: 25px;
  color: #bbb;
}

#element li{
  display: flex;
  align-items: center;
  flex-direction: column;
}
#element p{
  font-size: 15px;
  padding: 10px;
  color: rgba(0,0,0,0.6);
}
#right .row .col-sm-8{
  display: flex;
  justify-content: flex-end;
}
#show h3{
  color: #598392;
  font-weight: 550;
  font-size: 25px;
}
#show p{ 
  text-align: center;
}
.sponsor{
  padding: 10px;
  display: flex;
  text-align: center;
}
.sponsor li{
  padding: 0px 25px 0px 25px;
  transition: 0.5s;
}
.sponsor img{
  width: 150px;
  height: 150px;
  padding-bottom: 15px;
}

.sponsor p{
  background-color: rgba(89,131,146,0.5);
  color: #fff;
  text-align: center;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
}
.sponsor li:hover{
  transform: scale(1.1);
}
.smallimg{
  width: 250px;
  height: 250px;
  margin: 10px 40px 10px 40px;
  animation: jumping 2s infinite ;
  position: relative;
}




</style>
