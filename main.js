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






function goToShop(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hallo. What you want');

            if (money < 200) {
                console.log('yogurt');
                reject('strawberry');
            } else {
                console.log('Hamburger');
                resolve('Take please');
            }
        }, 1000)
    });
}

function prepareToShop() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Thanks');
            resolve('good day');
        }, 500)
    });
}


goToShop(200)
    .then((value) => {
        console.log('Good choice');
        console.log(value)

        return prepareToShop();
    })
