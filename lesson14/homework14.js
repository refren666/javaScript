//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// Callbacks:
/*setTimeout(()=> {
    console.log('Woke up');
    setTimeout(() => {
        console.log('Brushed Teeth');
        setTimeout(() => {
            console.log('Had breakfast');
            setTimeout(() => {
                console.log('Dressed up');
                setTimeout(() => {
                    console.log('Went to the bus station');
                    setTimeout(() => {
                        console.log('Arrived to the workplace');
                        setTimeout(() => {
                            console.log('Had lunch');
                            setTimeout(() => {
                                console.log('Participated in the meeting');
                                setTimeout(() => {
                                    console.log('Finished working');
                                    setTimeout(() => {
                                        console.log('Arrived home');
                                        setTimeout(() => {
                                            console.log('Had dinner');
                                            setTimeout(() => {
                                                console.log('Brushed teeth');
                                                setTimeout(() => {
                                                    console.log('Went to sleep');
                                                }, 900)
                                            }, 800)
                                        }, 800)
                                    }, 1200)
                                }, 1400)
                            }, 3000)
                        }, 1100)
                    }, 2000)
                }, 1500)
            }, 1000)
        }, 400)
    }, 700)
}, 500)*/

// Promises:
/*new Promise(((resolve, reject) => {
    setTimeout(() => {
        resolve('Woke up');
    }, 1000)
}))
    .then((firstAction) => {
        console.log(firstAction);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Brushed teeth');
            }, 600)
        })
    }).then((secondAction) => {
    console.log(secondAction);
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve('Had breakfast');
        }, 500)
    }))
}).then((thirdAction) => {
    console.log(thirdAction);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Dressed up');
        }, 1100)
    })
}).then((fourthAction) => {
    console.log(fourthAction);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Went to the bus station');
        }, 800)
    })
}).then((fifthAction) => {
    console.log(fifthAction);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Arrived to the workplace');
        }, 1000)
    })
}).then((sixthAction) => {
    console.log(sixthAction);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Had lunch');
        }, 1200)
    })
}).then((seventhAction) => {
    console.log(seventhAction);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Participated in the meeting');
        }, 900)
    })
}).then((eighthsAction) => {
    console.log(eighthsAction);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Finished working');
        }, 600)
    })
}).then((ninthAction) => {
    console.log(ninthAction);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Arrived home');
        }, 800)
    })
}).then((tenthAction) => {
    console.log(tenthAction);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Had dinner');
        }, 700)
    })
}).then((eleventhAction) => {
    console.log(eleventhAction);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Brushed teeth');
        }, 1000)
    })
}).then((twelfthAction) => {
    console.log(twelfthAction);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Went to sleep');
        }, 1500)
    })
})*/

// async/await:
/*async function routine() {
    const s1 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Woke up')
    }, 1000))
    const s2 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Brushed Teeth');
    }, 700))
    const s3 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Had breakfast');
    }, 1300))
    const s4 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Dressed up');
    }, 850))
    const s6 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Went to the bus station');
    }, 2000))
    const s7 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Arrived to the workplace');
    }, 900))
    const s8 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Had lunch');
    }, 1500))
    const s9 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Participated in the meeting');
    }, 800))
    const s10 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Finished working');
    }, 1600))
    const s11 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Arrived home');
    }, 1250))
    const s12 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Had dinner');
    }, 1400))
    const s13 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Brushed teeth');
    }, 900))
    const s14 = await new Promise((resolve) => setTimeout(() => {
        resolve();
        console.log('Went to sleep');
    }, 500))
}

routine()*/

