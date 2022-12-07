<template>
    <div class="test">

<form> 

    <div data-aos="fade-down" data-aos-duration="2000" class="Entete" >
        <p class="mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white">L'intégralité des vos articles se trouvent ici. </p>   
    </div>  

    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" v-model="searchQuery"  id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Appuyer sur 'Post' pour poster un article" required="">
        <button type="button" @click="CreatePost" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post</button>
    </div>
    <div>
        <p v-if="searchError">Une erreur est survenu, veuillez reéssayer s'il vous plait</p>
        <!-- <p v-if="!serverError && jsonPlaceholderResults.length === 0">Aucun resultat ne correspond à votre entrée</p> -->
    </div>
</form>
    <div class="_Varticle container ">
        <a href="#" 
        v-for="searchResult in jsonPlaceholderAllResults" :key="searchResult.id"
        @click="previewArticle(searchResult)"
        class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-blue-700  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">{{searchResult.title}}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">{{searchResult.body}}</p>
        </a>
    </div>

    </div>
</template>

<script setup>
import axios from 'axios';
import { onBeforeMount, onMounted, ref } from "vue";
import { useRouter } from 'vue-router';
import JSONPlaceholderAPI from '../services/JSONPlaceholderAPI';
import ArticlesView from '../views/ArticlesView.vue';
import AOS from 'aos';

const searchQuery = ref("");
const queryTimeout = ref(null);
const jsonPlaceholderResults = ref(null);
const jsonPlaceholderAllResults = ref(null);
const searchError = ref(null);


const router = useRouter();
const previewArticle = (searchResult) => {
    console.log(searchResult);
    const id = searchResult.id;
    console.log(id);
    router.push({
        name: "articls",
        params: {id:id},
        query:{
            id: searchResult.id,
            preview: true,
        },
    })
};

const CreatePost = async () => {
    const response = await JSONPlaceholderAPI.createPost(
        JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
        })
    );

    console.log(response)

};

const InsertPost = async () => {
    const response = await JSONPlaceholderAPI.InsertPost(
        JSON.stringify({
        title: 'foo',
        body: 'bar',
        })
    );

    console.log(response)

};

const getSearchResults = () => {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async () => {
        if (searchQuery.value !== ""){

            try {

            const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${searchQuery.value}`);

            jsonPlaceholderResults.value = result.data;

            console.log(jsonPlaceholderResults.value);

            } catch {
                searchError.value = true;
            }

            return;
        }
        jsonPlaceholderResults.value = null;
        // jsonPlaceholderAllResults.value = null;
    }, 300);
};


const LoadArticles = () => {
    clearTimeout(queryTimeout.value);
    queryTimeout.value = setTimeout(async () => {
        try {
            const Allresult = await JSONPlaceholderAPI.getArticles();

            jsonPlaceholderAllResults.value = Allresult.data;

            console.log(jsonPlaceholderAllResults.value);


        } catch {  
            searchError.value = true;

        }
        return;
    }, 300)
};
onMounted(() => {
    LoadArticles()
})

</script>



<style scoped>
.test{
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    height: auto;
    width: 100%;
    background-color: rgb(233, 233, 233);
    }

.test>div>p{
    text-align: center;
}

._Varticle {
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    justify-content: center;
    flex-flow: row wrap;
    gap: 20px;
    margin-bottom: 10%;
    padding: 1%;
}
form {
    width: 50vw;
    margin-top: 10%;
}

.Entete{
    text-align: center
}

</style>
