
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