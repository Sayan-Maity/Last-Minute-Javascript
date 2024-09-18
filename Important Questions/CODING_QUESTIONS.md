# Coding Questions 

## Bubble Sort (manual swapping)
```

function bubbleSort(arr) {
    const n = arr.length;
    for(var i=0;i<n;i++) {
        for(var j=0;j<n-i-1;j++) {
            if(arr[j]>arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr)
}
sortArr(arr)

const arr = [0,0,3,9,4,1,8,0]
console.log(bubbleSort(arr))

```


## Merge 2 sorted arrays
```

    const arr = [1,2,3]
    const arr2 = [4,5,6]

    function mergeArray(arr, arr2) {
        let mergedArr = []
        let i = 0, j = 0;
        while(i < arr.length && j < arr2.length != 0) {
            if(arr[i] < arr2[j]) {
                mergedArr.push(arr[i])
                i++
            }
            else {
                mergedArr.push(arr2[j])
                j++
            }
        }

        while(i < arr.length) {
            mergedArr.push(arr[i])
            i++
        }
        while(j < arr2.length) {
            mergedArr.push(arr2[j])
            j++
        }

        return mergedArr
    }

    console.log(mergeArray(arr, arr2))
    
```



## Second Largest element using Selection Sort (manual swapping)
```

const selectionSort = (arr) => {
    const n = arr.length
    for(var i=0;i<n-1;i++) {
        var smaller = i;
        for(var j=i+1;j<n;j++) {
            if(arr[smaller]>arr[j]) {
                let temp = 0;
                temp = arr[smaller];
                arr[smaller] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[n-2];
}

const arr = [0,0,3,9,4,1,8,0]
console.log(selectionSort(arr))

```

## Find second largest number in an array
```

const findSecondLargest = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
};

const arr = [0, 0, 3, 9, 4, 1, 8, 0];
console.log(findSecondLargest(arr)); 

```


## Check if Anaagram
```

#include <bits/stdc++.h>
using namespace std;

bool count (string str, string str2) {
    if(str.size() != str2.size()) return false;

    map<char, int>mpp;
    map<char, int>mpp2;

    for(auto it: str) mpp[it]++;
    for(auto it: str2) mpp2[it]++;

    if(mpp == mpp2) return true;
    return false;
}

int main() {
    string str = "sayan";
    string str2 = "nayas";
    
    cout<<count(str, str2);
    
}

```


## Fibonacci Series
```

function fibonacci(n) {
    if (n <= 0) return 0;
    else if (n === 1) return 1;
    else return fibonacci(n - 1) + fibonacci(n - 2);
}

const n = 5;

for (let i = 0; i < n; i++) {
    console.log(fibonacci(i) + " ");
}


```

## Reverse each word of given sentence

```

const x = "Welcome to Programiz";
const y = "Welcome to Programiz";

const demo2 = x.split('').reverse().join('')
const demo3 = y.split(' ').reverse().join(' ')

console.log(demo2) // zimargorP ot emocleW
console.log(demo3) // Programiz to Welcome

```

## Flatten array to infinity using recursion

```

function flatten (array) {
  return array.reduce((acc, curr) => {
    if(Array.isArray(curr)) {
      acc.push(...flatten(curr))
    } 
    else {
      acc.push(curr)
    }
    return acc;
  }, [])
}
const nestedArray = [1, 2, [3, [4]], 5];
const flattenedArray = flatten(nestedArray);
// const flattenedArray = nestedArray.flat(Infinity)
console.log(flattenedArray)


Output:
[1, 2, 3, 4, 5]

```

## Counting instances of values in an array

```

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
var output = fruits.reduce((acc, curr) => {
  if (acc[curr]) acc[curr]++;
  else acc[curr] = 1;
  return acc;
}, {})
console.log(output)


Output:
{ apple: 2, banana: 3, orange: 2 }

```

## Change "Hello World" to "DlRoW OlLeH"


```

function reverseCase(str) {
  let reversedStr = str.split("").reverse().join("");

  var tempStr = "";
  for (var i = 0; i < reversedStr.length; i++) {
    var char = reversedStr.charAt(i);
    if (i % 2 == 0) tempStr += char.toUpperCase();
    else tempStr += char;
  }

  return tempStr;
}
let input = "hello world";
console.log(reverseCase(input));

Output:
DlRoW OlLeH

```

## Implement Promise.all()

```


function promiseAll (promises) {
    return new Promise((resolve, reject) => {
        let cnt=0;
        let result=[]

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((res) => {
                cnt++;
                result[index] = res;
                if(cnt == result.length) {
                    resolve(result)
                }
            })
            .catch((err) => {
                reject(err)
            })
        })
    })
}

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

promiseAll([p1,p2,p3])
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })


Output:
[1,2,3]


```

## Find longest word in string

```

const sentence = "The quick brown fox jumps over the lazy dog"

function longest(sen) {
    sen = sen.split(" ")
    var maxLen=0;
    var res=""

    for(let i=0;i<sen.length;i++) {
        let word = sen[i];
        if(word.length > maxLen) {
            maxLen=word.length;
            res=word
        }
    }
    return res;
}
console.log (longest(sentence)) 


Output:
quick

```

## Deep Clone an object

```

function deepClone (obj) {
    if(obj == null || typeof obj !== 'object') return obj;

    if(Array.isArray(obj)) {
        return obj.map(deepClone)
    }

    let clonedObj = {}
    for(const key in obj) {
        if(obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key])
        }
    }
    return clonedObj
}

const original = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4],
  },
};

const copy = deepClone(original)
console.log(copy)


Output:
{ a: 1, b: { c: 2, d: [ 3, 4 ] } }

```

## Reverse a String

```

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString('hello'));  


Output: 'olleh'

```

## Capitalize the first letter of each word in a string

```

function capitalizeWords (sen) {
    sen = sen.split(' ')
    let ans=""
    for(let i=0;i<sen.length;i++) {
        let word = sen[i];
        let character = word.charAt(0).toUpperCase() + word.slice(1)
        ans+=character + (' ')
    }

    return ans
}

console.log(capitalizeWords('the quick brown fox'));


Output:
The Quick Brown Fox

```

## Given an object, return the given output

```
const obj = {
  venueType: [1101, 1102],
  areaType: [2101, 2102],
};

Output:
venueType=1101,1102&areaType=2101,2102

const res = Object.keys(obj).map((key) => 
    `${key}=${obj[key]}`).join('&');
```

## Filtering and Mapping

```
function filterAndDouble(numbers) {
    return numbers.filter(num => num % 2 !== 0).map(num => num * 2);
}

console.log(filterAndDouble([1, 2, 3, 4, 5]));  


Output:
[2, 6, 10]

```

## Remove duplicates from a string
```
function removeDuplicate(input) {
    let result = ""
    for (let i = 0; i < input.length; i++) {
        if (result.indexOf(input[i]) === -1) {
            result += input[i]
        }
    }
    console.log(result)
    return result
}

const input = "banana"
removeDuplicate(input)

Output:
ban
```

## Implement Map and Filter using Reduce:
```
function myFilter(check, arr) {
    return arr.reduce((acc, curr) => {
        if(check(curr)) {
            acc.push(curr)
        }
        return acc;
    }, [])
}

const arr = [1,2,3,4,5]
const res = arr.filter(i => i>2)
const res2 = myFilter(i=>i>2, arr)
console.log(res)
console.log(res2)

Output:
[3,4,5]
[3,4,5]
```

```
function myMap(check, arr) {
    return arr.reduce((acc, curr) => {
        acc.push(check(curr))
        return acc;
    }, [])
}

const arr = [1,2,3,4,5]
const res = arr.map(i => i*2)
const res2 = myMap(i=>i*2, arr)
console.log(res)
console.log(res2)

Output:
[2,4,6,8,10]
[2,4,6,8,10]
```


## Find greatest number using reduce
```
const arr = [1,2,8,3,4,5]

// find the maximum
function logic (acc, curr) {
    if (acc<curr) {
        acc = curr;
    }
    return acc;
}

const res = arr.reduce(logic, -Infinity)
console.log(res)

Output:
8

```