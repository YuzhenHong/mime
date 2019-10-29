<template>
<div id="Detection">
    <section>
        <div class="container" id="title">
            <div class="row">
                <div class="col-sm-12">
                    <h2> {{detectioninfo.title}}</h2>
                    <hr>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </section>
</div>
</template>

<script>
import DetectionInfo from '@/components/pages/DetectionInfo'
export default {
    name: "Detection",
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
#title p{
    color: #fff
}
hr{
    background-color: rgba(255,255,255,0.5);
    }
</style>