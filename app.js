import readlineSync from "readline-sync"
import searchStock from './utlis/search.js'
import  filterStocksByPrice from "./utlis/filterStocksByPrice.js"
import updatePrice from "./utlis/updatePrice.js"
import stockMarket from './stock market.js'





let menu = "1.Search for a stock by name or id \n ,2. Show all stocks above or below a given price   \n,3. Buy or sell a stock\n,4. Exit"


while (true){
console.log(menu);
let userchoice = readlineSync.question("enter your chioce")



if(userchoice === "1"){
   let  search = readlineSync.question("enter id or name")
console.log(searchStock(search));}




else if (userchoice === "2"){
    let price =  readlineSync.question("price")
    let above =  readlineSync.question("enter true or false")
    
    console.log(filterStocksByPrice(price ,above));}
    


else if (userchoice === "3"){
    let name =  readlineSync.question("enter name of stock")
    let chiose =  readlineSync.question("sell or buy")
    console.log(updatePrice(name ,chiose));
}

  

else if (userchoice === "4"){
    break}}