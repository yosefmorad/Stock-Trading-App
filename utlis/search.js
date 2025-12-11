import stockMarket from "../stock market.js"

function searchStock(identifier){
    let arr = stockMarket.stocks
    
    
    
    
    if (identifier[0]== identifier[0].toUpperCase()){ return arr.filter((s)=> s.name === identifier)
        

      
    }
    else if (identifier.length === 7){
       return arr.filter((s)=>s.id=== identifier)
        

    }
else{
    console.log("not fondt");
    return []
    
}
}
export default searchStock