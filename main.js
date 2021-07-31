// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с


    setTimeout(()=> {
        console.log('I wake up');
    }, 1000);


    setTimeout(()=> {
        console.log('Go to the shower')
    },1200)

    setTimeout(()=> {
        console.log('Eat my breakfast')
    }, 1500);

function goToShop(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hallo. What you want');

            if (money < 100) {
                console.log('yogurt');
                reject('strawberry');
            } else {
                console.log('Hamburger');
                resolve('Take please');
            }
        }, 1700)
    });
}
goToShop(200, (err, wantToShop) => {
    if (err) {
        console.error(err);
    } else {
        console.log(wantToShop);
    }
});
// function goToShop(money, cb) {
//     setTimeout(()=> {
//         console.log('Hallo. What you want');
//         if (money < 100) {
//             console.log('yogurt');
//             cb('strawberry', null);
//         } else {
//             console.log('Hamburger');
//             cb(null, 'Take please');
//         }
//     }, 1800)
// }
//
// goToShop(200, (err, wantToShop) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(wantToShop);
//     }
// });

function goToPark(a) {
    setTimeout(()=> {
        console.log('I go to the park');
        if (a == 'rain') {
            console.log('Where is my umbrella');
        } else {
            console.log('Fine weather');
        }
    }, 2000)
}

goToPark('good weather', (err, wantToPark) => {
    if (err) {
        console.error(err);
    } else {
        console.log(wantToPark);
    }
});

setTimeout(()=> {
    console.log('Im having dinner with my hamburger')
},2100)

setTimeout(()=> {
    console.log('Going to bed')
},2500)

