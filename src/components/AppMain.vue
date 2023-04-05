<script>
import  "/node_modules/flag-icons/css/flag-icons.min.css" ;
import { store } from '../store';
export default{
  name:'AppMain',
  data(){
    return{
        store,
        screen:'',
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
        this.store.id = this.store.movies[i].id
    },
    screenviewS(i){
        this.screen=this.store.series[i]
        this.store.id = this.store.series[i].id

    }
  }
}
</script>

<template>
  <div class="container">
    <div v-if="this.screen" class="screenview">
        <div class="img-inner" v-if="this.screen!=''">
            <img :src="'https://image.tmdb.org/t/p/w1280' + this.screen.backdrop_path ">
        </div>
        <div class="text-screenview" >
            <h2 v-if="this.screen.title">{{ this.screen.title}}</h2> 
            <h2 v-else>{{ this.screen.name}}</h2> 
            <small v-if="this.screen.original_title">Titolo originale: ({{ this.screen.original_title }})</small> 
            <small v-else>Titolo originale: ({{ this.screen.original_name }})</small> 
            <div>Lingua: <span :class = "`fi fi-${lenguage(this.screen.original_language)} fis `" ></span></div>
            <div class="vote">
                <i v-for="star in Math.floor(this.screen.vote_average/2) " class="fa-solid fa-star"></i><i v-for="star in 5 - Math.floor(this.screen.vote_average/2)" class="fa-regular fa-star"></i>
            </div>
            <div>
                Cast:
                <ul>
                    <li v-for="actor in this.store.APICast.slice(0,5)"  >
                        <em>{{actor.name}}</em>
                    </li>
                </ul>
            </div>

        </div>         
    </div>
    <h1 v-if="!this.store.movies.length">OPS Non trovato!!!</h1>
    <h1 v-if="this.store.movies.length">Film</h1>
    <div class="main-container">
        <div v-for=" (movie,index) in this.store.movies" class="inner-main" @click="screenview(index),$emit('castList')" >
            <div class="img-inner">
                <img :src="'https://image.tmdb.org/t/p/w400' + movie.poster_path "> 
            </div>
            <div class="text-inner">
                <h2>{{ movie.title}}</h2> 
                <small>Titolo originale: ({{ movie.original_title }})</small> 
                <div>Lingua: <span :class = "`fi fi-${lenguage(movie.original_language)} fis `" > </span></div>
                    <div class="vote">
                        <i v-for="star in Math.floor(movie.vote_average/2) " class="fa-solid fa-star"></i><i v-for="star in 5 - Math.floor(movie.vote_average/2)" class="fa-regular fa-star"></i>
                    </div>
            </div>
        </div>
    </div>
    <h1 v-if="this.store.series.length">Serie</h1>
    <div class="main-container">
        <div v-for=" (serie,index) in this.store.series" class="inner-main" @click="screenviewS(index),$emit('castListS')" >
            <div class="img-inner">
                <img :src="'https://image.tmdb.org/t/p/w400' + serie.poster_path "> 
            </div>
            <div class="text-inner">
                <h2>{{serie.name}}</h2> 
                <small>Titolo originale: ({{ serie.original_name }})</small> 
                <div>Lingua: <span :class = "`fi fi-${lenguage(serie.original_language)} fis `" > </span></div>
                <div class="vote">
                    <i v-for="star in Math.floor(serie.vote_average/2) " class="fa-solid fa-star"></i><i v-for="star in 5 - Math.floor(serie.vote_average/2)" class="fa-regular fa-star"></i>
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
        gap: 5px;
        flex-direction: row;
        justify-content: start;
        overflow-x: auto;
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey; 
            border-radius: 10px;
            }
        &::-webkit-scrollbar-thumb {
            background: red; 
            border-radius: 10px;
            }
        &::-webkit-scrollbar-thumb:hover {
            background: #b30000; 
            }
        &::-webkit-scrollbar{
            height: 5px;
        }
        
    }

    .inner-main{
        color: white;
        display: flex;
        position: relative;
        height: 450px;
        border: 1px solid #b30000;

        .img-inner{       
            img{
                width: 300px;          
                object-fit:cover;
                height: 100%;  
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
        padding: 15px;
        .vote{
            padding: 25px;
            display: flex;
            flex-direction: row;
            color: gold;
        } 
    }
    img{
        width: 100%; 
        object-fit:cover;
        object-position: top;
        height: 600px;
        opacity: 0.5;
        
    }
    ul{
        padding-left: 25px;
        li{
            font-size: small;
        }
    }
}

</style>
