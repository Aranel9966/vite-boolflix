<script>
export default{
  name:'AppMain',
  data(){
    return{
      
    }
  }
}
</script>

<template>
  <div>
      <div class="main-container">
        <div class="inner-main"></div>
        <div class="inner-main"></div>
        <div class="inner-main"></div>
        <div class="inner-main"></div>
        <div class="inner-main"></div>
        <div class="inner-main"></div>
        <div class="inner-main"></div>
        <div class="inner-main"></div>
        <div class="inner-main"></div>
        <div class="inner-main"></div>

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
    height: 600px;
    margin: 10px;
    width: calc(100% / 5 - (20px ));
}

</style>
