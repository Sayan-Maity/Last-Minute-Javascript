## CALLBACK, PROMISE(then, async, await, try/catch)



```

function a () {
    return new Promise ((resolve, reject) => {
        console.log("a")
        resolve()
    }) 
    
}
function b (cb) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("b")
            resolve()
        }, 2000)
    })
}
function c () {
    return new Promise ((resolve, reject) => {
        console.log("c")
        resolve()
    })
}

/*
--------------  CALLBACK  ---------------
a(function () {
    b(function() {
        c()
    })
})


----------------  PROMISE(then)  --------------------
a()
.then(b)
.then(c)
.catch((err) => {
    console.log("Error =>", err)
})


-------------------  PROMISE(AWAIT)  ------------------
async function getData () {
    await a()
    await b()
    await c()
    .catch((err) => {
        console.log("Error =>", err)
    })
}
getData()

*/
----------------  PROMISE(TRY/CATCH)  -----------------
async function getData () {
    try {
        await a()
        await b()
        await c()
    }
    catch (err) {
        console.log("Error =>", err)
    }
}
getData()















```