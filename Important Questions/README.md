## Different ways to write Filter:

const arr = [1,2,3,4,5,6];
```
function logic (arr) {
    return arr > 2
}
const res = arr.filter(logic)
```
```
// Eg-2
const res2 = arr.filter(function logic (arr) {
    return arr > 2
})
```
```
const res3 = arr.filter((arr) => {
    return arr > 2
})
```
```
const res4 = arr.filter((arr) => arr > 2)
```
```
function func (arr) {
    return arr>2;
}
Array.prototype.myFilter = function (logic) {
    const arr = [];
    for(let i=0;i<this.length;i++) {
        if(logic(this[i])) {
            arr.push(this[i])
        }
    }
    return arr;
}
const res5 = arr.myFilter(func)
```
```
console.log(res)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)


Output:
[ 3, 4, 5, 6 ]
[ 3, 4, 5, 6 ]
[ 3, 4, 5, 6 ]
[ 3, 4, 5, 6 ]
[ 3, 4, 5, 6 ]
```