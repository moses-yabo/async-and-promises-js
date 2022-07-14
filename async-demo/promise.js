const p = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve(1);  //pending => resolved , fulfilled
        reject(new Error('new error')) // pending => rejected

   }) 
},2000);

p

.catch((result)=>{
console.log(result.message);
})