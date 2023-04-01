<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store';
export default{
  data(){
    return{
      store,

    };
  },
  created() {
      axios.get(this.store.APIbase + this.store.APIhome + this.store.APIfilm).then((res) => {
          // console.log(res.data.results[0].original_title);
          this.store.movies = res.data.results;
          console.log(this.store.movies);
      });
  },
  methods:{
    serch(){
      let apiNewString
      if((this.store.serchType == ''|| this.store.serchType =='all' )&& this.store.serch == ''){
        alert('inserire parole chiave')
      }else{
        if(this.store.serchType=='serie' && this.store.serch!=''){
          apiNewString=this.store.APIbase + this.store.APIsearch+this.store.APIserie
          apiNewString += `&query=${this.store.serch}`; 
        }else if(this.store.serchType=='serie' && this.store.serch==''){
          apiNewString=this.store.APIbase + this.store.APIhome+this.store.APIserie
        }else if(this.store.serchType == 'film' && this.store.serch =='' ){
          apiNewString = this.store.APIbase + this.store.APIhome + this.store.APIfilm;
        }else if(this.store.serchType == 'film' &&  this.store.serch != ''){
          apiNewString = this.store.APIbase + this.store.APIsearch + this.store.APIfilm;
          apiNewString += `&query=${this.store.serch}`; 
        }else if(this.store.serchType == '' || this.store.serchType == 'all'){
          apiNewString = this.store.APIbase + this.store.APIsearch + this.store.APIall;
          apiNewString += `&query=${this.store.serch}`; 
        }
    }
      axios.get(apiNewString).then((res) => {
        this.store.movies = res.data.results;
        console.log(res.data.results);
      });

    }
  },
  components:{
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <div>
    <AppHeader @serchCard="serch()"></AppHeader>
    <AppMain></AppMain>

  </div>
    
</template>

<style scoped>

</style>
