// Generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i =0;i<6;i++){
        color += hex[Math.floor(Math.random() *16)]
    }
    console.log(color);
    return color
}
let intervalId 

const startChangingColor = function(){
   function changeBgColor(){
    
    document.body.style.backgroundColor =  randomColor();
   }
   if (!intervalId){
    intervalId = setInterval(changeBgColor,2000)
   }

 
}

const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null

}

document.querySelector("#start").addEventListener('click', startChangingColor , false)

document.querySelector("#stop").addEventListener('click', stopChangingColor , false)