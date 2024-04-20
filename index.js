function twoNumberSum(array, targetSum) {  //funcion que recibe el arreglo y la suma objetivo
    const result = []; //arreglo vacio a retornar

    array.forEach((element,index) => { //por cada elemento del arreglo y su indice
        for (let temp = index + 1; temp < array.length; temp++) { //desde el siguiente elemento de el arreglo
            const element2 = array[temp];
            if (element + element2 === targetSum){
                result.push(element, element2);
            }

        }
    })
    return result //retorna el arreglo
}

const array = [3, 5, -4, 8, 10, 1, -1, 5]  //areglo modificado para pruebas
const targetSum = 10
const result = twoNumberSum(array, targetSum)
console.log(result)

