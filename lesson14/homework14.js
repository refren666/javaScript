//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// Callbacks:

// const startOfADay = (isDayOff, callback) => {
//     setTimeout(() => {
//         if (!isDayOff) {
//             callback(null, 'Waking up...'); // Error first, data last!
//         } else {
//             callback('Sleep whole day...', null);
//         }
//     }, 1000)
// }
//
// const brushTeeth = (isToothpaste, callback) => {
//     setTimeout(() => {
//         if (isToothpaste) {
//             callback(null, 'Brushing teeth...');
//         } else {
//             callback('No toothpaste...', null);
//         }
//     }, 800)
// }
//
// const eatFood = (isFood, callback) => {
//     setTimeout(() => {
//         if (isFood) {
//             callback(null, 'Eating food...');
//         } else {
//             callback('Need to buy some food...', null);
//         }
//     }, 1200)
// }
//
// const dressUp = (isClothes, callback) => {
//     setTimeout(() => {
//         if (isClothes) {
//             callback(null, 'Dressing up...');
//         } else {
//             callback('Nothing to wear...', null);
//         }
//     }, 700)
// }
//
// const commuting = (isGoodWeather, isDisaster = false, callback) => {
//     setTimeout(() => {
//         if (isDisaster) {
//             callback('Staying home...', null);
//         } else if (isGoodWeather) {
//             callback(null, 'Going to bus station...');
//         } else if (!isGoodWeather) {
//             callback(null, 'Taking taxi...');
//         }
//     }, 1200)
// }
//
// const doWork = (callback) => {
//     setTimeout(() => {
//         callback('Working...');
//     }, 2000)
// }
//
// const goBackHome = (isWorkDone, callback) => {
//     setTimeout(() => {
//         if (isWorkDone) {
//             callback(null, 'Going back home...');
//         } else {
//             callback('Continue working...', null);
//         }
//     }, 1300)
// }
//
// const goSleep = (tired, callback) => {
//     setTimeout(() => {
//         if (tired) {
//             callback(null, 'Going to sleep...');
//         } else {
//             callback('Watching films...', null);
//         }
//     }, 1400)
//
// }
//
// startOfADay(false, (error, start) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(start);
//         brushTeeth(true, (error2, brush) => {
//             if (error2) {
//                 console.error(error2);
//             } else {
//                 console.log(brush);
//                 eatFood(true, (error0, eat) => {
//                     if (error0) {
//                         console.error(error0);
//                     } else {
//                         console.log(eat);
//                         dressUp(true, (error3, dressing) => {
//                             if (error3) {
//                                 console.error(error3);
//                             } else {
//                                 console.log(dressing);
//                                 commuting(true, false, (error4, commute) => {
//                                     if (error4) {
//                                         console.error(error4);
//                                     } else {
//                                         console.log(commute);
//                                         doWork(work => {
//                                             console.log(work);
//                                             goBackHome(true, (error5, goBack) => {
//                                                 if (error5) {
//                                                     console.error(error5);
//                                                 } else {
//                                                     console.log(goBack);
//                                                     eatFood(true, (error6, eat) => {
//                                                         if (error6) {
//                                                             console.error(error6);
//                                                         } else {
//                                                             console.log(eat);
//                                                             brushTeeth(true, (error7, brush) => {
//                                                                 if (error7) {
//                                                                     console.error(error7);
//                                                                 } else {
//                                                                     console.log(brush);
//                                                                     goSleep(true, (error8, finish) => {
//                                                                         if (error8) {
//                                                                             console.error(error8);
//                                                                         } else {
//                                                                             console.log(finish);
//                                                                         }
//                                                                     })
//                                                                 }
//                                                             })
//                                                         }
//                                                     })
//                                                 }
//                                             })
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// ****************************************************************************************************************

// Promises:

// ****************************************************************************************************************

/*const startOfADay = (isDayOff) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isDayOff) {
                resolve('Waking up...')
            }

            reject('Sleep whole day...')
        }, 800)
    })
}

const brushTeeth = (isToothpaste) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isToothpaste) {
                resolve('Brushing teeth...');
            }

            reject('No toothpaste...');
        }, 600)
    })
}

const eatFood = (isFood) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isFood) {
                resolve('Eating food...');
            }

            reject('Need to buy some food...');
        }, 1000)
    })
}

const dressUp = (isClothes) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isClothes) {
                resolve('Dressing up...')
            }

            reject('Nothing to wear...')
        }, 900)
    })
}

const commuting = (isGoodWeather, isDisaster = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isDisaster) {
                reject('Staying home...');
            } else if (isGoodWeather) {
                resolve('Going to bus station...');
            } else if (!isGoodWeather) {
                resolve('Taking taxi...');
            }
        }, 1200)
    })
}

const doWork = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Working...');
        }, 2000)
    })
}

const goBackHome = (isWorkDone) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkDone) {
                resolve('Going back home...');
            }
            reject('Working...');
        }, 1300)
    })
}

const goSleep = (tired) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tired) {
                resolve('Going to sleep...');
            }
            reject('Watching films...');
        }, 1400)
    })
}*/

// startOfADay(false)
//     .then(start => {
//         console.log(start);
//         return brushTeeth(true);
//     })
//     .then(brushTeeth => {
//         console.log(brushTeeth);
//         return eatFood(true);
//     })
//     .then(eatBreakfast => {
//         console.log(eatBreakfast);
//         return dressUp(true);
//     })
//     .then(dressing => {
//         console.log(dressing);
//         return commuting(false);
//     })
//     .then(commute => {
//         console.log(commute);
//         return doWork();
//     })
//     .then(work => {
//         console.log(work);
//         return goBackHome(true);
//     })
//     .then(goHome => {
//         console.log(goHome);
//         return eatFood(true);
//     })
//     .then(eatDinner => {
//         console.log(eatDinner);
//         return brushTeeth(true);
//     })
//     .then(brushTeeth => {
//         console.log(brushTeeth);
//         return goSleep(true);
//     })
//     .then(dayFinish => {
//         console.log(dayFinish);
//     })
//     .catch(error => {
//         console.error(error);
//     })

// ****************************************************************************************************************

// Async/Await:

// ****************************************************************************************************************

// async function routine() {
//     try {
//         const start = await startOfADay(false);
//         console.log(start);
//         const brush = await brushTeeth(start);
//         console.log(brush);
//         const eat = await eatFood(true);
//         console.log(eat);
//         const dress = await dressUp(true);
//         console.log(dress);
//         const commute = await commuting(true);
//         console.log(commute);
//         const work = await doWork(true);
//         console.log(work);
//         const goBack = await goBackHome(true);
//         console.log(goBack);
//         const eatAgain = await eatFood(true);
//         console.log(eatAgain);
//         const brushAgain = await brushTeeth(true);
//         console.log(brushAgain);
//         const finish = await goSleep(true);
//         console.log(finish);
//     } catch (error) {
//         console.error(error)
//     }
// }
//
// routine();

