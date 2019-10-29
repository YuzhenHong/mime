<template>
    <form id="contact_form"  v-on:submit.prevent="submitForm" action="">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <input v-model="name" v-on:blur="isValidName" class="form-control" name="name" type="text" placeholder="您的名字"/>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <input v-model="email" v-on:blur="isValidEmail" class="form-control" name="email" type="email" placeholder="Email"/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-group">
                        <textarea v-model="message" v-on:blur="isValidMessage" class="form-control" name="message" placeholder="建議與指教" rows="8"></textarea>
                    </div>
                    <!-- <p class="alert alert-warning" v-show="errorMessage.length > 0" v-html="errorMessage"></p> -->
                    <button type="submit" class="btn">送出</button>
                </div>
            </div>
        </div>
    </form>

</template>
<script>
new Vue({
    el: '#contact_form', 
    data: {
        name: '',   
        email:'',   
        message:'', 
        errorMessage: ''
    },
    methods: { 
        isValidName: function () { 
            var valid = this.name.length > 0;
            console.log('checking for a valid name: ' + valid);
            return valid;
        },
        isValidEmail: function () { 
            var valid = this.email.indexOf('@') > 0;
            console.log('checking for a valid email: ' + valid);
            return valid;
        },
        isValidMessage: function () { 
            var valid = this.message.length > 0;
            console.log('checking for a valid message: ' + valid);
            return valid;
        },
        checkMessage: function () {
            // TODO keep the message below maxMessageLength?
            //      or maybe change the text, background, or counter color?
        },
        submitForm: function () {
            // TODO prevent form from submitting if email or message is
            //  invalid and display message like name error below
            // TODO what if more than one field is invalid?
            if (! this.isValidName()) {
                // TODO what should the errorMessage look like for multiple
                //  messages?
                this.errorMessage = 'Please include your name.';
                return false;
            } else {
                this.errorMessage = '';
            }
            console.log('submitting message...');
            // TODO submit to form processor
            this.$http({url: '/someUrl', method: 'POST', data: {
                name: this.name,
                email: this.email,
                message: this.message
            }}).then(function () {
                // TODO how could you use errorMessage to create a message
                //  for success?
                alert('Your form was submitted!');
            }, function () {
                this.errorMessage = 'Form submission failed.';
            });
        }
    }
});
<style>

</style>