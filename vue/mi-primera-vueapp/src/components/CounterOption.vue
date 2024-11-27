<template>
    <div class="mt-4 container text-center">
        <h1 class="text-success">Option</h1>
        <h1 class="text-danger">{{ counter }}</h1>

        <label class="form-label" for="number">Introduzca número aquí:</label>
        <input class="form-control w-25 text-center m-auto" type="number" id="number" :value="counter" @change="updateCounter"/>

        <button class="btn btn-success m-2" @click="increment">Incrementar</button>
        <button class="btn btn-danger m-2" @click="subtract">Restar</button>
        <button class="btn btn-primary m-2" @click="double">Duplicar</button>
        <button class="btn btn-warning m-2" @click="restart">Reiniciar</button>

        <div v-if="counter >= 10">El valor es alto</div>
    </div>
    
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CounterOption',
    data(){
        let counter = 0;
        return {counter}
    },
    methods:{
        increment(){
            this.counter++;
        },
        subtract() {
            if (this.counter > 0) {
                this.counter--;
            }
        },
        double() {
            this.counter *= 2;
        },
        restart() {
            this.counter = 0;
        },
        updateCounter(event) {
            this.counter = Math.abs(parseInt(event.target.value));
        }
    }
})
</script>

<style scoped>

/* .container {
    font-family: Arial, sans-serif;
    text-align: center;
} */

</style>