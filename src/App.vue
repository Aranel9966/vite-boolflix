<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppPreview from './components/AppPreview.vue';
import axios from 'axios';
import { store } from './store';
export default{
  data(){
    return{
      store,
      apiNewString:''

    };
  },
  created() {
      axios.get(this.store.APIbase + this.store.APIhome + this.store.APIfilm).then((res) => {
          this.store.movies = res.data.results;
          console.log(this.store.movies);
      });
      axios.get(this.store.APIbase + this.store.APIhome + this.store.APIserie).then((res) => {
        this.store.series = res.data.results;
          console.log(this.store.movies);
      });
  },
  methods:{
    serch(){
        this.serchMovie()
        this.serchSeries()

    },
    serchMovie(){
      
      if(this.store.serch =='' ){
            this.apiNewString = this.store.APIbase + this.store.APIhome + this.store.APIfilm;
          }else {
            this.apiNewString = this.store.APIbase + this.store.APIsearch + this.store.APIfilm;
            this.apiNewString += `&query=${this.store.serch}`; 
          }
        axios.get(this.apiNewString).then((res) => {
          this.store.movies = res.data.results;
          console.log(res.data.results);
        });
    },

    serchSeries(){
      
      if(this.store.serch =='' ){
            this.apiNewString = this.store.APIbase + this.store.APIhome + this.store.APIserie;
          }else {
            this.apiNewString = this.store.APIbase + this.store.APIsearch + this.store.APIserie;
            this.apiNewString += `&query=${this.store.serch}`; 
          }
        axios.get(this.apiNewString).then((res) => {
          this.store.series = res.data.results;
          console.log(res.data.results);
        });
    }
  },
  components:{
    AppHeader,
    AppMain,
    AppPreview
  }
}
</script>

<template>
  <div>
    <AppHeader @serchCard="serch()"></AppHeader>
    <AppPreview></AppPreview>
    <AppMain></AppMain>

  </div>
    
</template>

<style scoped>

</style>
