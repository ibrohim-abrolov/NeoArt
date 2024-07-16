document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openModal').addEventListener('click', function() {
        document.getElementById('myModal').style.display = 'block';
    });

    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('myModal').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('myModal')) {
            document.getElementById('myModal').style.display = 'none';
        }
    });
});


// Language
document.addEventListener('DOMContentLoaded', function() {
    // Select the elements
    const countrySelect = document.querySelector('.site-header__select');
    const countryImg = document.querySelector('.site-header__country-img');

    countrySelect.addEventListener('change', function() {
        const selectedValue = countrySelect.value;

        if (selectedValue === 'uzb') {
            // Change to Uzbekistan (UZB)
            countryImg.src = './assets/images/uzb.svg';
            // countryCode.textContent = 'UZB';
        } else if (selectedValue === 'rus') {
            // Change to Russia (RUS)
            countryImg.src = './assets/images/rus.svg';
            // countryCode.textContent = 'RUS';
        }
    });
});

const translations = {
    uzb: {
        home: "Bosh Sahifa",
        about: "Biz Haqimizda",
        services: "Servislar",
        contact: "Kontakt",
        countryImg: "./assets/images/uzb.svg",
        countryAlt: "uzbekistan image",
        heroTitle: "NeoArt Event Organizatsiyasi sizning baxtli kuningiz uchun",
        heroText: "Maxsus kuningizni bizning tajribamizga ishonib topshiring. Mukammal va xursandchilikka to'la to'y marosimingiz uchun xizmatlarimizni buyurtma qiling.",
        button: "Buyurtma Berish",
        articleTitle: "Organizatsiya Haqida",
        articleText: "Bizning to'y organizatsiya veb-saytimizga xush kelibsiz, biz siz bilan maxsus kunimizni nishonlashni kuta olmaymiz. Biz ushbu veb-saytni to'yimiz oldidan barcha muhim tafsilotlarni siz bilan baham ko'rishning qulay va interaktiv usuli sifatida yaratdik.Nihoyat - doimiy hurmat va qo'llab-quvvatlaganingiz uchun tashakkur. Biz bu kunni siz bilan baham ko'rishdan juda xursandmiz va siz uchun eng yaxshi kunni nishonlashni orziqib kutamiz.",
        articleTextSecond: "Neo Art jamoasiga 2019 yilning 15-Avgust sanasida “Ahmedjanov  Samandar Rustamovich” boshchiligida asos solindi.  Bizning jamoa maqsadi odamlarga ularning eng yahshi kunida xizmat korsatishva esda qolarlik taassurotlar yaratish. Hurmat bilan NeoArt.",
        founder: "Asoschi:",
        userName: "Samandar Ahmedjanov",
        servicesTitle: "Servislar Haqida",
        servicesShohsaroy: "Shohsaroy To'yxona",
        servicesYakkasaroy: "Yakkasaroy To'yxona",
        servicesVersal: "Versal To'yxona",
        servicesMumtoz: "Mumtoz To'yxona",
        date: "Sana",
        organisation: "Organizatsiya",
        servicesButton: "Batafsil",
        singersTitle: "Mashhur Sanatkorlar va Boshlovchilar",
        singersPrice: "Narx:",
        singersNameF: "Jahongir Otajonov"
    },
    rus: {
        home: "Главная",
        about: "О нас",
        services: "Сервисы",
        contact: "Контакт",
        countryImg: "./assets/images/rus.svg",
        countryAlt: "russia image",
        heroTitle: "Организация NeoArt Event для вашего счастливого дня",
        heroText: "Доверьте свой особенный день нашему опыту. Закажите наши услуги для идеальной и полной радости свадебной церемонии.",
        button: "Разместить заказ",
        articleTitle: "Об организации",
        articleText: "Добро пожаловать на наш сайт планирования свадьбы, нам не терпится отпраздновать с вами наш особенный день. Мы создали этот веб-сайт как удобный и интерактивный способ поделиться с вами всеми важными подробностями подготовки к нашей свадьбе. Наконец, спасибо за ваше постоянное уважение и поддержку. Мы так рады разделить этот день с вами и с нетерпением ждем возможности отпраздновать самый лучший день для вас.",
        articleTextSecond: "Команда Neo Art была основана 15 августа 2019 года под руководством «Ахмеджанова Самандара Рустамовича». Цель нашей команды — служить людям в их лучшие дни и создавать незабываемые впечатления. С уважением, НеоАрт.",
        founder: "Основатель:",
        userName: "Самандар Ахмеджанов",
        servicesTitle: "Об услугах",
        servicesShohsaroy: "Свадебный зал Шахсарай",
        servicesYakkasaroy: "Свадебный зал Яккасарой",
        servicesVersal: "Свадебный зал Версал",
        servicesMumtoz: "Свадебный зал Мумтоз",
        date: "Дата",
        organisation: "Организация",
        servicesButton: "Подробнее",
        singersTitle: "Известные артисты и ведущие",
        singersPrice: "Цена:",
        singersNameF: "Джахангир Отажонов"
    }
};

const languageSelect = document.getElementById('languageSelect');

function setLanguage(language) {
    const translation = translations[language];

    document.querySelectorAll('.nav__link').forEach(link => {
        const key = link.getAttribute('data-key');
        link.textContent = translation[key];
    });

    const countryImg = document.querySelector('.site-header__country-img');
    countryImg.src = translation.countryImg;
    countryImg.alt = translation.countryAlt;

    document.querySelectorAll('.translatable').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = translation[key];
    });


    languageSelect.value = language;
}

languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
});

document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'uzb';
    setLanguage(savedLanguage);
});


// Pagination
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '../assets/images/hero-img.webp',
        '../assets/images/hero-mid.webp',
        '../assets/images/hero-last.webp',
    ];
    const backgroundImage = document.querySelector('.background-image');
    let currentIndex = 0;

    // Function to change background image
    function changeBackgroundImage() {
        backgroundImage.style.opacity = 0; // Fade out

        setTimeout(function() {
            currentIndex = (currentIndex + 1) % images.length;
            backgroundImage.style.backgroundImage = `url('${images[currentIndex]}')`;
            backgroundImage.style.opacity = 1; // Fade in
        }, 500); // 500ms delay for fade effect
    }

    // Initial call to set the first image
    backgroundImage.style.backgroundImage = `url('${images[currentIndex]}')`;

    // Change background image every 5 seconds
    setInterval(changeBackgroundImage, 5000); // 5000ms = 5 seconds
}); 


// Sigers
// document.addEventListener('DOMContentLoaded', function() {
//     const singers = [
//         { name: 'Jahongir Otajonov', price: '3.500$', img: './assets/images/jahongir.webp' },
//         { name: 'Dj Piligrim', price: '3.500$', img: './assets/images/jahongir.webp' },
//         // Add more singer objects here
//     ];
    
//     const itemsPerPage = 2;
//     const singersList = document.getElementById('singersList');
//     const pageNumbers = document.getElementById('pageNumbers');
//     const prevButton = document.querySelector('.card__prev');
//     const nextButton = document.querySelector('.card__next');
//     let currentPage = 1;

//     function displayPage(page) {
//         singersList.innerHTML = '';
//         const start = (page - 1) * itemsPerPage;
//         const end = start + itemsPerPage;
//         const pageSingers = singers.slice(start, end);

//         pageSingers.forEach(singer => {
//             const singerItem = document.createElement('li');
//             singerItem.className = 'singers__item';
//             singerItem.innerHTML = `
//                 <img class="singers__img" src="${singer.img}" alt="${singer.name}" width="326" height="230">
//                 <h3 class="singers__inner-title services__inner-title translatable" data-key="singersNameF">
//                     ${singer.name}
//                 </h3>
//                 <div class="singers__price-wrapper services__date-wrapper">
//                     <span class="singers__price services-main translatable" data-key="singersPrice">Narx:</span>
//                     <time class="singers__number services__time">${singer.price}</time>
//                 </div>
//                 <a class="singers__btn services__btn translatable" href="./singers.html" data-key="servicesButton">Batafsil</a>
//             `;
//             singersList.appendChild(singerItem);
//         });

//         const activeButton = document.querySelector(`#pageNumbers button[data-page="${page}"]`);
//         if (activeButton) {
//             document.querySelectorAll('#pageNumbers button').forEach(btn => btn.classList.remove('active'));
//             activeButton.classList.add('active');
//         }
//     }

//     function setupPagination() {
//         const pageCount = Math.ceil(singers.length / itemsPerPage);
//         pageNumbers.innerHTML = '';

//         for (let i = 1; i <= pageCount; i++) {
//             const button = document.createElement('button');
//             button.textContent = i;
//             button.setAttribute('data-page', i);
//             button.addEventListener('click', () => {
//                 currentPage = i;
//                 displayPage(i);
//             });
//             if (i === 1) button.classList.add('active');
//             pageNumbers.appendChild(button);
//         }
//     }

//     prevButton.addEventListener('click', () => {
//         if (currentPage > 1) {
//             currentPage--;
//             displayPage(currentPage);
//         }
//     });

//     nextButton.addEventListener('click', () => {
//         const pageCount = Math.ceil(singers.length / itemsPerPage);
//         if (currentPage < pageCount) {
//             currentPage++;
//             displayPage(currentPage);
//         }
//     });

//     displayPage(1);
//     setupPagination();
// });

// const activeButton = document.querySelector(`#pageNumbers button[data-page="${page}"]`);
// if (activeButton) {
//     document.querySelectorAll('#pageNumbers button').forEach(btn => btn.classList.remove('active'));
//     activeButton.classList.add('active');
// }