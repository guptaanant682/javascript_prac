function findLargestElement(numbers) {
    let max = -2147483648;
    for(let i=0; i<10; i++){
        if(max<numbers[i]){
            max=numbers[i];      
        }
    }
    return max;
}

// let num = [-3,-5,-3,-4,-67,-45];
// let num = [-3,-5,3,4,67,45];
let num = [3,7,2,9,1];

const result = findLargestElement(num);
console.log(result);
module.exports = findLargestElement;