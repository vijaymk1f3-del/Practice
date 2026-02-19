let arr=[1,23,4,7,56,44]

console.log(arr)
console.log(arr.length)

console.log("Array into String",arr.toString())


for(let i=0;i<arr.length;i++){
    let element=arr[i]
    console.log(element)
}

arr.forEach((v,i) => {
    console.log("Index: "+i+", Value: "+v);
});
