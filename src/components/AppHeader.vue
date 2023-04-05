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
          <li @click="$emit('home')"><link href="#"><img src="https://image.tmdb.org/t/p/w200/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt=""></li>
          <li @click="$emit('home')"><link href="#">Home</li>
          <li @click="$emit('serie')"><link href="#">Serie TV</li>
          <li @click="$emit('film')"><link href="#">Film</li>
          <li><link href="#">Originali</li>
          <li><link href="#">Aggiunti di recente</li>
          <li><link href="#">La mia lista</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <i class="fas fa-search"></i>
            <input v-model="store.serch" type="text" placeholder="Cerca" @keydown="$emit('serchCard')">
            <button @click="$emit('serchCard')">Cerca</button>
          </li>
          <li><link href="#"><i class="fa-solid fa-bell"></i></li>
          <li><link href="#"><i class="fa-solid fa-user"></i></li>
        </ul>
      </div>
    </nav>
    
  </div>
</template>

<style scoped lang="scss">
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1b1b;
  color: white;
  padding: 20px;
  position: fixed;
  z-index: 3;
  width: 100%;
  input{
    padding: 6px;
    background-color: #030303;
    color: white;
    border:1px solid white;

  }
  button{
    border-radius: 8px;
    background-color:#dc1a28 ;
    color:white ;
    padding: 2px 5px;
  }
  
  ul{
    display: flex;
    align-items: center;
    list-style-type: none;
    gap: 20px;
    li{
      gap: 5px;
      display: flex;
      align-items: center;
      &:hover{
        color: #dc1a28;
        cursor: pointer;
      }
    }
  }
}
</style>
