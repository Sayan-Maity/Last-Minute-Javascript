## Different ways to write [Filter]:

const arr = [1,2,3,4,5,6];
```
// Eg-1
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
// Eg-3
const res3 = arr.filter((arr) => {
    return arr > 2
})
```
```
// Eg-4
const res4 = arr.filter((arr) => arr > 2)
```
```
// Eg-5
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

## Different ways to write [Map]:

const arr = [1,2,3,4,5,6];
```
// Eg-1
function logic (arr) {
    return arr.toString(2)
}
const res = arr.map(logic)
```

```
// Eg-2
const res2 = arr.map(function logic (arr) {
    return arr.toString(2)
})
```

```
// Eg-3
const res3 = arr.map((arr) => {
    return arr.toString(2)
})
```

```
// Eg-4
const res4 = arr.map((arr) => arr.toString(2))
```

```
// Eg-5
function func(arr) {
    return arr.toString(2)
}
Array.prototype.myMap = function (logic) {
    const res = [];
    for(let i=0;i<this.length;i++) {
        res.push(logic(this[i]))
    }
    return res
}
const res5 = arr.myMap(func)
```

```
console.log(res)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)


Output:
[ '1', '10', '11', '100', '101', '110' ]
[ '1', '10', '11', '100', '101', '110' ]
[ '1', '10', '11', '100', '101', '110' ]
[ '1', '10', '11', '100', '101', '110' ]
[ '1', '10', '11', '100', '101', '110' ]
```


## Different ways to write [Reduce]:

const arr = [1,2,3,4,5]

```
// Eg-1
function logic(acc, curr) {
    return acc+=curr;
}
const res = arr.reduce(logic)
```

```
// Eg-2
const res2 = arr.reduce(function (acc, curr) {
    acc+=curr;
    return acc
}, 0)
```

```
// Eg-3
const res3 = arr.reduce((acc, curr) => {
    acc+=curr;
    return acc;
}, 0)
```

```
// Eg-4
function logic2(acc, curr) {
    return acc+=curr;
}
const res4 = arr.reduce(logic2)
```

```
// Eg-5
function logic3(acc, curr) {
    return acc+=curr;
}
Array.prototype.myReduce = function (logic, initial) {
    let res = initial;
    for(let i=0;i<this.length;i++) {
        res = logic(res, this[i]);
    }
    return res;
}
const res5 = arr.myReduce(logic3, 0);
```

```
console.log(res)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)


Output:
15
15
15
15
15
```

