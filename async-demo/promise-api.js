const p1 = new Promise(resolve=>{
    setTimeout(() => {
        console.log('Async operation1...');
        //resolve(1);
resolve(1);
    }, 2000);
});
const p2 = new Promise((resolve)=>{
    setTimeout(() => {
        console.log('Async operation2...');
        resolve(2);
    }, 3000);
});


Promise.race([p1,p2])
.then((res)=>{
    console.log(res);
})
.catch((err)=>
    console.log(err.message)
)