<template>
  <div id="app" v-cloak>
    <Navbar></Navbar>  
      <router-view></router-view>
    <Footer></Footer> 
    <v-goTop></v-goTop>
  </div>
</template>

<script>
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import GoTop from "./components/shared/GoTop";
export default {
  name: 'App',
  components:{
    Navbar: Navbar,
    Footer: Footer,
    'v-goTop': GoTop
  }
}
</script>

<style>
#app {
  font-family: '微軟正黑體', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0px;
  background-color: #598392;
}

h2{
    font-weight: bold;
    color: #EEB868;
    text-align: left;
  }
h3{
  color: #EEB868;
  font-weight: 550;
  margin-top: 10px;
  }
p{
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 1.8;
  font-weight: 550;
  padding-bottom: 10px;
  color: #598392;
  text-align: left;
}
hr{
  width: 60px;
  height: 10px;
  border: none;
  margin-left: 0;
  background-color: rgba(89,131,146,0.5);
}
ul{
  list-style: none;
}
section{
  padding-top: 40px;
  padding-bottom: 30px;
  font-family: '微軟正黑體';
}
.content{
  background-color: #fff;
  padding: 30px 30px 20px 30px;
  border-radius: 5px;
  box-shadow: 15px 15px 0px #EEB868;
  transition: 1s;
  margin: 20px 0px 30px 0px;
  height: auto;
}
.content:hover{
  transform: translate(-5px,-5px);
}
.btn {
  background-color: rgba(238,184,104,0.7);
  color: #fff;
  font-size: 18px;
  transition: 0.5s;
}
.btn:hover{
  background-color: #EEB868;
  color: #fff;
  transform: scale(1.1);
  box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
}
[v-cloak] {
    display: none !important;
}


</style>
