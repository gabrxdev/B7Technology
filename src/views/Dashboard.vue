<template>
    <main>
        <NewNav />
        <section>
            
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import NewNav from '../components/NewNav.vue'

</script>

<style scoped>
:root {
    --body-color: #18191A;
    --navbar-color: #242526;
    --hover-color: #3A3B3C;
    --text-color: #CCC;
}

main {
    font-family: 'Inter';
    height: 40em;
    width: 100vw;
    background-color: var(--body-color);
    display: flex;
}

section {
    width: 80em;
    display: flex;
    padding-top: 1em;
    margin-left: 3em;
}

</style>