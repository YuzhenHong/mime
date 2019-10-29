<template>
<div class="scene" data-1500="top: 100%;" data-2500="top: 0%; " data-5600="top: 0%; " data-6600="top: -100%; display: block;" data-6601="top: -100%; display: none;" style="top: 0%;display: block">
    <div class="section2">
        <div class="section2-inner">
            <img class="twostoneleft" src="/static/fog/section2/2-stoneleft.png" data-3100="left: 0%; display: block;" data-5600="left: 0%; display: block;" data-6100="left: -100%; display: block;" style="left: 0%; display: block;">
            <img class="twostoneright" src="/static/fog/section2/2-stoneright.png" data-3100="right: 3%; display: block;" data-5600="right: 3%; display: block;" data-6100="right: -100%; display: block;" style="right: 3%; display: block;">
            <img class="twoboard" src="/static/fog/section2/2-board.png" data-2500="left: -100%; display: block;" data-3100="left: 5%; display: block;" data-5600="left: 5%; display: block;" data-6100="left: -100%; display: block;" style="left: -100%; display: none;">
            <img class="twograss" src="/static/fog/section2/2-grass.png" data-2500="bottom: -100%; display: block;" data-3100="bottom: 15%; display: block;" data-5600="bottom: 15%; display: block;" data-6100="bottom: -100%; display: block;" data-6101="bottom: -100%; display: none;" style="bottom: -100%; display: none;">
            <p class="twotext1" data-3100="left: 15%; display: none;" data-3101="left: 15%; display: block;" data-3600="left: 15%; display: none;" style="left: 15%; display: none;"><highlight>「情緒勒索」</highlight>到底是什麼呢？<br>近年越來越多人把這個詞掛在嘴邊，但你真<br>的知道情緒勒索的定義嗎？</p>
            <p class="twotext2" data-3600="left: 15%; display: none;" data-3601="left: 15%; display: block;" data-4100="left: 15%; display: none;" style="left: 15%; display: none;">這個詞最初由<highlight>蘇珊.福沃德(Susan Forward)</highlight><br>這位心理治療家提出，意指一種<highlight>無法為</highlight>自己<br>的負面情緒負責，並企圖以<highlight>威脅、利誘</highlight>的方<br>式來<highlight>迫使他人順從</highlight>的行為模式。</p>
            <p class="twotext3" data-4100="left: 15%; display: none;" data-4101="left: 15%; display: block;" data-4600="left: 15%; display: none;" style="left: 15%; display: none;">情緒勒索是<highlight>宰制行動</highlight>中最有利的形式，所有<br>勒索的中心就是基本的<highlight>威脅恐嚇</highlight>，只是它會<br>以許多不同的面貌出現。</p>
            <p class="twotext4" data-4600="left: 15%; display: none;" data-4601="left: 15%; display: block;" data-5100="left: 15%; display: none;" style="left: 15%; display: none;">情緒勒索之所以能擊中我們內心的要害，是<br>因為勒索者非常瞭解我們「珍惜與他們之間<br>的關係」，以及抓住了我們的「弱點」。因<br>此他們會<highlight>利用親密關係</highlight>迫使我們讓步。
            <p class="twotext5" data-5100="left: 20%; display: none;" data-5101="left: 20%; display: block;" data-5600="left: 20%; display: none;" style="left: 20%; display: none;">快來跟著迷 ‧ 麋一探情緒勒索的內幕！</p>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.section2{
    height: 100%;
    background: #31664A;
}

.section2-inner{
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    position: relative;
}
.twoboard{
    height: 75%;
    top: 10%;
}
.twograss{
    height: 10%;
    left: 10%;
}
.twostoneleft{
    height: 5%;
    top: 70%;
}
.twostoneright{
    height: 5%;
    top: 40%;
}
.twotext1,.twotext2,.twotext3,.twotext4,.twotext5{
    font-size: 25px;
    position: absolute;
    text-align: center;
}
.twotext1{
    top: 30%;
    color: #ddd;
}
.twotext2{
    height: 30%;
    top: 30%;
    color: #ddd;
}
.twotext3{
    height: 30%;
    top: 35%;
    color: #ddd;
}
.twotext4{
    height: 30%;
    top: 30%;
    color: #ddd;
}
.twotext5{
    height: 10%;
    top: 40%;
    color: #ddd;
}
</style>