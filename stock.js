//Best time to buy and sell stock

const maxProfit = function(prices) {
    
    let mxprof = 0;
    let minval = Infinity
    for(let i=0;i<prices.length;i++){
        
        minval = Math.min(minval,prices[i]);
        mxprof = Math.max(mxprof,prices[i] - minval)
    }
     
     return mxprof;
 };

 let res = maxProfit([7,1,5,3,6,4])
 console.log(res)