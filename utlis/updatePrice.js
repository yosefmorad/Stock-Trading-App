import stockMarket from "../stock market.js"
let u = stockMarket
function updatePrice(name ,action){

    if (action === "buy") {for (let i of stockMarket.stocks){
    if(i.name=== name){i.previousPrices.push(i.currentPrice) ; i.currentPrice += ((i.currentPrice / 100)*5)}}}





    else if (action === "sell") {for (let i of u.stocks){
    if(i.name=== name){i.previousPrices.push(i.currentPrice) ; i.currentPrice -= ((i.currentPrice / 100)*5)}}}
    else{return " action not valide"}}

    console.log(updatePrice("HeatFlow Renewables","sell"));


export default updatePrice
    