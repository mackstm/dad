<template>
    <div class="mt-4 container text-center">
        <h1 class="text-primary">Composition</h1>
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
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
    name: 'CounterComposition',
    setup() {
        const counter = ref(0);

        const increment = () => {
            counter.value++;
        };

        const subtract = () => {
            if (counter.value > 0) {
                counter.value--;
            }
        }

        const double = () => {
            counter.value *= 2;
        }

        const restart = () => {
            counter.value = 0;
        }

        const updateCounter = (event) => {
            counter.value = Math.abs(parseInt(event.target.value));
        }

        return { counter, increment, subtract, double, restart, updateCounter};
    }
})
</script>

<style scoped>

/* .container {
    font-family: Arial, sans-serif;
    text-align: center;
} */

</style>