<script>
import { store } from '../store';
export default{
  name:'AppMain',
  data(){
    return{
        store,
        ciao:'ciao'
    }
  },
  methods:{
    stars(prova){
        for(let i =0;i< prova;i++){
            console.log(this.ciao)
            this.ciao 
        }
    }
  }
  
}
</script>

<template>
  <div>
      <div class="main-container">
            <div v-for=" movie in this.store.movies" class="inner-main">
                <img :src="'https://image.tmdb.org/t/p/w400' + movie.poster_path "> 
                <h2>{{ movie.title }}</h2> 
                <small>({{ movie.original_title }})</small> 
                <em>Lingua:{{ movie.original_language }}</em>  
                {{ stars(movie.vote_average / 2) }} 
                
            </div>

        </div>
    
  </div>
</template>

<style scoped lang="scss">
.main-container{
    padding-top: 100px;
    background-color: #434343;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.inner-main{
    padding: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    width: 350px;
    // width: calc(1200px / 6 - (20px ));
     img{
        height: 500px;
    } 
}


</style>
