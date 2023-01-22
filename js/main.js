

let modalUpenBtn = document.querySelector('.open-modal');
let modalCloseBtn = document.querySelector('.login-modal__close');
let loginModal = document.querySelector('.login-modal');
let loginModalInner = document.querySelector('.login-modal__inner');

modalUpenBtn.addEventListener('click', () => {
    loginModal.classList.remove('close-modal-anime');
    loginModal.classList.add('open-modal-anime');

    loginModalInner.classList.add('open-modal-inner');
    loginModalInner.classList.remove('close-modal-inner');

    loginModal.style.height = '100%';
    loginModalInner.style.height = '594px';
});

modalCloseBtn.addEventListener('click', () => {
    loginModal.classList.remove('open-modal-anime');
    loginModal.classList.add('close-modal-anime');

    loginModalInner.classList.remove('open-modal-inner');
    loginModalInner.classList.add('close-modal-inner');

    loginModal.style.height = '0%';
    loginModalInner.style.height = '0px';
});


let menuOpen = document.querySelector('.menu-btn');
let menuClose = document.querySelector('.menu__btn');
let menuBody = document.querySelector('.menu');

menuOpen.addEventListener('click', () => {
    menuBody.classList.remove('close-modal-anime');
    menuBody.classList.add('open-modal-anime');
    menuBody.style.height = '100%';
})

menuClose.addEventListener('click', () => {
    menuBody.classList.remove('open-modal-anime');
    menuBody.classList.add('close-modal-anime');
    menuBody.style.height = '0%';
})

let header = document.querySelector('.site-header')
window.addEventListener('scroll', () => {
    let screenSize = window.scrollY;

    if (screenSize > 100) {
        header.style.position = 'static';
    }
    else {
        header.style.position = 'fixed';
    }
})















let chairs = [
    {
        name: "Armchair",
        imgUrl: "./images/chairfree.png",
        bgcolor: "#e0eff6",
    },
    {
        name: "Armchair",
        imgUrl: "./images/chair_2.png",
        bgcolor: "#e0eff6",
    },
    {
        name: "Armchair",
        imgUrl: "./images/unnamed_1.png",
        bgcolor: "#e0eff6",
    },
    {
        name: "Armchair",
        imgUrl: "./images/chair.png",
        bgcolor: "#e0eff6",
    },
];
let popularTemplate = document.getElementById("popular-template");
let popularList = document.querySelector(".popular-chairs-list");
function renderItem(chairs) {
    popularList.innerHTML = "";
    let dfrag = document.createDocumentFragment();
    chairs.forEach((chair) => {
        let template = popularTemplate.content.cloneNode(true);
        let item = template.querySelector(".popular-chairs-item");
        // item.querySelector(".popular-chairs-item");
        //   .setAttribute("style", background-color: ${chair.bgcolor});
        item.querySelector(".popular-item__header").innerText = chair.name;
        item.querySelector("img").src = chair.imgUrl;
        dfrag.append(item);
    });
    popularList.append(dfrag);
}

renderItem(chairs);
let next = document.querySelector(".next");
next.addEventListener("click", () => {
    nextInterval();
});
let prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
    let obj = chairs[chairs.length - 1];
    chairs.pop();
    chairs.unshift(obj);
    renderItem(chairs);
    console.log("ishla");
});
setInterval(nextInterval, 2000);
function nextInterval() {
    let obj = chairs[0];
    chairs.shift();
    chairs.push(obj);
    renderItem(chairs);
    console.log("ishla");
}




let customerNext = document.querySelector(".customer-next");
let customerPrev = document.querySelector(".customer-prev");
let itemArray = document.querySelectorAll(".carusel-item");
let i = 0;
customerNext.addEventListener("click", () => {
    nexter();
});
customerPrev.addEventListener("click", () => {
    itemArray[i].classList.add("none");
    if (i == 0) {
        i = 3;
    }
    itemArray[i - 1].classList.remove("none");
    //   itemArray[i - 1].classList.remove("none");
    //   itemArray[i].classList.add("none");
    //   if (i == 0) i = 4;
    //   --i;
    i--;
    console.log("lll");
});
function nexter() {
    itemArray[i].classList.add("none");
    if (i == 2) i = -1;
    itemArray[i + 1].classList.remove("none");
    i++;
}
setInterval(nexter, 2000);