# Coding Questions 

## Selection sort using manual swapping
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


## Print 3 statements in order (where one is asynchrnous call)
```

let initiate = true

let b = (time, work) => {
    return new Promise ((resolve, reject) => {
        if(initiate) {
            setTimeout(() => {
                resolve(work())
            }, time)
        }
        else {
            reject(console.log("Error, cannot print"))
        }
    })
}

b(0, ()=>console.log("Hello"))
.then(() => {
    return b(2000, ()=>console.log("World")) 
})
.then(() => {
    return b(0, ()=>console.log("Here I am"))
})
.catch(() => {
    console.log("You cannot print the sentence")
})
.finally(() => {
    console.log("I am done")
})

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