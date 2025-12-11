import stockMarket from "./stock market.js"
// let s = stockMarket
// console.log(s.stocks);

function updateCategory(category ,action){
    let so = stockMarket
    delete so["lastUpdated"]
    console.log(so);
    
    
   
    
    if (action === "buy"){

    for (let  s of s.stocks)
{if (s.category===category){s.previousPrices=s.currentPrice; s.currentPrice += (s.currentPrice / 100) }
}
s.push({lastUpdated :new Date})}


else if (action === "sell"){  for (let s  of  s)
{if (s.category===category){s.previousPrices=s.currentPrice; s.currentPrice -= (s.currentPrice / 100) }} s.push({ lastUpdated :new Date})
}

else {return "action not valide"}}


