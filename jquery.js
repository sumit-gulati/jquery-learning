
// Min and max valuen array

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

// Find biggest number

var a = 5;
var b = 8;
var c = 3;
var d = 10;
var e = 6;

if(a > b && a > c && a > d && a > e){
  console.log("a is bigger");
}
if(b > a && b > c && b > d && b > e){
  console.log("b is bigger");
}
if(c > a && c > b && c > d && c > e){
  console.log("c is bigger");
}
if(d > a && d > b && d > c && d > e){
  console.log("d is bigger");
}
if(e > a && e > b && e > c && e > d){
  console.log("e is bigger");
}


// Even and Odd Nos

var a = 9;
if(a%2==0){
  console.log("Even")
}
else{
  console.log("Odd")
}

// Total sum of even numbers

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

// Total sum of odd numbers

var a = 50;
var b = 0;
for(var i=1; i<= a; i++){

    if(i%2 !== 0){
      b = i + b;
    }
}
console.log("Total sum of odd numbers " +b);

// Sum of Array elements
var array = [10, 2, 40, 23, 40];
var a = 0;
for (var i = 0; i <array.length; i++){
  a = a + array [i]

  console.log(a)
}


var arr = [1,2,3,4,5]
var rev = arr.reverse();
console.log(rev)

var num = [10,14,3,45,74,1,9]

function sorting(a, b){
  return (a-b);
  
}
console.log(num)



