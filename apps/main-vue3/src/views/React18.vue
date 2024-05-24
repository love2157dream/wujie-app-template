<template>
  <WujieVue :sync="true" width="100%" height="100%" :url="microAppUrl" :props="microAppProps"></WujieVue>
</template>
<script setup lang="ts">
import WujieVue from 'wujie-vue3';
import { useRoute } from "vue-router";
import {ref, watchEffect} from 'vue';


const router = useRoute();
console.log('router', router);

const microAppUrl = ref('//localhost:1801');
watchEffect(() => {
  console.log(router.name);
});

const microAppProps = {
  jump: (url: string) => {
    location.href = `${window.location.origin}${url}`;
  },
  jumpNewPage: (url: string) => {
    window.open(`${window.location.origin}${url}`, '_blank');
  },
}
</script>

<style>
 
</style>
