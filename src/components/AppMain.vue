<script>
import { store } from '../store';
export default{
  name:'AppMain',
  data(){
    return{
        store,
    }
  },
  
}
</script>

<template>
  <div>
      <div class="main-container">
        <div v-for=" card in this.store.cards" class="inner-main">
            <!-- <img :src="card.poster_path" alt="">  -->
            {{ card.original_title }}
            
        </div>

    </div>
    
  </div>
</template>

<style scoped>
.main-container{
    background-color: #434343;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.inner-main{
    background-color: red;
    height: 500px;
    margin: 10px;
    width: calc(100% / 5 - (20px ));
}
/* img{
    width: 100%;
    height: 100%;
} */

</style>
