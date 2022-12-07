import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ArticlesView from '../views/ArticlesView.vue';
import FavorisView from '../views/FavorisView.vue';
import PostsView from '../views/PostsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/Articles/:id',
      name: 'articls',
      component: ArticlesView
    },
    {
      path: '/Articles/Favoris',
      name: 'favoris',
      component: FavorisView
    },
    {
      path: '/Posts',
      name: 'posts',
      component: PostsView
    },
  ],
});

export default router
