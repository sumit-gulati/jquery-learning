
array = [2, 5, 1, 50, 300, 999, 22]
max = array[0];
min = array[0];
for(var i = 0; i < array.length; i++){
    if(array[i] > max){
      max= array[i];
    }
    if(array[i] < min){
        min= array[i];
    }
}
console.log(min, max)

var a = 9;
if(a%2==0){
  console.log("Even")
}
else{
  console.log("Odd")
}

var a = 50;
var b = 0;
for(var i=1; i<= a; i++){

    if(i%2 == 0){
      b = i + b;
    }
    // if(i%2 !== 0){
    //   b = i + b;
    // }
}
console.log("Total sum of even numbers " +b);

var a = 50;
var b = 0;
for(var i=1; i<= a; i++){

    if(i%2 !== 0){
      b = i + b;
    }
}
console.log("Total sum of odd numbers " +b);
