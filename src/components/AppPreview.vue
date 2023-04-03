<script>
import { store } from '../store';
export default{
  name:'AppPreview',
  data(){
    return{
      store,
    }
  },
  // props:{
  //   data:Object
  // }
}
</script>
<template>
  <!-- <div @click="$emit('preview')" >
    <img :src="'https://image.tmdb.org/t/p/w400' + this.store.movies[1].poster_path "> 

  </div> -->
  <!-- <div>
      <div class="img-inner">
      </div>
      <div class="text-inner">
          <h2>{{ this.movie[1].title}}</h2> 
          <small>Titolo originale: ({{ this.movie[1].original_title }})</small> 
          <div>Lingua: <span :class = "`fi fi-${lenguage(this.movie[1].original_language)} fis `" > </span></div>
            <div class="vote">
                <i v-for="star in Math.floor(this.movie[1].vote_average/2) " class="fa-solid fa-star"></i>
                <i v-if="Math.floor(this.movie[1].vote_average/2) < 5" class="fa-regular fa-star"></i>
                <i v-if="Math.floor(this.movie[1].vote_average/2) < 4" class="fa-regular fa-star"></i>
                <i v-if="Math.floor(this.movie[1].vote_average/2) < 3" class="fa-regular fa-star"></i>
                <i v-if="Math.floor(this.movie[1].vote_average/2) < 2" class="fa-regular fa-star"></i>
                <i v-if="Math.floor(this.movie[1].vote_average/2) < 1" class="fa-regular fa-star"></i>
            </div>
      </div>
           
    
  </div> -->
</template>
<style scoped lang="scss">
.background{
  height: 400px;
  width:  400px;
  padding-top: 150px;
}

</style>