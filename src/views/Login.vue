<template>
  <main>

    <div class="b7technology">
      <h2>B7 Technology</h2>
      <p>Consultas e muito mais.</p>
    </div>

    <div class="login-form">
      <div v-for="item in input" :key="item" class="input-container">
        <input :class="item.class" :type="item.type" :placeholder="item.phd">
        <span class="material-symbols-rounded">{{ item.icon }}</span>
      </div>
      <span >Credenciais erradas!</span>
      <button >Entrar</button>
    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'
// Array dos inputs
const input = ref([
  { class: 'input-user', type: 'text', icon: 'account_circle', phd: 'Digite seu usuário' },
  { class: 'input-password', type: 'password', icon: 'password', phd: 'Digite sua senha' }
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
  height: 100vh;
  width: 100vw;
  font-family: 'Inter';
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-image: url('../assets/images/backgroundDark.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.login-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  background-color: var(--body-color);
  padding: 2em 2em;
  border-radius: 6px;
}

.input-container {
  position: relative;
}

.login-form input {
  height: 3.5em;
  width: 20em;
  background-color: var(--hover-color);
  border: none;
  outline: none;
  font-family: 'Inter';
  border-radius: 6px;
  padding: 1em 3.5em;
  color: var(--text-color);
}

.login-form input::placeholder {
  letter-spacing: 1px;
}

.login-form button {
  padding: 0.7em 3em;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: 'Inter';
  font-weight: 700;
  color: var(--text-color);
  background-color: #7D2AE8;
  transition: all ease-in 0.3s;
  letter-spacing: 0.5px;
}

button:hover {
  background-color: #8a44e6;
}

span {
  position: absolute;
  bottom: 0.5em;
  left: 0.5em;
  color: var(--text-color);
}

.b7technology {
  text-align: center;
  color: var(--text-color);
}

.b7technology h2 {
  font-size: 45px;
}

.b7technology p {
  font-size: 25px;
  font-weight: 600;
}
</style>