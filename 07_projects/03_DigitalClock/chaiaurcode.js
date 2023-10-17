const clock = document.getElementById("clock")
// const clock = document.querySelector("#clock")



setInterval(function () {
    let date = new Date()
   const newTime =date.toLocaleTimeString()
    clock.innerHTML = `<span>${newTime}</span>`
}, 1000)