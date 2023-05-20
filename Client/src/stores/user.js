
import { defineStore } from 'pinia'
import axios from 'axios'


export const useUserStore = defineStore('user', {
  state: () => ({ 
    baseUrl : "http://localhost:3000",
    midtransToken : []
  }),
  getters: {},
  actions: {
    async login(value){  
      try {
        const { data } = await axios ({
          url: this.baseUrl+'/login',
          method:"post",
          data:{
            email:value.email,
            password:value.password
          },
        })
        localStorage.setItem('access_token',data.access_token)
        this.router.push('/warkop')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: "Cannot Login",
          showConfirmButton: false,
          timer: 5000
        })
      }
    },
    async register(value){
      try {
        const { data } = await axios({
          url: this.baseUrl+'/register',
          method:'post',
          data:{
            email:value.email,
            password:value.password,
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Thank you for register,please log in here',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.push('/login')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Email already in use ',
          showConfirmButton: false,
          timer: 5000
        })
      }
    },
    async getDonate () {
      try {
        
          // GET MIDTRANS TOKEN
          const { data } = await axios({
              url: this.baseUrl + '/generate-midtrans',
              method: "POST",
              headers: {
                  access_token: localStorage.getItem('access_token')
              }
          });

          this.midtransToken = data;
          console.log(data, "??????????");

          // const cp = this.changePremium

          // SHOW MODAL MIDTRANS
          window.snap.pay(data.token, {
              onSuccess: function (result) {

                  // console.log(result);

                  // CHANGE TO PREMIUM
                  // cp()

              },
              onPending: function (result) {
                  /* You may add your own implementation here */
                  // alert("wating your payment!");
                  console.log(result);
              },
              onError: function (result) {
                  /* You may add your own implementation here */
                  // alert("payment failed!");
                  console.log(result);
              },
              onClose: function () {
                  /* You may add your own implementation here */
                  // alert('you closed the popup without finishing the payment');
              }
          })

      } catch (err) {
          let error = err.response.data.message
          error = `<div class="container">${error}</div>`;

          Swal.fire({
              icon: "error",
              title: "Login dulu , biar malaikat nyatet namanya enak",
              html: error,
          });
      }
  },
  },
})