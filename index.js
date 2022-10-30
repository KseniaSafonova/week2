

function lottery() {
    console.log("Вы начали игру");
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random(0) > 0.5 ? resolve() : reject("Вы промахнулись");
        }, 1000);
    });
    return promise;
}

lottery()
    .then(() => console.log("Вы выиграли"))
    .then(() => console.log("Вам заплатили"))
    .catch(() => console.log("Вы проиграли"))
    .finally(() => console.log("Игра закончена"));



// const lottery = async () => {

//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             Math.random(0) > 0.5 ? resolve('Вы выиграли ' + Math.random(0)) : reject('Вы проиграли ' + Math.random(0))
//         }, 5000)
//     })

//     let result = await promise;
//     console.log(result)
// };

// lottery()
//     // .then((res) => console.log(res))
//     // .then((err) => console.log(err))