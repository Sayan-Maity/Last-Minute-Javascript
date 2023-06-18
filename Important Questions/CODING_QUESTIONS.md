# Coding Questions 

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