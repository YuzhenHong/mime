<template>
<div class="scene" data-1500="top: 0%; display: block" data-2500="top: -100%; display: block" data-2501="top: -100%; display: none;" style="top: 0% display: block">
    <div class="sky" style="background: rgb(199, 218, 231);">
        <div class="sky-inner">
            <img class="moutains" src="/static/fog/section1/moutains.png" data-0="left: 0%; display: block;"  data-1000="left: -100%; display: none;" style="left: 0%; left: 0%; display: block;">
        </div>
    </div>
    <div class="ground">
        <div class="ground-inner">
            <img class="treeleft" src="/static/fog/section1/treeleft.png"  data-0="left: 3%; display: block;" data-1000="left: 100%; display: none;" style="left: 3%; display: block;">
            <img class="treeright" src="/static/fog/section1/treeright.png" data-0="top: -20%; display: block;" data-1000="top: -100%; display: none;" style="top: -20%; display: block;">
            <img class="tree" src="/static/fog/section1/tree.png" data-0="top: 20%; display: block;" data-1000="top: 100%; display: none;" style="top: 20%; display: block;">
            <img class="grasses" src="/static/fog/section1/grasses.png" data-0="left: 5%; display: block;" data-1000="left: -100%; display: none;" style="left: 5%; display: block;">
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.sky{
    height: 360px;
    background: #C7DAE7;
    /* overflow-y: hidden; */
}
.sky-inner{
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    min-height: 280px;
}
    
.moutains{
    height: 75%;
    bottom: -5%;
}
.ground{
    height: 100%;
    background: #325F47;
}
.ground-inner{
    width: 1000px;
    height: 100%;
    min-height: 400px;
    margin: 0 auto;
    padding: 3% 0;
    position: relative;
}
.treeleft{
    height: 35%;
    top: -20%;
}
.treeright{
    height: 35%;
    right: 3%;
}
.tree{
    height: 10%;
    left: 50%;
    transform: translateX(-50%);
}

.grasses{
    height: 35%;
    top: 5%;
}
</style>