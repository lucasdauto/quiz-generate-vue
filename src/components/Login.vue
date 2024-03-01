<script setup>

import WhiteLogo from "@/components/common/WhiteLogo.vue";

</script>

<template>
  <WhiteLogo/>
  <div
      class="w-full max-w-[540px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      id="card-login">
    <form class="space-y-6" action="#">
      <h5 class="text-xl font-medium text-gray-900 dark:text-white"></h5>
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
        <input type="email" name="email" id="email"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
               placeholder="name@example.com" required/>
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
        <input type="password" name="password" id="password" placeholder="••••••••"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
               required/>
      </div>
      <div class="flex items-start">
      </div>
      <button type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Login
      </button>
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