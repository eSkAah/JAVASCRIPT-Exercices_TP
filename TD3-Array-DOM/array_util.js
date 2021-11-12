/**
 * 
 * @param {array} array 
 * @returns 
 */
export function calcul(array){
  let number = 0;
  for(let i = 0 ; i < array.length ; i++){
    number += array[i];
  }
  return number;
}

/**
 * Fonction qui permet compter les nombres pair d'un tableau
 * @param {array} array 
 * @returns 
 */
 export function countEven(array) {
  let count = 0;
  for(let i = 0 ; i < array.length ; i++){
     if(array[i]%2 == 0){
       count++
     }
  }
  return count;
}

/**
 * Fonction qui retourne le plus grand nombre d'une serie d'entiers 
 * @param  {...any} props 
 * @returns 
 */
 export function maxEvenA(...props){
  let bigger = 0;
  let current;
for(let i = 0; i < props.length; i++){
  current = props[i];
  if(current > bigger && props[i]%2 == 0) bigger = props[i];
}
return bigger;
}


/**
 * 
 * @param {Array} arr 
 * @param {Number} element 
 * @returns 
 */
export function dichoSearch (arr, element) {
  let result = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end && result === -1) {
    const half = Math.round((end + start) / 2);
    if (element === arr[half]) {
      result = half;
    } else if (element > arr[half]) {
      start = half + 1;
    } else {
      end = half - 1;
    }
  }
  return result;
}
