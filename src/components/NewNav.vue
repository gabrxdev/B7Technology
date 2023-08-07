<template>
  <nav class="navigation">
    <div class="logo-container">
      <h2>B7 Technology</h2>
    </div>

    <div class="links-container">
      <router-link :to="item.path"  v-for="item in items" :key="item">{{ item.conteudo }}</router-link>
    </div>
    <div class="button-container">
        <button><span class="material-symbols-rounded">logout</span>Logout</button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {conteudo: 'Dashboard', path: '/dashboard'},
  {conteudo: 'Consulta', path: '/consulta'},
  {conteudo: 'Usuários', path: '/usuarios'},
  {conteudo: 'Configurações', path: '/configuracoes'}

])
</script>

<style scoped lang="scss">
:root {
  --bg-color: #f5f5f5;
  --medium-spring-green: #49FA90;
  --dark-jungle-green: #121816;
  --morning-blue: #9AADA2;
  --charleston-green: #222626;
  --eerie-black: #151819;
  --hunter-green: #15582E;
}

nav {
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 25px;
  position: absolute;
  right: 0em;
}

.logo-container {
  font-family: 'Inter';
  font-size: 20px;
  color: #404040;
  position: absolute;
  left: 3em;
}

button {
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 400;
  letter-spacing: 1px;
  font-family: 'Inter';
  background-color: #121816;
  color: #49FA90;
  transition: 0.3s all ease-in;
  position: relative;
  left: 10em;
  bottom: 0em
}

button:hover {
  color: #FFF;
}

.material-symbols-rounded {
  font-variation-settings: 'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48;
}

.links-container {
  display: flex;
  gap: 20px;
  font-family: 'Inter';
  align-items: center;
}

a {
  padding: 10px 25px;
  text-decoration: none;
  border-radius: 6px;
  transition: 0.3s all ease-in;
  color: #CCC;
  font-weight: 500;
  letter-spacing: 1px;
}

a:hover {
  background-color: #212121;
  color: #FFF;
}
a.router-link-active{
  border-bottom: 2px solid #7D2AE8;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: #FFF;
}
h2{
  color: #CCC;
}
</style>