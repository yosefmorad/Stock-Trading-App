import stockMarket from "../stock market.js"




function filterStocksByPrice(givenPrice, above){
    if (givenPrice !== Number)
    return "price must bt nuymber"
    let arr = stockMarket.stocks
    if (above === true){return arr.filter((s)=> s.currentPrice > givenPrice)

    

} else if (above === false) {return arr.filter((s)=> s.currentPrice < givenPrice)
}
else {console.log("not found");
    return []
}
}

export default filterStocksByPrice