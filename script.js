function isAFactor(x,y){
    if (y % x == 0){
      return true;
    } else {
      return false;
    }
}
function allFactors(y, array){
  //document.write("factors: ");
  for (let i = 0; i < y; i++){
    if (isAFactor(i,y)){
      array.push(i);
      //document.write(i + " ");
    }
  }
}

function sumFactors(array){
  sum = 0
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}
function isAmicable(array1, array2, num1, num2){
  if((sumFactors(array1) == num2) && (sumFactors(array2) == num1)){
    return true;
  } else {
    return false;
  }
}
const factors1 = [];
const factors2 = [];
// number1 = prompt("First number:")
// number2 = prompt("Second number:")
number1 = 284
number2 = 220
allFactors(number1,factors1)
allFactors(number2, factors2)
//document.write("sums: " + sumFactors(factors1) + "  " + sumFactors(factors2))
if(isAmicable(factors1, factors2, number1, number2) == true){
  document.getElementById("amicable").innerHTML = "The numbers: " + number1 + " and " + number2 + " are amicable."
} else {
  document.getElementById("amicable").innerHTML = "The numbers: " + number1 + " and " + number2 + " are not amicable."
}

factorstring = ""
for (let i = 0; i < factors1.length; i++){
  factorstring = factorstring + factors1[i] + " "
} 
factorstring2 = ""
for (let i = 0; i < factors2.length; i++){
  factorstring2 = factorstring2 + factors2[i] + " "
} 
document.getElementById("factors").innerHTML = "First number factors: " + factorstring + "Second number factors: " + factorstring2;


