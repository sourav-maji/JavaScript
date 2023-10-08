const myNums = [1,2,3]

// const myTotal =myNums.reduce( function (acc, currVal ){
//     console.log(`Acc : ${acc}  & current value : ${currVal}`);
//     return acc+ currVal;
// }, 0)

// Using Arrow Function
const myTotal = myNums.reduce( (acc, currVal) =>{
    return acc+ currVal;
},0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price:2999
    },
    {
        itemName : "Python course",
        price:999
    },
    {
        itemName : "Mobile Dev course",
        price:5999
    },
    {
        itemName : "Data Science course",
        price:12999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item)=> acc+ item.price,0)
console.log(totalPrice);