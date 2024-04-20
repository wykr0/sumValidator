function twoNumberSum(array, targetSum) { 
    const result = [];

    array.forEach((element,index) => {
        for (let temp = index + 1; temp < array.length; temp++) {
            const element2 = array[temp];
            if (element + element2 === targetSum){
                result.push(element, element2);
            }

        }
    })
    return result
}

const array = [3, 5, -4, 8, 10, 1, -1, 5] 
const targetSum = 10
const result = twoNumberSum(array, targetSum)
console.log(result)

