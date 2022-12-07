<template>

  <header class="sticky top-0 shadow-lg z-50">
    <nav class="  bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900" _msthidden="8">
      <div class="container flex flex-wrap justify-between items-center mx-auto" _msthidden="8">

        <RouterLink :to="{name: 'home'}">
          <a href="https://flowbite.com/" class="flex items-center" _msthidden="2">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" _msthidden="A"
              _msthiddenattr="2975804" _mstalt="201084">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white" _msthash="3400202"
              _msttexthash="114439" _msthidden="1">Flowbite</span>
          </a>
        </RouterLink>

        <button data-collapse-toggle="navbar-default" type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default" aria-expanded="false" _msthidden="1">
          <span class="sr-only" _msthash="3880084" _msttexthash="207389" _msthidden="1">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default" _msthidden="5">
          <ul
            class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            _msthidden="5">

            <RouterLink :to="{name: 'home'}">
              <li _msthidden="1">
                <a href="#"
                  class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page" _msthash="703106" _msttexthash="43979" _msthidden="1">Acceuil</a>
              </li>
            </RouterLink>

            <RouterLink :to="{name: 'articles'}">
              <li _msthidden="1">
                <a href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  _msthash="703288" _msttexthash="60892" _msthidden="1">Articles</a>
              </li>
            </RouterLink>

            <RouterLink :to="{name: 'posts'}">
              <li _msthidden="1">
                <a href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  _msthash="703288" _msttexthash="60892" _msthidden="1">Posts</a>
              </li>
            </RouterLink>


            <RouterLink :to="{name: 'favoris'}">
            <li _msthidden="1">
              <a href="#"
                class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                _msthash="703470" _msttexthash="115193" _msthidden="1">Mes favoris</a>
            </li>
          </RouterLink>

          </ul>
        </div>
      </div>
    </nav>
  </header>

</template>

<script setup>
import { RouterLink,useRoute, useRouter } from 'vue-router';
</script>