const rollCounts = {1 : 0, 2 : 0, 3: 0, 4 : 0, 5 : 0, 6 : 0}

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

let maxRolls = 10
let maxReached = false

while(!maxReached) {
    let roll = rollDie()
    rollCounts[roll]++;
    if(rollCounts[roll] === maxRolls){
        maxReached = true
    }
}
let maxNum = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
let minNum = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);

console.log("Final Die Roll Counts:", rollCounts);
console.log(`Number that appeared the most: ${maxNum} (${rollCounts[maxNum]} times)`);
console.log(`Number that appeared the least: ${minNum} (${rollCounts[minNum]} times)`);