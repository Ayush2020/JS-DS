const prompt = require(`prompt-sync`)()

function triplet(arr){
    let tripletes = []
    let n = arr.length;
    for( let i = 0; i < n- 2; i++){
        for( let j = i + 1; j < n - 1; j++){
            for( let k = j + 1; k < n; k++){
                if(arr[i] + arr[j] + arr[k] === 0){
                    tripletes.push([arr[i], arr[j], arr[k]])
                }
            }
        }
    }
    return triplet
}

let inputArray = prompt("Enter the numbers : ").split(",").map(Number)
let result = triplet(inputArray)
if(result.length >  0){
    console.log("Triplets with sum equal to 0 are:", result)
}else{
    console.log("No triplets found with sum equal to 0")
}
