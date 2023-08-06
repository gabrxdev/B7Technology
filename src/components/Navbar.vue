<template>
    <nav :style="{ width: expandNav }">
        <img @click="nav" src="../assets/images/bloco7Purple.jpg">
        <div class="links">
            <router-link :style="{ width: expandDiv }" v-for="link in links" :key="link" :to="link.path" :id="link.id"><span
                    class="material-symbols-rounded">{{
                        link.icone }}</span>{{ link.content }}</router-link>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
// Loop do array de links
const links = ref([
    { path: '/central', icone: 'grid_view', content: 'Dashboard', id: 'dashboard' },
    { path: '/consulta', icone: 'person_search', content: 'Consulta', id: 'consulta' },
    { path: '/usuarios', icone: 'admin_panel_settings', content: 'Usuários', id: 'usuarios' },
    { path: '/ajustes', icone: 'display_settings', content: 'Ajustes', id: 'configuracoes' },
    { path: '/', icone: 'logout', content: 'Sair', id: 'sair' }
])

// Função de aumentar/diminuir a nav
const isExpanded = ref(false)
const nav = () => (isExpanded.value = !isExpanded.value)
const expand = 14
const shrink = 5
const expandNav = computed(() => `${isExpanded.value ? expand : shrink}em`)
// Aumentar/diminuir hover das divs
const expandDiv = computed(() => `${isExpanded.value ? divExpanded : divShrink}em`)
const divExpanded = 10.5
const divShrink = 2.5
</script>

<style scoped lang="scss">
:root {
    --body-color: #18191A;
    --navbar-color: #242526;
    --hover-color: #3A3B3C;
    --text-color: #CCC;
}

nav {
    background-color: var(--navbar-color);
    display: flex;
    flex-direction: column;
    height: 36em;
    width: 14em;
    gap: 8px;
    transition: all ease-in 0.1s;
    border-radius: 15px;
    margin-left: 2em;
    margin-top: 1em;
    overflow: hidden;
}

nav img {
    width: 3em;
    border-radius: 6px;
    margin-top: 1.5em;
}

nav img {
    margin-left: 1em;
}

.links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5em 0.8em;
    width: 3.2em;
    border-radius: 6px;
    transition: all ease-in 0.2s;
    gap: 10px;
}

a:hover {
    background-color: var(--hover-color);
}

a {
    color: var(--text-color);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1.7em;
    width: 15em;
    padding: 0.5em 0.5em;
    border-radius: 4px;
    transition: all ease-in 0.1s;
    margin-left: 0.5em;
    font-weight: 600;
}

a.router-link-active {
    background-color: #7D2AE8;

    .material-symbols-rounded {
        font-variation-settings: 'FILL' 1;
    }
}

#sair {
    position: absolute;
    bottom: 4em;
    overflow: hidden;
}
</style>