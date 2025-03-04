function getRandomMonth(){
    return Math.floor(Math.random() * 12) + 1;
}

const birthMonths = {}

for(let i = 1; i <= 12; i++){
    birthMonths[i] = [];
}

for(i = 1; i <= 50; i++){
    let month = getRandomMonth();
    birthMonths[month].push(i);
}

for(let month in birthMonths){
    console.log(`Month ${month}: ${birthMonths[month].join(', ')}`);
}