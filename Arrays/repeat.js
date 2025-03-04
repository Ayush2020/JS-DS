const repeatedDigitNumber = []
function getDigits(){
    for (let i  = 0; i < 100; i++){
        let numStr = i.toString()
        if(numStr.length === 2 && numStr[0] === numStr[1]){
            repeatedDigitNumber.push(i)
        }
    }
    console.log(repeatedDigitNumber)
}

getDigits()