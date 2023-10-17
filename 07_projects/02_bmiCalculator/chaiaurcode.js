const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener('submit', function (e) {
        e.preventDefault() 
        
        const height = parseInt(document.querySelector("#height").value)
        const weight = parseInt(document.querySelector("#weight").value)
        const results = document.querySelector("#results")
        const resultWeight = document.querySelector("#resultWeight") 

        if( height === " " || height <0 || isNaN(height)){
                results.innerHTML = `Please give a valid height  ${height}`
        }else if (weight === " " || weight < 0 || isNaN(weight) ){
            results.innerHTML = `Please give a valid weight ${weight}`
        } else{
              const bmi = (weight/((height*height)/10000)).toFixed(2)

              // Show the result

              results.innerHTML = `<span>BMI is : ${bmi}</span>`

              if(bmi<18.6){
                resultWeight.innerHTML =`<span>Underwight!!</span>`
              }else if (bmi >=18.6 && bmi < 24.9 ){
                resultWeight.innerHTML =`<span>Normal Range</span>`
              }else{
                resultWeight.innerHTML = `<span>Over weight!!!!</span>`
              }
        } 
        
}) 