<template>
    <li>
        {{ todo.text }}
        <button @click="$emit('remove', todo.id)">
            X
        </button>
    </li>
</template>

<script>
    export default {
        name: "vueItem",
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
    }
</script>

<style scoped>

</style>
