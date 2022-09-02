const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkButton = document.querySelector("#check-button")
const outputH = document.querySelector("#output")

checkButton.addEventListener('click', checkLuck)

function checkLuck(){
    dob = dateOfBirth.value
    let luckFactor = calculateSum(dob)
    givenNumber = Number(luckyNumber.value)

    if (dob == "" || givenNumber == 0){
        outputH.innerText = "Enter valid inputs"
    } else {
        if(luckFactor%givenNumber ==0) {
            outputH.innerText = "You are lucky"
        }
    
        else {
            outputH.innerText = "You are now eligible to make your own luck"
        }
    }

    

}

function calculateSum(dob){
    dob = dob.replaceAll("-","")
    let sum = 0

    for(i=0; i<dob.length;i++){
        
        sum = sum + Number(dob.charAt(i))
    }
    return sum
}