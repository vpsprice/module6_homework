let arr = [0, 7, 14, 21, 28, 35, 35, 'fdf', 'fd', 0, 25,5,11];
function getArr(arr) {
  let even = 0;
  let uneven = 0;
  let zero = 0;
  let others = 0;
for (let i=0;i<arr.length;i++){
  if (arr[i]=== 0){
    even++;
  }
  else if (arr[i]% 2 ===0) {
    uneven++}
   else if (arr[i]% 1 ===0){
    zero++
   }
   else {
    others++
   }
}
console.log(`Количество нулей: ${even}, Четных элементов: ${uneven}, нечетных элементов: ${zero}, других элементов ${others}`);
}
   getArr(arr);