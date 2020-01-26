function merge(arr1,arr2){
  let i=0,j=0,result=[];
  while(i<arr1.length&&j<arr2.length){
    if(arr1[i]<arr2[j]){
      result.push(arr1[i]);
      i++
    }else{
      result.push(arr2[j]);
      j++
    }
  }
  while(j<arr2.length){
    result.push(arr2[j])
    j++;
  }
  while(i<arr1.length){
    result.push(arr1[i])
    i++;
  }
  return result
}
function mergeSort(arr){
  if(arr.length<=1) return arr
  let mid=Math.floor(arr.length/2);
  let left=mergeSort(arr.slice(0,mid));
  let right=mergeSort(arr.slice(mid));
  return merge(left,right)
  

}

console.log(mergeSort([17,4,1,7,2,9,5]))