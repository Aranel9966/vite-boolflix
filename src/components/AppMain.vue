<script>
import  "/node_modules/flag-icons/css/flag-icons.min.css" ;
import { store } from '../store';
export default{
  name:'AppMain',
  data(){
    return{
        store,
        screen:''
    }
  },
  methods:{
    lenguage(leng){
        if(leng == 'en'){
            leng = 'gb'
        }else if(leng == 'ja'){
            leng = 'jp'
        }else if(leng == 'zh'){
            leng = 'cn'
        }else if(leng == 'ko'){
            leng = 'kr'
        }
        return leng;
    },
    screenview(i){
        this.screen=this.store.movies[i]
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-if="this.screen" class="screenview">
        <div class="img-inner">
            <img :src="'https://image.tmdb.org/t/p/w1280' + this.screen.backdrop_path ">
        </div>
        <div class="text-screenview" >
            <h2>{{ this.screen.title}}</h2> 
            <small>Titolo originale: ({{ this.screen.original_title }})</small> 
            <div>Lingua: <span :class = "`fi fi-${lenguage(this.screen.original_language)} fis `" > </span></div>
            <div class="vote">
                <i v-for="star in Math.floor(this.screen.vote_average/2) " class="fa-solid fa-star"></i>
                <i v-if="Math.floor(this.screen.vote_average/2) < 5" class="fa-regular fa-star"></i>
                <i v-if="Math.floor(this.screen.vote_average/2) < 4" class="fa-regular fa-star"></i>
                <i v-if="Math.floor(this.screen.vote_average/2) < 3" class="fa-regular fa-star"></i>
                <i v-if="Math.floor(this.screen.vote_average/2) < 2" class="fa-regular fa-star"></i>
                <i v-if="Math.floor(this.screen.vote_average/2) < 1" class="fa-regular fa-star"></i>
            </div>
        </div>         
    </div>
    <h1>Film</h1>
    <div class="main-container">
            <div v-for=" (movie,index) in this.store.movies" class="inner-main" @click="screenview(index)" >
                <div class="img-inner">
                    <img :src="'https://image.tmdb.org/t/p/w400' + movie.poster_path "> 
                </div>
                <div class="text-inner">
                    <h2>{{ movie.title}}</h2> 
                    <small>Titolo originale: ({{ movie.original_title }})</small> 
                    <div>Lingua: <span :class = "`fi fi-${lenguage(movie.original_language)} fis `" > </span></div>
                     <div class="vote">
                         <i v-for="star in Math.floor(movie.vote_average/2) " class="fa-solid fa-star"></i>
                         <i v-if="Math.floor(movie.vote_average/2) < 5" class="fa-regular fa-star"></i>
                         <i v-if="Math.floor(movie.vote_average/2) < 4" class="fa-regular fa-star"></i>
                         <i v-if="Math.floor(movie.vote_average/2) < 3" class="fa-regular fa-star"></i>
                         <i v-if="Math.floor(movie.vote_average/2) < 2" class="fa-regular fa-star"></i>
                         <i v-if="Math.floor(movie.vote_average/2) < 1" class="fa-regular fa-star"></i>
                     </div>
                </div>
            </div>
    </div>
    <h1>Serie</h1>
    <div class="main-container">
        <div v-for=" serie in this.store.series" class="inner-main">
            <div class="img-inner">
                <img :src="'https://image.tmdb.org/t/p/w400' + serie.poster_path "> 
            </div>
            <div class="text-inner">
                <h2>{{serie.name}}</h2> 
                <small>Titolo originale: ({{ serie.original_name }})</small> 
                <div>Lingua: <span :class = "`fi fi-${lenguage(serie.original_language)} fis `" > </span></div>
                    <div class="vote">
                        <i v-for="star in Math.floor(serie.vote_average/2) " class="fa-solid fa-star"></i>
                        <i v-if="Math.floor(serie.vote_average/2) < 5" class="fa-regular fa-star"></i>
                        <i v-if="Math.floor(serie.vote_average/2) < 4" class="fa-regular fa-star"></i>
                        <i v-if="Math.floor(serie.vote_average/2) < 3" class="fa-regular fa-star"></i>
                        <i v-if="Math.floor(serie.vote_average/2) < 2" class="fa-regular fa-star"></i>
                        <i v-if="Math.floor(serie.vote_average/2) < 1" class="fa-regular fa-star"></i>
                    </div>           
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container{
    background-color: #434343;
    padding: 90px 0 0 0;
    h1{
        padding: 20px;
        color: white;
        background-color: #434343;
    }
    .main-container{
        padding: 0 0 20px 20px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: start;
        overflow-x: auto;
    }
    .inner-main{
        color: white;
        display: flex;
        position: relative;
        .img-inner{       
            img{
                object-fit:cover;
                height: 450px;
                width: 300px;            
            }        
        }
        .text-inner{
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: column;
            display: none;
            padding: 15px;     
            .vote{
                padding: 5px;
                display: flex;
                flex-direction: row;
                color: gold;
            }  
        }
        &:hover .text-inner{
            display: flex;
            cursor: pointer;
        }
        &:hover .img-inner img{
            cursor: pointer;
            opacity: 0.30;
        }
    }
}
.screenview{
    .text-screenview{
        color: white;
        position: absolute;
        top: 300px;
        font-size: 35px;
        padding: 10px;
        .vote{
            padding: 5px;
            display: flex;
            flex-direction: row;
            color: gold;
        } 
    }
    img{
        width: 100%; 
        object-fit:cover;
        height: 500px;
        opacity: 0.5;
    }
}

</style>
