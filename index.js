
const lottery = async () => {

    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random(0) > 0.5 ? resolve('Вы выиграли' + Math.random(0)) : reject('Вы проиграли' + Math.random(0))
        }, 1000)
    })

    let result = await promise;
    console.log(result)

}

lottery()
