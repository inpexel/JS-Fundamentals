const expenses = [120, 50, 80, 30];

const totalExpenses = expenses.reduce((accumulator, expense)=>{
    return accumulator + expense;
});

console.log(totalExpenses);

//use  reduce to get maximum oor minimum

const numbers = [10, 5, 8, 20, 15];

const maxNumber = numbers.reduce((max, current)=>{
    return max > current ? current : max
})

console.log(maxNumber);

const minNumber = numbers.reduce((min, current)=>{
    return min > current ? current : min
})

console.log(minNumber);