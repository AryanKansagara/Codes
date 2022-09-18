// Who's buying lunch ? (coding challenge)

function whosPaying(names){

    let n = names.length;
    let randomPersonIndex = Math.random();
    randomPersonIndex = randomPersonIndex*n;
    let personPayingIndex = Math.floor(randomPersonIndex);
    return names[personPayingIndex] + " is going to buy lunch today!";

}

names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

console.log(whosPaying(names));