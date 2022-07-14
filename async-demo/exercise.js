
// getCustomers(1,(customers)=>{
//     console.log('Customer:',customers);
//     if(customers.isGold){

//         getTopMovies((movies)=>{
//             console.log('Top Movies',movies);
//             sendEmail(customers.email,movies,()=>{
//                 console.log('email has been sent');
//             });
//         });
//     }
// });

 

async function notifyCustomer() {
    const customer = await getCustomers(1);
    console.log('Customer:',customer);
    if (customer.isGold) {
       const  movies = await getTopMovies();
       console.log('Top Movies', movies);
        await sendEmail(customer.email,movies);
        console.log('Email sent...');
    }   
}
notifyCustomer();

 function getCustomers(id) {

    
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve({
                    id:1,
                    name:'Lindile - Yabo',
                    isGold:true,
                    email:'email'
                });    
            }, 4000);
            
    
    
    },4000);
    
    
};


 function getTopMovies() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(['movie1','movie2'])
 
        }, 4000);
        
    });
    
};



 function sendEmail(email, movies) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            
        },4000);
    });
   
};