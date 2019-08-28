<template>
<div>
    <p>Count: {{ counter }}</p>
    <button class="btn btn-info" @click="increased()">Increment</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increased() {
            this.counter++;
        }
    }
}
</script>