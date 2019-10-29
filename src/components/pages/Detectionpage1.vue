<template>
<div id="detectionpage1">
    <div class="container">
        <div class="row" >
            <div class="col-sm-12">
                <form action="" method="post">
                    <h2>你是容易被人情緒操縱的人嗎?</h2>
                    <div class="form-block">
                        <div v-show="step === 1" id="form_part1">
                            <ul>
                                <li class="question" v-for="(detection,index) in detections.slice(0,3)" v-bind:key="detection.id">	
                                    <h5>{{index+1}}. {{detection.question}}</h5>
                                    <ul class="option">
                                        <li  class="answer" v-for="option in options" v-bind:key="option.value">
                                            <input type='radio' :name='detection.id' :id='detection.id+option.value' :value='option.value' v-model="option.value">
                                            <label :for='detection.id+option.value'>{{option.text}}</label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="btn" @click.prevent="next()">下一頁</div>
                        </div>
                        <div v-show="step === 2" id="form_part2">
                            <ul>
                                <li class="question" v-for="(detection,index) in detections.slice(3,6)" v-bind:key="detection.id">	
                                    <h5>{{index+4}}. {{detection.question}}</h5>
                                    <ul class="option">
                                        <li  class="answer" v-for="option in options" v-bind:key="option.value">
                                            <input type='radio' :name='detection.id' :id='detection.id+option.value' :value='option.value' v-model="option.value">
                                            <label :for='detection.id+option.value'>{{option.text}}</label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="btn" @click.prevent="prev()">上一頁</div>
                            <div class="btn" @click.prevent="next()">下一頁</div>
                        </div>
                        <div v-show="step === 3" id="form_part3">
                            <ul>
                                <li class="question" v-for="(detection,index) in detections.slice(6,10)" v-bind:key="detection.id">	
                                    <h5>{{index+7}}. {{detection.question}}</h5>
                                    <ul class="option">
                                        <li  class="answer" v-for="option in options" v-bind:key="option.value">
                                            <input type='radio' :name='detection.id' :id='detection.id+option.value' :value='option.value' v-model="option.value">
                                            <label :for='detection.id+option.value'>{{option.text}}</label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div>
                                <div class="btn" @click.prevent="prev()">上一頁</div>
                                <button class="btn" type="submit" value="送出">看結果</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default({
    name: 'detectionpage1',
    data() {
        return {
            detections: [],
            options: [],
            step:1
        }
    },
    mounted() {
        this.getDataDet();
        this.getDataOpt();
    },
    methods: {
        getDataDet() {
            axios.get('../../static/detections.json').then(response => {
                this.detections=response.data.detections
                console.log(response.data);
            }, response => {
                console.log("error");
            });
            
        },
        getDataOpt() {
            axios.get('../../static/options.json').then(response => {
                this.options=response.data.options
                console.log(response.data);
            }, response => {
                console.log("error");
            });
            
        },
        prev() {
            this.step--;
        },
        next() {
            this.step++;
        },
        // shows_form_part(n){
        //     var i = 1, p = $("#form_part"+(i).toString());
        //     while (p.length != 0){
        //         if (i == n){
        //             p.show("slow");
        //         }
        //         else{
        //             p.hide("slow");        
        //         }
        //         i++;
        //         p = $("#form_part"+(i).toString());
        //     }

        // },
        // submit_form(){
        //     var sum = Number($("#num1").val()) + 
        //                 Number($("#num2").val()) + 
        //                 Number($("#num3").val());
        //     alert("The sum result is: " + sum);
        // }

    }   
})
</script>

<style>

form{
	margin-top: 20px ;
	list-style: none;
	border-radius: 5px;
    background-color: #fff;
    padding: 20px;
}
.question{
    padding: 10px;
    text-align: left;
    background-color:rgba(229,222,165,0.2);
    border-radius: 5px;
    margin-bottom: 20px;
    margin-right: 40px;
}


.answer{
    display: inline-block;
    margin-top: 10px;
}

form h2{
    font-size: 30px;
    margin-left: 40px;
}

.btn{
    margin: 10px 20px 10px 20px;
}








input[type=radio]{
    visibility:hidden;
}

label {
    background-color:rgba(229,222,165,0.25);
    position:relative;
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1;
    padding: 10px 25px;
    margin-right: 10px;
    margin-bottom: 6px;
}

input[type=radio]:checked + label{
    background-color:#EEB868;
    color:#fff;
    padding: 10px 25px;
}

input[type=submit]{
    background-color:#EEB868;
    color:#fff;
    padding: 15px 25px;
    border:none;
    border-radius: 5px;
    margin-top:30px;
    font-weight: bold;
    font-size: 18px;
}

input[type=submit]:hover{
    font-size:20px;
}



</style>