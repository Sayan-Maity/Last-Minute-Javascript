# Polyfill

## Call, Apply and Bind polyfill:
```
const obj = {
    name: "sayan",
    age: 21
}

function printName(adverb) {
    console.log(this.name + " is " + adverb)
}

Function.prototype.myCall = function (scope, ...args) {
    scope._this = this
    return scope._this(...args)
}
Function.prototype.myApply = function (scope, ...args) {
    scope._this = this
    return scope._this(...args[0])
}
Function.prototype.myBind = function (scope, ...args) {
    scope._this = this
    return function () {
        scope._this(...args)
    }
}

printName.call(obj, 'bad');
printName.myCall(obj, 'bad');
printName.apply(obj, ['bad', 'good']);
printName.myApply(obj, ['bad', 'good']);
const copy = printName.bind(obj, 'bad') // returns function
copy()
const copy2 = printName.myBind(obj, 'bad') // returns function
copy2()
```

```
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

## Map polyfill:
```
Array.prototype.myMap = function (cb) {
    let arr = []
    for(let i=0;i<this.length;i++) {
        arr.push(cb(this[i]))
    }
    return arr;
}

const res = nums.map((item) => item)
console.log(res)
const res2 = nums.myMap((item) => item)
console.log(res2)
```

## Filter polyfill:
```
Array.prototype.myFilter = function(cb) {
    let arr=[]
    for(let i=0;i<this.length;i++) {
        if(cb(this[i], i, this)) {
            arr.push(cb(this[i]))
        }
    }
    return arr;
}

const res = nums.filter((item) => item%2==0)
console.log(res)
let res2 = nums.myFilter(function (item, ind, nums) {
    return item%2===0
})
console.log(res2)
```

## Reduce polyfill:
```
Array.prototype.myReduce = function (cb, init) {
    let acc = init;
    for(let i=0;i<this.length;i++) {
        if(acc) {
            acc = cb.call(undefined, acc, this[i], i, this)
        } else {
            acc = this[i]
        }
    }

    return acc;
}

const res = nums.reduce((sum, curr) => sum+curr, 0);
console.log(res)
const res2 = nums.myReduce((sum, curr) => sum+curr, 0);
console.log(res2)
```

## Promise() polyfill:
```
function myPromise(executor) {
  let onResolve, onReject, value;
  let isFulfilled = false,
    isRejected = false,
    isCalled = false;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }
  this.then = function (cb) {
    onResolve = cb;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (cb) {
    onReject = cb;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

function call() {
  return new myPromise((res, rej) => {
    setTimeout(() => {
      rej("Promise rejected");
    }, 0);
  });
}
call()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

```
function likeVideo(text) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Liked ${text}`);
    }, 1000);
  });
}
function likeVideo2(text) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Liked ${text}`);
    }, 1000);
  });
}
function likeVideo3(text) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(`Liked ${text}`);
    }, 1000);
  });
}
```

## Promise.all() polyfill:
```
Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    let res = [];
    let pending = promises.length;

    if (!promises.length) {
      resolve(res);
      return;
    }

    promises.forEach((p, i) => {
      p.then((val) => {
        res[i] = val;
        pending--;
        if (pending === 0) {
          resolve(res);
        }
      }).catch((err) => {
        reject(err);
      });
    });
  });
};
```

## Promise.any() polyfill:
```
Promise.anyPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    let errors = [];
    let pending = promises.length;

    if (!promises.length) {
      reject(new Error([], "All promises were rejected"));
      return;
    }

    promises.forEach((p, i) => {
      p.then((val) => {
        resolve(val);
      }).catch((err) => {
        errors[i] = err;
        pending--;
        if (pending === 0) {
          reject(new Error(errors, "All promises were rejected"));
        }
      });
    });
  });
};

Promise.anyPolyfill([
  likeVideo("video1"),
  likeVideo2("video2"),
  likeVideo3("video3"),
])
  .then((res) => {
    console.log("anyPolyfill result:", res);
  })
  .catch((err) => {
    console.log("anyPolyfill error:", err);
  });

```

## Promise.race() polyfill:
```
Promise.racePolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      p.then(resolve).catch(reject);
    });
  });
};


Promise.racePolyfill([
  likeVideo("video1"),
  likeVideo2("video2"),
  likeVideo3("video3"),
])
  .then((res) => {
    console.log("racePolyfill result:", res);
  })
  .catch((err) => {
    console.log("racePolyfill error:", err);
  });
```

## Promise.allSettled() polyfill:
```
Promise.allSettledPolyfill = (promises) => {
return new Promise((resolve) => {
let results = [];
let pending = promises.length;

    if (!promises.length) {
      resolve(results);
      return;
    }

    promises.forEach((p, i) => {
      p.then((val) => {
        results[i] = { status: "fulfilled", value: val };
        pending--;
        if (pending === 0) {
          resolve(results);
        }
      }).catch((err) => {
        results[i] = { status: "rejected", reason: err };
        pending--;
        if (pending === 0) {
          resolve(results);
        }
      });
    });

});
};

Promise.allSettledPolyfill([
  likeVideo("video1"),
  likeVideo2("video2"),
  likeVideo3("video3"),
])
  .then((res) => {
    console.log("allSettledPolyfill result:", res);
  });
```