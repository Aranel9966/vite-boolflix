<script>
import  "/node_modules/flag-icons/css/flag-icons.min.css" ;
import { store } from '../store';
export default{
  name:'AppMain',
  data(){
    return{
        store,
        
    }
  },
  methods:{
    
    lenguage(leng){
        if(leng == 'en'){
            leng='gb'
        }
        console.log(leng)
        return leng;
    }
  }
}
</script>

<template>
  <div>
      <div class="main-container">
            <div v-for=" movie in this.store.movies" class="inner-main">
                <div class="img-inner">
                    <img :src="'https://image.tmdb.org/t/p/w400' + movie.poster_path "> 
                </div>
                <div class="text-inner">

                    <h2>{{ movie.title || movie.name}}</h2> 
                    <small>Titolo originale: ({{ movie.original_title || movie.original_name }})</small> 
                     lingua: <span :class = "`fi fi-${lenguage(movie.original_language)} fis `" > </span>
                    {{ movie.vote_average  }}            
                </div>
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
    // padding: 5px;
    color: white;
    display: flex;
    // flex-direction: column;
    // width: calc(1200px / 6 - (20px ));
    position: relative;
    .img-inner{
        
        img{
            object-fit:cover;
            height: 400px;
    width: 300px;

        } 
    }
    .text-inner{
        position: absolute;
        bottom: 0;
        display: flex;
        flex-direction: column;
        display: none;
        padding: 10px;
    }
    &:hover .text-inner{
        display: flex;
    }
}


</style>
