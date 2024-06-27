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
        return acc;
  }, [])
}
const nestedArray = [1, 2, [3, [4]], 5];
const flattenedArray = flatten(nestedArray);
// const flattenedArray = nestedArray.flat(Infinity)
console.log(flattenedArray)

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

```


## Find the output of the following code

(Q1).

```

console.log('a')

async function b() {
    setTimeout(() => {
        console.log('b')
    }, 0)
}
b()

console.log('c')

async function d () {
    return new Promise ((resolve, reject) => {
        console.log('d')
        resolve()
    })
}
d()

console.log('e')


Output: 
a
c
d
e
b

```

(Q2).

```

let a=b=4;
console.log(a, b)

Output :
4 4

```
