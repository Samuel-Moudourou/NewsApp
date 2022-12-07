<template>

<div class=" shadow-xl article" >
    <h1 class="etiqte mb-5 text-3xl font-extrabold text-white dark:text-gray-400">{{SearchResult.id}}</h1>
    <h1 class="titre mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">{{SearchResult.title}}</h1>
    <p class="corps mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{{SearchResult.body}}</p>
    <!-- <p class="corps mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{{SearchResult.body}}</p> -->

</div>
</template>

<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';



const route = useRoute();
const getSearchResults = async () => {
            try {

            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.query.id}`);
            
            return result.data;

            } catch(err) {
                console.log(err);
            }

        }

const SearchResult = await getSearchResults();
console.log(SearchResult);

</script>

<style scoped>
.article{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% auto auto;
    grid-template-areas: 
    "etiqte"
    "titre"
    "corps";
    width: 40vw;
    height: auto;
    border-radius: 12px;
    padding: 20px;
    background-color: rgb(255, 255, 255);
}
.titre{
    grid-area: titre;
    background-color: rgb(26 86 219);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3%;
    border-radius: 8px;
}
.corps{
    grid-area: corps;
    display: flex;
    justify-content: center;
    align-items:flex-start;
    padding: 4%;
}
.etiqte{
    grid-area: etiqte;
    background-color: purple;
    border-radius: 8px;
    width: 6vw;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
