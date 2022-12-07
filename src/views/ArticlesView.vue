<template>
    <div class="Mes_Articles">
        <Suspense>
            <Varticle />
            <template #fallback>
                <p>Loading...</p>
            </template>
        </Suspense>
    </div>
</template>

<script setup>
import Varticle from '../components/Varticle.vue'
</script>

<style scoped>
.Mes_Articles{
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    margin-top: 12px;
}

</style>