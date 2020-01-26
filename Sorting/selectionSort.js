function swap(arr,i1,i2){
  [arr[i1],arr[i2]]=[arr[i2],arr[i1]]
}
function SelectionSort(arr){
  for(let i=0;i<arr.length;i++){
    smallest=i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[smallest]>arr[j]){
       smallest=j
      }
    }
    swap(arr,i,smallest)
  }
  console.log(arr)
  return arr
}

SelectionSort([8,6,1,4,5,2])