
import { defineStore } from 'pinia'
import axios from 'axios'


export const useWarkopStore = defineStore('counter', {
  state: () => ({ 
    baseUrl : "http://localhost:3000",
    warkopData : '',
    warkopDetail:'',
    favs:''
  }),
  getters: {},
  actions: {   
    async fetchWarkop(input) {
      try {
        if (!input) {
          console.log('masuk tanpa filter')
          const { data } = await axios({
            url: this.baseUrl + '/warkop',
            method: 'GET'
          })
          this.warkopData = data
        
        } else {
          const { data } = await axios({
            url: `${this.baseUrl}/warkop?filter=${input}`,
            method: 'GET'
          })
          this.warkopData = data
          console.log(this.warkopData,"ini di else")
          console.log(input,"ini di else")
        }
      } catch (err) {
        console.log(err)
      }
    },
    async nextPage(page) {
        try {
          let { data } = await axios({
            url: this.baseUrl + "/warkop",
            method: "get",
            params: { page },
          });
  
          this.warkopData = data;
        } catch (err) {
          console.log(err)
          Swal.fire({
            icon: "error",
            title: "Oops...",
          });
        }
    },
    async fetchWarkopId(value){
        try {
          console.log(value,"<<<");
          const { data } = await axios({
            url:this.baseUrl+`/warkop/${value.id}`,
            method:"get",
            headers: value
          })
          console.log(data,"<<etail")
          this.warkopDetail = data
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...", 
          });
        }
    },
    async addFavourite(id){
        try {
          // console.log(value,"<<<");
          const { data } = await axios({
            url:this.baseUrl+'/favourite/'+id,
            method:"post",
            headers:{
              access_token:localStorage.access_token,
            }
            
          })
          Swal.fire({
            icon: 'success',
            title: 'Udah ada di list OTW',
            showConfirmButton: false,
            timer: 1500
          })
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Udah ada di list OTW brooo! gaskeun!',
            showConfirmButton: false,
            timer: 1500
          })
        }
    },
    async fetchFavourite() {
        try {
          const { data } = await axios ({
            url: this.baseUrl+'/favourite',
            method:"get",
            headers:{
              access_token:localStorage.access_token,
            },
          })
          this.favs =  data
          console.log( data )
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: error.errors[0].message,
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
     
  },
})