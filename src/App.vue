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
  //richiamo le API all caricamento della pagina 
  created() {
      axios.get(this.store.APIbase + this.store.APIhome + this.store.APIfilm).then((res) => {
          this.store.movies = res.data.results;
      // console.log(this.store.movies)

      });
      axios.get(this.store.APIbase + this.store.APIhome + this.store.APIserie).then((res) => {
        this.store.series = res.data.results;
      });
      // axios.get(this.store.APIgenre).then((res) => {
      //   this.store.genre = res.data.genres;
      //   console.log(this.store.genre)
      // });
  },
  methods:{
    //richiamo i metodi di ricerca sotto un unico metodo
    serch(){
        this.serchMovie()
        this.serchSeries()
    },
    //metodo per utilizare l'API per i film
    serchMovie(){
      if(this.store.serch == '' ){
            this.apiNewString = this.store.APIbase + this.store.APIhome + this.store.APIfilm;
          }else {
            this.apiNewString = this.store.APIbase + this.store.APIsearch + this.store.APIfilm;
            this.apiNewString += `&query=${this.store.serch}`; 
          }
        axios.get(this.apiNewString).then((res) => {
          this.store.movies = res.data.results;
        });
    },
    //metodo per utilizare l'API per le serie
    serchSeries(){
      if(this.store.serch == '' ){
            this.apiNewString = this.store.APIbase + this.store.APIhome + this.store.APIserie;
          }else {
            this.apiNewString = this.store.APIbase + this.store.APIsearch + this.store.APIserie;
            this.apiNewString += `&query=${this.store.serch}`; 
          }
        axios.get(this.apiNewString).then((res) => {
          this.store.series = res.data.results;
        });
    },
    //metodo per ricavare gli attori dei film
    castList(){
      axios.get(`https://api.themoviedb.org/3/movie/${this.store.id}/credits?api_key=e789f8acd81f7b9e6d56be313b261d58&language=it-IT`).then((res) => {
          this.store.APICast = res.data.cast;
      });
    },
    //metodo per ricavare gli attori dei serie
    castListS(){
      axios.get(`https://api.themoviedb.org/3/tv/${this.store.id}/season/1/credits?api_key=e789f8acd81f7b9e6d56be313b261d58&language=it-IT`).then((res) => {
          this.store.APICast = res.data.cast;
      });
    },
    // metodi per le home serie
    serie(){
      axios.get(this.store.APIbase + this.store.APIhome + this.store.APIserie).then((res) => {
        this.store.series = res.data.results;
      });
      this.store.movies=''
    },
    // metodi per le home film
    film(){
      axios.get(this.store.APIbase + this.store.APIhome + this.store.APIfilm).then((res) => {
          this.store.movies = res.data.results;
      });
      this.store.series=''
    },
    // metodi per le home 
    home(){
      this.film()
      this.serie()
      
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
    <AppHeader @serchCard="serch()" @home="home()" @film="film()" @serie="serie()"></AppHeader>
    <AppMain @castList="castList()" @castListS="castListS()"></AppMain>

  </div>
    
</template>

<style scoped>

</style>
