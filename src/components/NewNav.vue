<template>
  <nav class="navigation">
    <div class="logo-container">
      <h2>B7Technology</h2>
    </div>

    <div class="links-container">
      <router-link :id="item.id" :to="item.path"  v-for="item in items" :key="item"><span class="material-symbols-rounded">{{ item.icon }}</span>{{ item.conteudo }}</router-link>
    </div>
    <div class="button-container">
        <button><span class="material-symbols-rounded">logout</span>Logout</button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {conteudo: 'Dashboard', path: '/dashboard', id: 'dashboard'},
  {conteudo: 'Consulta', path: '/consulta', id: 'consulta'},
  {conteudo: 'Usuários', path: '/usuarios', id: 'usuarios'},
  {conteudo: 'Configurações', path: '/configuracoes', id: 'config'}

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
  padding-top: 25px;
  position: absolute;
}

.logo-container {
  font-family: 'Inter';
  margin-right: 3rem;
}



.logo-container h2{
  font-size: 15px;
  color: #CCC;
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
  color: #b187e8;
  transition: 0.3s all ease-in;
  position: relative;
  left: 3em;
  bottom: 0em
}

button:hover {
  color: #FFF;
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
  display: flex;
  align-items: center;
  gap: 0.4em;
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
@media screen and (max-width: 768px){
  #config{
    display: none;
  }
  #usuarios{
    display: none;
  }
  .logo-container{
    display: none;
  }
  .links-container{
    gap: 5px;
  }
  a{
    padding: 5px 5px;
  }
  button{
    left: 2em
  }
}
</style>