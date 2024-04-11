const swiperBox = document.querySelector(".swiper-box");
const cardsContainer = document.querySelector(".cards-container");
const stepperLeft = document.querySelector("#stepper_left");
const stepperBox = document.querySelector(".stepper-box");
const stepperRight = document.querySelector("#stepper_right");
const cardElem = document.querySelector(".card");
const stepCounter = document.querySelector(".step_counter");
const totalElem = document.querySelector("#stepper_total");

// let stepperNum = document.querySelector("#stepper_num");
// let total = 6 - Math.round(swiperBox.offsetWidth/cardElem.offsetWidth) + 1;
// totalElem.textContent = total;

// let cardMargin = parseFloat(window.getComputedStyle(cardElem).marginRight);
// let cardStep = cardElem.offsetWidth;

// function getPositions(total, cardStep, cardMargin) {
//     let res = [];
//     for (let i = 0; i < total; i++) {
//         res.push((cardStep + cardMargin)*i);
//     }
//     return res;
// }

// window.addEventListener("resize", function(){
//     swiperBox.style.transform = `translateX(0px)`;
//     total = 6 - Math.round(swiperBox.offsetWidth/cardElem.offsetWidth) + 1;
//     cardMargin = parseFloat(window.getComputedStyle(cardElem).marginRight);
//     cardStep = cardElem.offsetWidth;
//     if (this.innerWidth <= 768) {
//         stepperLeft.style.width = '0px';
//         stepperRight.style.width = '0px';
//         let innerhtml = '';
//         for (let i = 0; i < total; i++) {
//             innerhtml += `<span class=point></span>`
//         }
//         stepCounter.innerHTML = innerhtml;
//         stepCounter.className = 'step_counter pagination-points';
//         let firstP = document.querySelectorAll(".point")[0];
//         firstP.style.backgroundColor = '#bae249';
//         firstP.style.opacity = 1;
//     } else {
//         stepperNum.textContent = "1";
//         stepperRight.disabled = false;
//         stepperLeft.disabled = true;
//         totalElem.textContent = total;
//         stepperLeft.style.width = '22px';
//         stepperRight.style.width = '22px';
//         stepCounter.innerHTML = `<span id="stepper_num">1</span> из 
//         <span id="stepper_total">${total}</span>`;
//         stepCounter.className = 'step_counter';
//         stepperNum = document.querySelector("#stepper_num");
//     }
    
// });

// stepperRight.addEventListener("click", function(){
//     let multy = +total - (+total - +stepperNum.textContent);
//     if (+stepperNum.textContent < total) {
//         stepperNum.textContent = +stepperNum.textContent + 1;
//     }
//     if (+stepperNum.textContent === total) {
//         stepperRight.disabled = true;
//     } else {
//         stepperRight.disabled = false;
//     }
//     if (stepperNum.textContent !== "1") {
//         stepperLeft.disabled = false
//     }
//     swiperBox.style.transform = `translateX(-${(cardStep + cardMargin)*multy }px)`;
// });


// stepperLeft.addEventListener("click", function(){
//     if (stepperNum.textContent !== "1") {
//         stepperNum.textContent = +stepperNum.textContent - 1;
//     }
//     if (stepperNum.textContent === "1") {
//         stepperLeft.disabled = true;
//     } else {
//         stepperLeft.disabled = false;
//     }
//     if (stepperNum.textContent !== total) {
//         stepperRight.disabled = false
//     }
//     let rightPos = (cardStep + cardMargin) * -(+total - 1);
//     let multy = +total - +stepperNum.textContent;
//     swiperBox.style.transform = `translateX(${rightPos + (cardStep + cardMargin)*multy}px)`;
// });

// let isPressed = false;
// let offset = 0;

// ["mousedown", "touchstart"].forEach((evnt) => {
//     cardsContainer.addEventListener(evnt, function(event) {
//         if (evnt === "touchstart") {
//             offset = event.touches[0].clientX;
//         } else {
//             offset = event.clientX;
//         }
//         isPressed = true;
//     });
// });

// ["mouseup", "touchend"].forEach((evnt) => {
//     document.addEventListener(evnt, function(){
//         isPressed = false;
//         let positions = getPositions(total, cardStep, cardMargin);
//         let swiperTransl = +window.getComputedStyle(swiperBox).transform.split(", ")[4];
//         let temp = [];
//         for (let position of positions) {
//             temp.push(Math.abs(position - Math.abs(swiperTransl)));
//         }
//         let indx = temp.indexOf(Math.min(...temp));
//         if (swiperTransl < 0) {
//             swiperBox.style.transform = `translateX(-${positions[indx]}px)`;
//             stepperNum.textContent = indx + 1;
            
//             if (indx + 1 > 1) {
//                 stepperLeft.disabled = false;
//             } else if (indx + 1 === 1) {
//                 stepperLeft.disabled = true;
//             }
//             if (indx + 1 === total) {
//                 stepperRight.disabled = true;
//             } else if (indx + 1 < total) {
//                 stepperRight.disabled = false;
//             }
//         } else {
//             swiperBox.style.transform = `translateX(0px)`;
//             stepperNum.textContent = 1;
//             stepperLeft.disabled = true;
//             stepperRight.disabled = false;
//         }
//         let points = document.querySelectorAll(".point");
//             if (points.length !== 0) {
//                 points.forEach((p, i) => {
//                     if (i === indx) {
//                         p = points[indx];
//                         p.style.backgroundColor = '#bae249';
//                         p.style.opacity = 1;
//                     } else {
//                         p.style.backgroundColor = '#0B1919';
//                         p.style.opacity = 0.2;
//                     }
//                 })
//             }
//     });
// });

// ["mousemove", "touchmove"].forEach((evnt) => {
//     document.addEventListener(evnt, function(event) {
//         let transl = 0;
//         if (evnt === "touchmove") {
//             transl = event.touches[0].clientX - offset;
//         } else {
//             transl = event.clientX - offset;
//         }
//         if (isPressed) {
//             let swiperTransl = +window.getComputedStyle(swiperBox).transform.split(", ")[4];
//             let positions = getPositions(total, cardStep, cardMargin);
//             if (positions[0] < swiperTransl){
//                 swiperBox.style.transform = `translateX(${(swiperTransl + transl)/3}px)`;
//             } else {
//                 swiperBox.style.transform = `translateX(${swiperTransl + transl}px)`;
//             }
//         }
        
//     });
// });

const swiperCards = new Swiper('.cards-container', {
    spaceBetween: 30,
    speed: 1250,
    breakpoints: {
        0: {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            slidesPerView: '1',
        },
        576: {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            slidesPerView: '2',
        },
        1024: {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                renderFraction: function(currentClass, totalClass) {
                    return '<span class="'+ currentClass +'"></span>' + '<span> из </span>' + 
                    '<span class="'+ totalClass +'"></span>';
                }
            },
            slidesPerView: '4',
        },
        769: {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                renderFraction: function(currentClass, totalClass) {
                    return '<span class="'+ currentClass +'"></span>' + '<span> из </span>' + 
                    '<span class="'+ totalClass +'"></span>';
                }
            },
            slidesPerView: '3',
        },
    },
    navigation: {
        nextEl: '#stepper_right',
        prevEl: '#stepper_left'
    },
});

window.addEventListener('resize', () => {
    swiperCards.slideTo(0);
})

document.querySelector('#send-btn').addEventListener('click', formValidation);

function validateName(userName){
    if (userName === '') {
        return 'Заполните Имя';
    } else if (userName.length < 3) {
        return 'Слишком короткое Имя';
    } else return null;
}

function validateEmail(email){
    const reg = new RegExp(/\w+@\w{2,}\.[a-z]{2,5}/);
    if (email === '') {
        return 'Заполните Email';
    } else if (!reg.test(email)) {
        return 'Недопустимый Email';
    } else return null;
}


function formValidation(){
    const nameErr = document.querySelector('#name-err');
    const nameField = document.querySelector('#name');
    const emailErr = document.querySelector('#email-err');
    const emailField = document.querySelector('#email');
    let flag1 = true;
    let flag2 = true;

    if (validateName(nameField.value) !== null) {
        nameErr.innerHTML = validateName(nameField.value);
        nameField.className = 'error-inp';
        flag1 = false;
        nameField.addEventListener('input', function(){
            if (validateName(nameField.value) !== null) {
                nameErr.innerHTML = validateName(nameField.value);
                nameField.className = 'error-inp';
            } else {
                nameErr.innerHTML = '';
                nameField.className = 'default-inp';
                flag1 = true;
            }                
        })
    }
    if (validateEmail(emailField.value) !== null) {
        emailErr.innerHTML = validateEmail(emailField.value);
        emailField.className = 'error-inp';
        flag2 = false;
        emailField.addEventListener('input', function(){
            if (validateEmail(emailField.value) !== null) {
                emailErr.innerHTML = validateEmail(emailField.value);
                emailField.className = 'error-inp';
            } else {
                emailErr.innerHTML = '';
                emailField.className = 'default-inp';
                flag2 = true;
            }                
        })
    }
    if (flag1 && flag2) {
        nameField.value = '';
        emailField.value = '';
    }
}