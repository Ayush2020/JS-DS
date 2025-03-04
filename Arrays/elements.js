const generateRandomNumbers = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 900) + 100); 
    }
    return arr;
};

const findSecondLargestAndSmallest = (arr) => {
    let firstMax = -Infinity, secondMax = -Infinity;
    let firstMin = Infinity, secondMin = Infinity;

    for (let num of arr) {
   
        if (num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
        } else if (num > secondMax && num !== firstMax) {
            secondMax = num;
        }

     
        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num < secondMin && num !== firstMin) {
            secondMin = num;
        }
    }

    return { secondLargest: secondMax, secondSmallest: secondMin };
};


let numbers = generateRandomNumbers();
console.log("Generated Numbers:", numbers);

let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(numbers);
console.log(`Second Largest: ${secondLargest}`);
console.log(`Second Smallest: ${secondSmallest}`);
