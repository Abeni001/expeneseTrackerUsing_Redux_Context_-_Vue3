<template>
    <div class="steps-container" :style="cssStyle">
        <ul class="steps-list">
            <li class="step" v-for="(step,i) in data.steps" :key="i">
                <div class="step-bubble"></div>
                <div class="step-line">
                    <div class="line-fill"></div>
                </div>
                
            </li>
        </ul>
    </div>
</template>

<script setup>
import {ref,computed} from 'vue'
    const props = defineProps({
        data:Object,
    })
    const data = ref(props.data)
    console.log(data.value.passiveColor)
    const cssStyle = computed(()=>{
        return {
            "--active-color" : data.value.activeColor,
            "--passive-color" : data.value.passiveColor,
        };
    }) 
</script>

<style scoped>
.steps-container{
    width:95%;
    margin: 0 auto;
}
.steps-list{
    display:flex;
    list-style: none;
    
}
.step{
    display:flex;
    align-items:center;
    flex-grow:1;
    max-width:100%;
    position:relative;
    height:60px; 

}
.step:last-child{
    max-width:60px
}

.step-bubble{
    width:35px;
    height:35px;
   
    border-color:red;
     border-radius:50%;
   
    transition: all .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

}
.step-line{
    width:100%;
    height: 5px;
    /* background-color: var(--passive-color); */
    position:absolute;
    top: 50%;
    left:0;
    transform: translateY(-50%);
    z-index:-10;
}
.step:last-child .step-line{
    display:none;
}

</style>