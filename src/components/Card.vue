<template>
    <div class="card">
        <div class="informacoes">
            <span class="material-symbols-rounded">currency_exchange</span>                
            <p>Saldo em conta</p>
            <h2>R$ 345,00</h2>
        </div>
        <button>Adicionar</button>
    </div>
    <div class="card">
        <div class="informacoes">
            <span class="material-symbols-rounded">travel_explore</span>                
            <p>Consultas realizadas</p>
            <h2>47</h2>
        </div>
    </div>
    <div class="card">
        <div class="informacoes">
            <span class="material-symbols-rounded">calendar_month</span>                
            <p>Última recarga</p>
            <h2>08/10/2023</h2>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.card{
    width: 20rem;
    height: 11rem;
    border-radius: 6px;
    background: #18191A;
    display: flex;
}
.card span {
    color: #FFF;
    font-size: 48px;
    margin-left: 22px;
    margin-top: 26px;
}
.card p{
    font-size: 20px;
    color: #404040;
    font-weight: 700;
    margin-top: 24px;
    margin-left: 19px;
}
.card h2{
    color: #D5D5D5;
    font-size: 32px;
    margin-top: 2px;
    margin-left: 19px;
    font-weight: 700;
}
.card button{
    height: 42px;
    width: 90px;
    margin-top: 8rem;
    margin-left: 1rem;
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 700;
    border-radius: 6px;
    color: #FFF;
    border: none;
    background-image: linear-gradient(to right, #82f4b1, #30c67c );
    cursor: pointer;
}
</style>