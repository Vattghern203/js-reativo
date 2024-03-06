function returnValue () {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(69)
        }, 5000);
    })
}

returnValue().then(console.log)