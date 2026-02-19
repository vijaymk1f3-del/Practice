let newArr=[1,23,4,7,56,44]
let newArr2=[]
for(let i=0;i<newArr.length;i++){
    let element=newArr[i]
    newArr2.push(element*element)
}
console.log(newArr2)

let newArr3=newArr.map(e=>{  return e*e})
console.log(newArr3)

console.log(newArr.filter(e=>{ return e>7}))