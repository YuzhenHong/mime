<template>
<div id="fog">
    <remote-js src="skrollr.min.js"></remote-js>
    <div id="skrollr-body" style="min-width: 1px; position: absolute; z-index: 1; top: -80px; height: 74722px;">
        <div class="containerf" style="background-color: rgb(199,218,231)">
            <img class="deer" src="/static/fog/deer.png" data-0="left: 45%; top:35%; display: block;" data-1200="left: 45%; top:35%; display: block;" data-2500="left: 70%;top:60%; display: block;"  data-5600="left: 70%;top:60%; display: block;" data-6600="left: 63%; top: 10%; display: block;" data-16800="left: 63%; top: 10%; display: block;" data-16900="left: 48%; top: 35%; display: block;" data-17000="left: 35%; top: 60%; display: block;" data-17400="left: 15%; top: 50%; display: block;" data-18000="left: 15%; top: 70%; display: block;" data-18500="left: 60%; top: 73%; display: block;" data-38000="left: 60%; top: 73%; display: block;" data-39000="left: 35%; top: 65%; display: block;" data-59000="left: 35%; top: 65%; display: block;" data-60000="left: 58%; top: 70%; display: block;" data-76700="left: 58%; top: 70%; display: block;" data-77200="left: 32%; top: 70%; display: block;" style="left: 45%; top:35%; display: block;">
            <img class="fourdeerfather" src="/static/fog/section4/deerfather.png" data-19000="top: 58%; left: -100%; display: block;" data-19500="top: 58%; left: 30%; display: block;" data-38000="top: 58%; left: 30%; display: block;" data-39000="top: 50%; left: 22%; display: block;" data-59000="top: 50%; left: 22%; display: block;" data-60000="top: 55%; left: 33%; display: block;" data-76700="top: 55%; left: 33%; display: block;" data-77200="top: 55%; left: 55%; display: block;" style="top: 58%; left: -100%; display: block;">
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
            <Section6></Section6>
        </div>
    </div>
</div>
</template>

<script>
import Section1 from '@/components/pages/fog/Section1'
import Section2 from '@/components/pages/fog/Section2'
import Section3 from '@/components/pages/fog/Section3'
import Section4 from '@/components/pages/fog/Section4'
import Section5 from '@/components/pages/fog/Section5'
import Section6 from '@/components/pages/fog/Section6'
export default {
    name: "Fog",
    components: {
        'remote-js': {
            render(createElement) {
                return createElement('script', {attrs: {type: 'text/javascript', src: this.src}});
            },
            props: {
                src: { type: String, required: true}
            }
        },
        Section1: Section1,
        Section2: Section2,
        Section3: Section3,
        Section4: Section4,
        Section5: Section5,
        Section6: Section6,

    },
    mounted () {
        this.$nextTick(() => {
        skrollr.init()
        console.log('bug1')
        })
    },
    
    beforeDestroy () {
        this.$nextTick(() => {
        let instance = skrollr.get()
        console.log('bug2')
        instance.destroy()
        console.log('bug2')
        })
    }
}
    let instance = skrollr.get()
    instance.destroy()
</script>


<style>

#nav,nav{
    z-index:10000;
    /* background-color: #598392; */
} 
footer{
    z-index:10000;
}
#fog{
    z-index:0;
    position:relative
}
#fog img{
    position: absolute;
}
#skrollr-body{
    width: 100%;
    height: 100%;
}
.scene {
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
}
.containerf{
    width: 100%;
    height: 100%;
    position: fixed;
}

.deer{
    height: 25%;
    z-index: 10000;
}
.fourdeerfather{
    height: 40%;
    z-index: 10000;
}

highlight{
    color: #E9CD4C;
}





</style>