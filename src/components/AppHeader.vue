<script>
import { store } from '../store';
export default{
  name:'AppHeader',
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <div>
    <nav>
      <div>
        <ul>
          <li><link href="#">logo</li>
          <li><link href="#">Home</li>
          <li><link href="#">Serie TV</li>
          <li><link href="#">Film</li>
          <li><link href="#">Originali</li>
          <li><link href="#">Aggiunti di recente</li>
          <li><link href="#">La mia lista</li>
        </ul>
      </div>

      <div>
        <ul>
          <li><input v-model="store.serch" type="text" placeholder="cerca"><button @click="$emit('serchCard')">Cerca</button></li>
          <li><link href="#">BAMBINI</li>
          <li><link href="#">notifiche</li>
          <li><link href="#">profilo</li>
        </ul>
      </div>
    </nav>
    
  </div>
</template>

<style scoped>
nav{
  display: flex;
  justify-content: space-between;
  background-color: #1b1b1b;
  color: white;
  padding: 20px;
}
ul{
  display: flex;
  list-style-type: none;
  gap: 20px;
}
</style>
