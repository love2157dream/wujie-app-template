<template>
  <WujieVue :sync="true" width="100%" height="100%" :url="microAppUrl" :props="microAppProps"></WujieVue>
</template>
<script setup lang="ts">
import WujieVue from 'wujie-vue3';
import { useRoute } from "vue-router";
import {ref, watchEffect} from 'vue';


const router = useRoute();
console.log('router', router);
const PATH_ARR = {
  'react18': '//localhost:1801',
  'vue3': '//localhost:3002',
};

const microAppUrl = ref(null);
watchEffect(() => {
  console.log(router.name);
  microAppUrl.value = PATH_ARR[router.name];
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
