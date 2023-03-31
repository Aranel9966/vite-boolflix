<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store';
export default{
  data(){
    return{
      store,

    };
  },
  created() {
      axios.get(this.store.APIhome).then((res) => {
          // console.log(res.data.results[0].original_title);
          this.store.movies = res.data.results;
          console.log(this.store.movies);
      });
  },
  methods:{
    serch(){
      let apiNewString
      if(this.store.serch==''){
        apiNewString = this.store.APIhome;
        // console.log(apiNewString);

      }else{

        apiNewString = this.store.APIbase;
        apiNewString += `&query=${this.store.serch}`; 
  
      }
      axios.get(apiNewString).then((res) => {
        this.store.movies = res.data.results;
        // console.log(apiNewString);
      });

    }
  },
  components:{
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <div>
    <AppHeader @serchCard="serch()"></AppHeader>
    <AppMain></AppMain>

  </div>
    
</template>

<style scoped>

</style>
