const dotask1 = ()=>{
const RandomNumber = parseInt(Math.random()*100,10)
return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(RandomNumber % 5 === 0){
                reject(`Resolved your Promise ${RandomNumber}`)
             }
            resolve(RandomNumber)
        },1000)
})
     
}

const dotask2 = (val) =>{
const RandomNumber = val * 50;
console.log(RandomNumber)
return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(RandomNumber < 10){
                reject(`reject your Promise ${RandomNumber}`)
             }
            resolve(RandomNumber)
        },2000)
})
}
const dotask3 = (value)=>{
    const RandomNumber = value + 100;
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(RandomNumber < 0){
                    reject(` reject your Promise ${RandomNumber}`)
                 }
                resolve(RandomNumber)
            },1000)
    })
}

const val = async()=>{
  try{
    let result = await dotask1()
    console.log("result"+" "+result)
    let value = await dotask2(result)
    console.log(value)
    let finalValue = await dotask3(value)
    console.log(finalValue)
    return finalValue
  }catch(e){
      console.log("error",e)
      throw(e)
  }
    
}


val().then((value)=>{
    console.log(value)
    return value
}).then((result)=>{
     result = result + 5
     console.log(result)
     return result
}).then((result)=>{
    let answer = result * 100 +" "+"test is good"
    console.log(answer)
}).catch((e)=>{
    console.log("got error",e)
})

