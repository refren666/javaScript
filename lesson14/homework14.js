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
/*const routine = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ();
        console.log('Woke up');
    }, 300)
}).then(()=> {
    setTimeout(() => {
        console.log('Brushed Teeth');
    }, 700)
}).then(() => {
    setTimeout(() => {
        console.log('Had breakfast');
    }, 1500)
}).then(() => {
    setTimeout(() => {
        console.log('Dressed up');
    }, 1800)
}).then(() => {
    setTimeout(() => {
        console.log('Went to the bus station');
    }, 2100)
}).then(() => {
    setTimeout(() => {
        console.log('Arrived to the workplace');
    }, 2600)
}).then(() => {
    setTimeout(() => {
        console.log('Had lunch');
    }, 3000)
}).then(() => {
    setTimeout(() => {
        console.log('Participated in the meeting');
    }, 3400)
}).then(() => {
    setTimeout(() => {
        console.log('Finished working');
    }, 4200)
}).then(() => {
    setTimeout(() => {
        console.log('Arrived home');
    }, 4800)
}).then(() => {
    setTimeout(() => {
        console.log('Had dinner');
    }, 5100)
}).then(() => {
    setTimeout(() => {
        console.log('Brushed teeth');
    }, 5500)
}).then(() => {
    setTimeout(() => {
        console.log('Went to sleep');
    }, 6000)
}).catch(e => {
    console.error(e);
})*/

// async/await:
async function routine() {
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

routine()
