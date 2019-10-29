<template>
<div id="detectioninfo">
    <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <p>{{detectioninfo.msg}} </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-4">
                        <img class="clock" src="/static/icon/計時器.png">
                    </div>
                    <div class="col-sm-4">
                        <img class="eb" src="/static/icon/情緒勒索 2.png">
                    </div>
                    <div class="col-sm-4">
                        <img class="form" src="/static/icon/表單2.png">
                    </div>
                </div>
                <router-link to="#" class="btn m10">Coming soon</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Detectionpage1 from '@/components/pages/Detectionpage1'
export default {
    name: "detectioninfo",
    data(){
        return{
            detectioninfo: {
                title: '自我檢測',
                msg: '歡迎來到「迷．麋」情緒勒索檢測處，看完情緒勒索的各種相關資訊後，是不是對情緒勒索有初步的概念了呢？想知道自己是否深陷於情緒勒索之苦嗎？以下會針對情緒勒索的特徵提出一些問題，即使您沒感覺到情緒勒索，做個小測驗也無妨喔～這些題目可以幫助您替自己或是您關心的人來鑒別有沒有相關困擾。檢測只需三分鐘便能完成，相信對您會有幫助！'
            }
        }
    }
}
</script>

<style>
#detectioninfo p{
    color: #fff;
}
.fas.fa-user-clock,.far.fa-list-alt,.fas.fa-cloud-rain{
    font-size: 100px;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 50px;
}
.clock{
    width: 200px;
    height: 200px;
}
.form{
    width: 200px;
    height: 200px;
}
.eb{
    width: 200px;
    height: 200px;
}
.m10{
    margin-top: 30px;
}
</style>