<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
export default{
  data(){
    return{
      store,

    };
  },
  components:{
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <div>
    <AppHeader></AppHeader>
    <AppMain></AppMain>

  </div>
    
</template>

<style scoped>

</style>
