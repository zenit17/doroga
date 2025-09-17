"use scriсt";

window.onload = function () {
    //знак присваивания
    let divline = document.querySelector('.div-line');
    let car = document.querySelector('.car')
    console.log(divline)
    p = 1
    for (let i = -50; i < 100; i++) {

        setTimeout(function () {
            console.log('i = ', i)
            divline.style.top = i + '%';
        }, 50 * i)
    }

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        console.log(key);
        switch (key) {
            case 'ArrowLeft': arrowLeft(car); break;
            case 'ArrowRight': arrowRight(car); break;
        }
    });


}

function arrowLeft (car) {
    console.log(car)
    car.style.left = '1%';
}
function arrowRight (car) {
    car.style.left = '94%';
}