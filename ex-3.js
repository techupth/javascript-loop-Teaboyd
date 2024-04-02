// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
for (let i = 0 ; i < 4 ;i++){
    console.log(scores[i]);
    if (i >= 3){
        minScore = i;
        break;
    }
}
console.log(minScore);
