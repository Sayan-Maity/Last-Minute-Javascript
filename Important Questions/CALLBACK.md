

## Example to explain callback 

```

function home (cb) {
    console.log("Home Page")
    setTimeout(() => {
        cb()
    }, 1000)
}

function register (cb) {
    console.log("Register Page")
    cb()
}

function login (cb) {
    console.log("Login Page")
    setTimeout(() => {
        cb()
    }, 1000)
}

function dashboard (cb) {
    console.log("Welcome to Dashboard")
}

home(function () {
    register(function () {
        login(function () {
            dashboard()
        })
    })
})

------------------------------------------------------------

home(function () {
    register(function () {
        login(function () {
            dashboard()
        })
    })
})

```

```

function home () {
    return new Promise((resolve, reject) => {
        resolve()
        console.log("Home")
    })
}

function register () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            console.log("register")
        }, 1000)
    })
}

function login () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
            console.log("Login")
        }, 1000)
    })
}

function dashboard () {
    return new Promise((resolve, reject) => {
        resolve()
        console.log("Dashboard")
    })
}

------------------------------------------------------------

home()
.then(register)
.then(login)
.then(dashboard)
.catch((err) => {
    console.log(err)
})

---------------------------------------------------------------

async function main () {
    await home()
    await register()
    await login()
    await dashboard()
}
main()

-----------------------------------------------------------------

async function main () {
    try {
        await home()
        await register()
        await login()
        await dashboard()
    } catch (err) {
        console.log(err)
    }
}
main()


```