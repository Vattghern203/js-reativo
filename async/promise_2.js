function waitForXSeconds(waitTime=2000) {

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Executing the Promise')

            resolve('this is something from the promise')

        }, waitTime);
    } )
}

waitForXSeconds(3000)
    .then(text => console.log(text))
    .then(waitForXSeconds)
    .then(waitForXSeconds)