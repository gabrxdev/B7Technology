<template>
    <main>
        <Navbar />

        <section>
            <div class="header">
                <span class="material-symbols-rounded">group</span>
                <h2>Consulta</h2>
            </div>

            <div class="input-area">
                <div class="input-consulta">
                    <span class="material-symbols-rounded">data_loss_prevention</span>
                    <input v-model="inputConsulta" :maxlength="maxLenght" :disabled="disabled" :type="type"
                        :placeholder="placeholder">
                    <button>Consultar</button>
                </div>
                <div class="selection-area">
                    <div @click="toggle()" class="select-area">
                        <span id="input">{{ spanContent }}</span>
                        <span
                            :class="['material-symbols-rounded', { 'arrow-up': show, 'arrow-down': !show }]">expand_more</span>
                    </div>
                    <div v-show="show" class="opcoes">
                        <span @click="nome">Nome completo</span>
                        <span @click="cpf">Cadastro de Pessoa Física (CPF)</span>
                        <span @click="numero" class="last">Número de celular</span>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import { ref, computed } from 'vue'
const placeholder = ref('Digite os dados')
const spanContent = ref('Selecione uma opção')
const disabled = ref(true)
const type = ref('text')
const maxLenght = ref(40)
const inputConsulta = ref('')
const nome = () => {
    spanContent.value = 'Nome completo'
    show.value = false
    placeholder.value = 'Digite o nome completo'
    disabled.value = false
    maxLenght.value = 40
    inputConsulta.value = ''
}
const cpf = () => {
    spanContent.value = 'Cadastro de Pessoa Física (CPF)'
    show.value = false
    placeholder.value = 'Digite o número do CPF'
    disabled.value = false
    maxLenght.value = 11
    inputConsulta.value = ''
}
const numero = () => {
    spanContent.value = 'Número de celular'
    show.value = false
    placeholder.value = 'Digite o número do celular'
    disabled.value = false
    maxLenght.value = 11
    inputConsulta.value = ''
}

const show = ref(false)
const toggle = () => (show.value = !show.value)
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
    display: flex;
    height: 100vh;
    width: 100vw;
}

section {
    position: relative;
    margin: 0 auto;
    width: 30em;
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 1em;
}

.header {
    color: #FFF;
    display: flex;
    align-items: center;
    gap: 1em;
    font-weight: 700;
}

.header span {
    font-variation-settings: 'FILL' 1;
    background-color: #7D2AE8;
    padding: 0.2em 0.2em;
    border-radius: 5px;
}

.header h2 {
    font-size: 30px;
}

.input-area {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5em;
}

.input-consulta {
    display: flex;
    gap: 0.5em;
    position: relative;
}

.input-consulta button {
    border: none;
    background-color: #7D2AE8;
    border-radius: 6px;
    cursor: pointer;
    font-family: 'Inter';
    color: #FFF;
    padding: 1em 1.5em;
    font-weight: 600;
    transition: all ease-in 0.3s;
    letter-spacing: 0.5px;
}

.input-consulta button:hover {
    background-color: #8a43e7
}

.input-consulta input {
    background-color: var(--navbar-color);
    height: 3.5em;
    width: 26em;
    border: none;
    border-radius: 6px;
    font-family: 'Inter';
    padding: 2em 4em;
    outline: none;
    color: #CCC;
}

.input-consulta span {
    color: #CCC;
    position: absolute;
    bottom: 0.6em;
    left: 0.6em;
    transition: all ease-in 0.2s;
}

.select-area {
    height: 3.5em;
    width: 29em;
    color: #CCC;
    background-color: var(--navbar-color);
    border-radius: 6px;
    position: relative;
    cursor: pointer;
    padding: 1em 2em;
}

.select-area .material-symbols-rounded {
    position: absolute;
    right: 0.6em;
    bottom: 0.6em;
}

.selection-area {
    display: flex;
    flex-direction: column;
    gap: 1em;
    transition: all ease-out 0.1s;
}

.opcoes {
    height: 9em;
    width: 29em;
    background-color: var(--navbar-color);
    color: #CCC;
    padding: 1em 2em;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    gap: 0.1em;
}

.opcoes span {
    padding: 0.5em 0.5em;
    width: 17em;
    border-radius: 6px;
    transition: 0.2s ease-in all;
}

.opcoes span:hover {
    background-color: var(--hover-color);
    cursor: pointer;
}

.arrow-up {
    transform: rotate(180deg)
}

.arrow-down {
    transform: rotate(0deg)
}
</style>