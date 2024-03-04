<script setup>
import WhiteLogo from "@/components/common/WhiteLogo.vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";

const api = import.meta.env.VITE_API_URL;
const router = useRouter();
const password = ref("");
const toast = useToast();
const email = ref("");

async function login() {
    const response = await authenticate(email.value, password.value);
    if (response.status === 200) {
      toast.success("Login efetuado com sucesso!\nRedirecionando...");

      localStorage.setItem('token_user', response.access_token);
      localStorage.setItem('token_expiration', response.expire_in);

      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
}

async function authenticate(email, password) {
  try {
    const formData = new URLSearchParams();
    formData.append('email', email);
    formData.append('password', password);

    const response = await axios.post(`${api}/login`, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    });

    return response;
    
  } catch (error) {
    if(error.response.status === 401) {
      toast.error("E-mail ou senha inválidos");
    }
  }
}
</script>

<template>
  <WhiteLogo />
  <div class="w-full max-w-[540px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700" id="card-login">
    <form class="space-y-6" @submit.prevent="login">
      <h5 class="text-xl font-medium text-gray-900 dark:text-white"></h5>
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
        <input type="email" name="email" id="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@example.com" required/>
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
        <input type="password" name="password" id="password" v-model="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required/>
      </div>
      <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
    </form>
  </div>
</template>

<style scoped>
#card-login {
  max-width: 680px !important;
  min-width: 400px !important;
  width: 480px !important;
}
</style>