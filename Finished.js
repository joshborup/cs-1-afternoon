// is even with recursion

function isEven(num){
    if(num === 0){
        return true
    }else if(num === 1){
        return false
    }else {
       return isEven(num - 2)
    }
}

isEven(15)

//reverse string with recursion

function reverse(str){
  if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

reverse('this');


// exponent function using recursion
function exponent(number, exp){

    if(exp === 0){
        return newNumber;
    }else{
       newNumber = number * number
       exp--
       return exponent(number, exp)
    }
}

exponent(4, 4);

//binary search 

function binarySearch(array, number, start, end){

       
        var midpoint = Math.floor((start + end)/2)
        
        if(array[midpoint] == number){
            return true
        }else if(array[midpoint] < number) {
            return binarySearch(array, number, start + 1, end)
        }else if(array[midpoint] > number) {
            return binarySearch(array, number, start, end - 1)
        }else 
              
    return false;
}

let arr = [1, 100, 400, 445, 465, 600, 760, 800, 900];

binarySearch(arr, 100, 0 , arr.length-1);

//fibonacci

function fibonacci(num) {
    if(num === 0){
        return 0
    }else if(num === 1){
        return 1
    }else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}

fibonacci(10);