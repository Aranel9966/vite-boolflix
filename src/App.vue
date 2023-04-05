<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
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
      });
      axios.get(this.store.APIbase + this.store.APIhome + this.store.APIserie).then((res) => {
        this.store.series = res.data.results;
        console.log(this.store.series);

      });

  },
  methods:{
    serch(){
        this.serchMovie()
        this.serchSeries()

    },
    serchMovie(){
      
      if(this.store.serch == '' ){
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
      
      if(this.store.serch == '' ){
            this.apiNewString = this.store.APIbase + this.store.APIhome + this.store.APIserie;
          }else {
            this.apiNewString = this.store.APIbase + this.store.APIsearch + this.store.APIserie;
            this.apiNewString += `&query=${this.store.serch}`; 
          }
        axios.get(this.apiNewString).then((res) => {
          this.store.series = res.data.results;
          console.log(res.data.results);
        });
    },
    castList(){
      axios.get(`https://api.themoviedb.org/3/movie/${this.store.id}/credits?api_key=e789f8acd81f7b9e6d56be313b261d58&language=it-IT`).then((res) => {
          this.store.APICast = res.data.cast;
          console.log(this.store.APICast);
      });
    },
    castListS(){
      axios.get(`https://api.themoviedb.org/3/tv/${this.store.id}/season/1/credits?api_key=e789f8acd81f7b9e6d56be313b261d58&language=it-IT`).then((res) => {
          this.store.APICast = res.data.cast;
          console.log(this.store.APICast);
      });
    }

  },
  components:{
    AppHeader,
    AppMain,
  }
}
</script>

<template>
  <div>
    <AppHeader @serchCard="serch()"></AppHeader>
    <AppMain @castList="castList()" @castListS="castListS()"></AppMain>

  </div>
    
</template>

<style scoped>

</style>
