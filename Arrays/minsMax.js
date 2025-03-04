function generateRandomNumbers(){
    return Math.floor(Math.random() * 900) + 100
}

function findSecondLargestAndSmallest(arr){
    let largest = -Infinity, secondLargest = -Infinity
    let Smallest = Infinity, secondSmallest = Infinity
    for(let num of arr){
        if(num > largest){
            secondLargest = largest
                largest = num
            }else if(num > secondLargest && num < largest){
                secondLargest = num
        }
        if(num < Smallest){
            secondSmallest = Smallest
            Smallest = num 
        }else if (num < secondSmallest && num !== Smallest){
            secondSmallest = num
        }
    }
    return [secondLargest, secondSmallest]
}

const randomNumbers = []
for(let i = 0; i < 10; i++){
    randomNumbers.push(generateRandomNumbers())
}

let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(randomNumbers);
console.log(`Second Largest: ${secondLargest}, Second Smallest: ${secondSmallest}`);