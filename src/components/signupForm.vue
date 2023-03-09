<template>
    <form @submit.prevent="submitForm">
        <div  class="flex  justify-center my-14  ">
            <div class=" text-white pr-5 table z-20  ">
                <input for="name" @blur="validateName" class="  relative  clr-white text-xs h-11 px-5  rounded-sm text-white " type="text" name="" placeholder="Your Name">
                <div class="error text-xs" style="color:rgba(255, 255, 255, 0.6);" v-if="nameError" :class="{ error: true, active: nameError }">{{ nameError }}</div>
            </div>
            <div class="text-black z-20"> 
                <input for="email"  @blur="validateEmail"  class=" relative clr-white text-xs h-11 px-5 rounded-sm text-white" type="text" name="" placeholder="Your Email">
                <div class="error text-xs" style="color:rgba(255, 255, 255, 0.6);" v-if= "emailError" :class="{ error: true, active: emailError }">{{ emailError }}</div>
            </div>  
        </div>
        <button type="submit"
        style="box-shadow: 0px 4px 14.88px 1.12px rgba(27, 139, 249, 0.4); font-family :'hind', sans-serif; " class=" z-20 custom-btn 
        delay-75 bg-blue-500 hover:bg-blue-600 duration-400 justify-center cursor-pointer text-2xl font-bold text-white py-5 px-12  absolute  rounded-full" >CALL TO ACTION</button>
    </form>
</template>
<script>

export default {
    data(){
        return{
            name:'',
            email:'',
            nameError:'',
            emailError:''
        }
    },
    methods:{
        validateName(){
            if(!this.name){
                this.nameError = 'Name is required'
            }else{
                this.nameError= ''
            }
            
        },
        validateEmail(){
            if(!this.email){
                this.emailError = 'Email is required'
            }else if(!this.email.includes('@')){
                this.emailError = 'Email most by valid'
            }else{
                this.emailError =''
            }
        },
        validateForm(){
            this.validateName()
            this.validateEmail()
            if(!this.nameError && !this.emailError){
                alert('Form submitted successfuly')
            }
        }
    },
    mounted(){
        this.$el.addEventListener('submit',this.validateForm)
    },
}
</script>
<style>
    input:focus + .error {
    animation: shake 0.5s;
}

@keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
    75% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
}

.error {
    color: red;
    margin-top: 5px;
    opacity: 0;
    transition: opacity 0.5s;
}

.error.active {
    opacity: 1;
}
</style>