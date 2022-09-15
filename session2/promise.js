function timeout(ms) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => resolve(), ms)
        }
    )
}

timeout(500).then(() => console.log('B'))
