<template>
    <main>
        <Navbar />
        <section>
            <div :id="card.id" v-for="card in cards" :key="card" class="card">
                <div class="icone">
                    <span class="material-symbols-rounded">{{ card.icone }}</span>
                </div>
                <div class="informacoes">
                    <h3>{{ card.titulo }}</h3>
                    <p>{{ card.conteudo }}</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'

const cards = ref([
    { id: 'saldo', icone: 'account_balance', titulo: 'Saldo', conteudo: 'R$ 434,00' },
    { id: 'consultas', icone: 'data_usage', titulo: 'Consultas feitas', conteudo: '34' },
    { id: 'bases', icone: 'leaderboard', titulo: 'Bases ativas', conteudo: 'Cadsus' }
])
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
    background-color: #18191A;
    display: flex;
}

section {
    margin: 0 auto;
    width: 80em;
    display: flex;
    gap: 3em;
    justify-content: center;
    padding-top: 1em;
}

.card {
    background-color: var(--navbar-color);
    display: flex;
    height: 5em;
    width: 16em;
    color: #FFF;
    align-items: center;
    gap: 1em;
    padding: 0.2em 1em;
    border-radius: 6px;
}
.card h3{
    color: #CCC;
}
.card p{
    color: #ababab;
    font-weight: 500;
    margin-top: 0.1em;
}
.card span{
    font-size: 50px;
    background-color: var(--hover-color);
    padding: 0.1em 0.1em;
    border-radius: 6px;
}
.informacoes{
    display: flex;
    flex-direction: column;
}
#consultas{
    width: 17em;
}
</style>