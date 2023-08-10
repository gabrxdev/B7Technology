<template>
    <main>
        <NewNav />

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
                    <button @click="resultadoFunc">Consultar</button>
                </div>
                <div class="selection-area">
                    <div @click="toggle()" class="select-area">
                        <span id="input">{{ spanContent }}</span>
                        <span
                           :class="['material-symbols-rounded', { 'arrow-up': show, 'arrow-down': !show }]">arrow_drop_down</span>
                    </div>
                    <div v-show="show" class="opcoes">
                        <span @click="nome">Nome completo</span>
                        <span @click="cpf">Cadastro de Pessoa Física (CPF)</span>
                        <span @click="numero" class="last">Número de celular</span>
                    </div>
                </div>
            </div>

            <div v-show="resultado" v-for="dados in dadosConsulta" :key="dados" class="resultado-area">
                <div class="nome-container">
                    <h4>Nome</h4>
                    <p>{{ dados.nome }}</p>
                </div>

                <div class="cpf-container">
                    <h4>CPF</h4>
                    <p>{{ dados.cpf }}</p>
                </div>

                <div class="nascimento-container">
                    <h4>Nascimento</h4>
                    <p>{{ dados.nascimento }}</p>
                </div>
                <button @click="openModal" class="openModal">Abrir</button>
            </div>

        </section>

        <div v-show="showModal" class="modal">
            <span @click="closeModal" id="close" class="material-symbols-rounded">close</span>

            <h3>Resultados</h3>
            <p class="conteudo" v-for="dados in dadosConsulta" :key="dados">Nome: <strong>{{ dados.nome }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">CPF: <strong>{{ dados.cpf }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Nascimento: <strong>{{ dados.nascimento }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Sexo: <strong>{{ dados.sexo }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Status receita federal: <strong>{{ dados.statusReceita }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Óbito: <strong>{{ dados.obito }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Nacionalidade: <strong>{{ dados.nacionalidade }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Nome da Mãe: <strong>{{ dados.nomeMae }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Escolaridade: <strong>{{ dados.escolaridade }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Profissão: <strong>{{ dados.profissao }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Renda: <strong>{{ dados.renda }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Telefone: <strong>{{ dados.telefone }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Logradouro: <strong>{{ dados.logradouro }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Número: <strong>{{ dados.numero }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Complemento: <strong>{{ dados.complemento }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Bairro: <strong>{{ dados.bairro }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">Cidade: <strong>{{ dados.cidade }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">CEP: <strong>{{ dados.cep }}</strong></p>
            <p v-for="dados in dadosConsulta" :key="dados">CPNJ: <strong>{{ dados.cpnj }}</strong></p>
            <div class="acoes">
                <span @click="copiarConteudo" class="material-symbols-rounded">content_copy</span>
                <span class="material-symbols-rounded">picture_as_pdf</span>
                <span class="material-symbols-rounded">screenshot_monitor</span>
            </div>
        </div>
        <div v-if="showModal" class="overlay">

        </div>
    </main>
</template>

<script setup>
import NewNav from '../components/NewNav.vue'
import { ref, computed } from 'vue'

const placeholder = ref('Selecione uma forma de consulta')
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

const dadosConsulta = ref([
    { nome: 'Francisco Fabiano Bessa Filho', 
    cpf: '00791329445', 
    nascimento: '27/03/1985',
    sexo: 'M',
    statusReceita: 'Regular',
    obito: 'Não',
    nacionalidade: 'Brasileiro',
    nomeMae: 'Sandra Sueli Bezarra Tavares',
    cpfMae: '32674120487',
    escolaridade: 'Superior completo',
    profissao: 'Diretor geral de empresa',
    renda: 'R$ 7.888 / R$ 15.7600',
    telefone: '83988183127',
    logradouro: 'Rua olegario mariano',
    numero: '371',
    complemento: 'Não consta',    
    bairro: 'Catole',
    cidade: 'Campina grande - PB',
    cep: '58410124',
    cpnj: '01934957000178',
 }
])
const show = ref(false)
const toggle = () => (show.value = !show.value)

const resultado = ref(false)
function resultadoFunc(){
    resultado.value = true
}

// Modal
const showModal = ref(false)
const closeModal = ()=> (showModal.value = !showModal.value)
const openModal = ()=> (showModal.value = !showModal.value)

const conteudo = document.querySelector('.conteudo')
</script>

<style scoped>
:root {
    --body-color: #18191A;
    --navbar-color: #212121;
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
    width: 30em;
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 1em;
    margin: 0 auto;
    margin-top: 5em;
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
.selection-area span{
    transition: all linear 0.1s;
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

.resultado-area{
    color: #CCC;
    display: flex;
    gap: 3em;
    justify-content: space-between;
    padding: 0.6em 0.8em;
    background-color: var(--navbar-color);
    border-radius: 6px;
    cursor: pointer;
    width: 40em;
    position: relative;
    right: 5em;
}
.resultado-area button{
    padding: 1em 2em;
    border-radius: 6px;
    background-color: #7D2AE8;
    color: #FFF;
    border: none;
    cursor: pointer;
}
.nome-container, .cpf-container, .nascimento-container{
    display: flex;
    flex-direction: column;
    gap: 0.5em;
}
.resultado-area p{
    font-size: 11px;
    color: #b187e8;
    font-weight: 600;
}
.resultado-area h4{
    font-size: 14px;
}

.modal{
    background-color: var(--navbar-color);
    position: absolute;
    left: 30em;
    bottom: 10em;
    height: 25em;
    width:25em;
    padding: 1em 2em;
    color: #CCC;
    border-radius: 6px;
    z-index: 2;
    display: flex;
    flex-direction: column;
}
.modal p{
    font-size: 12px;
    font-weight: 600;
}
.modal strong{
    color: #8a43e7;
}

.overlay{
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    width: 100%;
    position: absolute;
}

.acoes{
    display: flex;
    justify-content: space-between;
    margin-top: 1em;
}

.acoes span{
    background-color: var(--hover-color);
    padding: 0.5em 0.5em;
    border-radius: 8px;
    cursor: pointer;
}
#close{
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    cursor: pointer;
}

@media screen and (max-width: 768px){
    .input-area{
        width: 23rem;
    }
    .input-area input{
        width: 20em
    }
    .select-area{
        width: 23rem;
        position: absolute;
        left: 1rem
    }
    .opcoes{
        margin-top: 4rem;
        width: 20rem;
        position: relative;
        right: 1.5rem
    }
    .resultado-area{
        width: 23rem;
        position: relative;
        left: 0rem;
        display: flex;
        flex-direction: column;
        height: 15rem;
        margin-top: 2.5rem;
        gap: 0px;
    }
    .modal{
        top: 10rem;
        left: 0px;
    }
}
</style>