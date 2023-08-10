<template>
    <main>
        <NewNav />
        <section>
            <div class="card-boas-vindas">
                <h1>Bem vindo, Gabriel R.</h1>
                <p>Aqui está um resumo do seu perfil</p>
                <img src="../assets/images/graphics.svg" alt="">
            </div> 
            <div class="card-section">

                <Card />
                
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Card from '../components/Card.vue'
import NewNav from '../components/NewNav.vue'
const usuario = ref([
    { nome: 'Gabriel R.', saldo: 'R$ 345,00', consultas: '47', recarga: '08/10/2023' }
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
    background-color: var(--body-color);
    display: flex;
}

section {
    width: 100%;
    height: 30em;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card-boas-vindas{
    color: #FFF;
    width: 45rem;
    height: 8rem;
    border-radius: 8px;
    background-image: linear-gradient(to right, #8364E8, #A18DCE);
}
.card-boas-vindas h1{
    font-size: 40px;
    font-weight: 700;
    margin-top: 1rem;
    margin-left: 1rem;
}
.card-boas-vindas p{
    font-size: 20px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    margin-left: 1rem;
    margin-top: 0.5rem;
}
.card-boas-vindas img{
    width: 12rem;
    position: relative;
    left: 29rem;
    bottom: 7.5rem;
}
.card-section{
    width: 100%;
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-top: 26px;
}
@media screen and (max-width: 768px) {
    .card-section{
        display: flex;
        flex-direction: column;
        margin-left: 5rem;
        position: relative;
        top: 10rem;
    }
    .card-boas-vindas{
        margin-left: -1rem;
        position: relative;
        top: 10rem;
        width: 20rem;
    }
    .card-boas-vindas h1{
        font-size: 25px;
        margin-top: 2rem;
    }
    .card-boas-vindas p{
        font-size: 15px;
        margin-bottom: 2rem;
    }
    main{
        display: flex;
        flex-direction: column;
        height: 40rem;
    }
    img{
        display: none;
    }
}
</style>