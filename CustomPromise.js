//mplement a function namedgetNumberwhich generatesa random number. 
//If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise. 
//Let’s also keep thepromise resolution/rejection time as a variable.1.JS promises should not be used.2.A custom promise function should be created.3.This function should be able to handle all 3 states Resolve, 
//Reject and Fulfilled.4.Should be able to accept callbacks as props





const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customPromise(executor){
   let state = PENDING
   let value = null
   let handlers = []
   let catchers = []

   function resolve(result){
      if(state !== PENDING) return;

      state = FULFILLED
      value = result
     
      handlers.forEach((h)=>h(value))

   }

   function reject(err){
     if(state !== PENDING) return;
     state = REJECTED
     value = err;
     catchers.forEach((c)=>c(value))
}
this.then = function(SuccessCallback){
    if(state === FULFILLED){
        SuccessCallback(Value)
    }
    else{
        handlers.push(SuccessCallback)
    }
}
this.catch = function(failureCallback){
    if(state === REJECTED){
        failureCallback(value)
    }
   else{
       catchers.push(failureCallback)
   }
 }
  executor(resolve,reject)
}

const random = (res,rej)=>{
   const RandomNumber = parseInt(Math.random()*100,10)
    setTimeout(()=>{
         if(RandomNumber % 5 === 0){
            rej(`Resolved your Promise ${RandomNumber}`)
         }
        res(`Resolved with num:${RandomNumber}`)

    },RandomNumber * 10)

}

let finalPromise = new customPromise(random)
finalPromise.then((val)=>{
    console.log("then log",val)
})
finalPromise.catch((val)=>{
    console.log("catch log",val)
})