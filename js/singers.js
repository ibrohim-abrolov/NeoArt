
// Modal
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
        cardsTitle: "Mashhur O'zbek Sanatkorlari",
        jahongir: "Jahongir Otajonov",
        piligrim: "Dj Piligrim",
        rashid: "Rashid Holiqov",
        hamdam: "Hamdam Sobirov",
        imron: "Imron",
        shohruhxon: "Shohruhxon",
        ulug: "Ulug'bek Rahmatullayev",
        sahar: "Sahar",
        yorqin: "Yorqinxo'ja Umarov",
        sevara: "Sevara Nazarxon",
        yulduz: "Yulduz Usmonova",
        nasiba: "Nasiba Abdullayeva",
        ozoda: "Ozoda Nursaidova",
        lola: "Lola",
        rayhon: "Rayhon Ganieva",
        jasmin: "Jasmin",
        nilufar: "Nilufar Usmonova",
        ziyoda: "Ziyoda",
        mavluda: "Mavluda Asalxojayeva",
        milena: "Milena Madmusayeva",
        dilnoza: "Dilnoza",
        alimov: "Farhod Alimov",
        idoyatov: "Magometali Idoyatov",
        karen: "Karen G’afurjanov",
        ikromov: "Sherzod Ikromov",
        azimov: "Anvar Azimov",
        dilmurod: "Dilmurod G’ulomov",
        umirzoqov: "Jamshid Umirzoqov",
        sotiboldiyeva: "Nilufar Sotiboldiyeva",
        kabulov: "Davron Kabulov",
        nigora: "Nigora Karimboyeva",
        zara: "Zara Sharinova",
        tojiboyev: "Otabek Tojiboyev",
        abbos: "Abbos Umarov",
        alimovich: "Shox Alimovich",
        rixsitilla: "Rixsitilla",
        kubayeva: "Dilnoza Kubayeva",
        nazar: "G’olib Nazar",
        xusan: "Xusan",
        ulasenova: "Rayhon Ulasenova",
        oybek: "Oybek",
        farangiz: "Farangiz",
        iforzoda: "Oyxon Iforzoda",
        sardor: "Sardor",
        shouBrand: "Shou Brand",
        fano: "Fano",
        chinorBrand: "Chinor Brend",
        matin: "Matin",
        sharqoniy: "Sharqoniy",
        poytaxt: "Poytaxt",
        karavan: "Karavan",
        eskiShahar: "Jasmin Eski Shahar",
        viaSharq: "Via Sharq",
        oazis: "Oazis",
        eldido: "Eldido",
        london: "London",
        zaxida: "Zaxida",
        farruxAhmedov: "Farrux Ahmedov",
        viaMajor: "Via Major",
        toj: "Toj",
        farruxFazel: "Farrux Fazel",
        dimash: "Dimash",
        cardsThirdTitle: "Mashxur O'zbek Guruhlari",
        cardsSecondTitle: "Mashhur O’zbek To'y Boshlovchilari",
        weddingFormat: "Tadbir Formati",
        price: "Narx:",
        wedding: "To'y",
        buttonOrder: "Buyutrma",
        singers: "Sanatkorlar",
        groups: "Guruhlar",
        single: "Boshlovchilar",
        location: "Uzbekistan, Tashkent"
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
        cardsTitle: "Известные Узбекские Артисты",
        jahongir: "Джахангир Отажонов",
        piligrim: "Дж Пилигрим",
        rashid: "Рашид Ҳолиқов",
        hamdam: "Ҳамдам Собиров",
        imron: "Имрон",
        shohruhxon: "Шоҳруҳхон",
        ulug: "Улуғбек Раҳматуллаев",
        sahar: "Саҳар",
        yorqin: "Ёрқинхўжа Умаров",
        sevara: "Севара Назархон",
        yulduz: "Юлдуз Усмонова",
        nasiba: "Насиба Абдуллаева",
        ozoda: "Озода Нурсаидова",
        lola: "Лола",
        rayhon: "Райҳон Ганиева",
        jasmin: "Жасмин",
        nilufar: "Нилуфар Усмонова",
        ziyoda: "Зиёда",
        mavluda: "Мавлуда Асалхожаева",
        milena: "Милена Мадмусаева",
        dilnoza: "Дилноза",
        alimov: 'Фарҳод Алимов',
        idoyatov: "Магометали Идоятов",
        karen: "Карен Гафуржанов",
        ikromov: "Шерзод Икромов",
        azimov: "Анвар Азимов",
        dilmurod: "Дилмурод Гуломов",
        umirzoqov: "Жамшид Умирзоқов",
        sotiboldiyeva: "Нилуфар Сотиболдиева",
        kabulov: "Даврон Кабулов",
        nigora: "Нигора Каримбоева",
        zara: "Зара Шаринова",
        tojiboyev: "Отабек Тожибоев",
        abbos: "Аббос Умаров",
        alimovich: "Шох Алимович",
        rixsitilla: "Рихситилла",
        kubayeva: "Дилноза Кубаева",
        nazar: "Голиб Назар",
        xusan: "Хусан",
        ulasenova: "Райҳон Уласенова",
        oybek: "Ойбек",
        farangiz: "Фарангиз",
        iforzoda: "Ойхон Ифорзода",
        sardor: "Сардор",
        shouBrand: "Шоу Бренд",
        fano: "Фано",
        chinorBrand: "Чинор Бренд",
        matin: "Матин",
        sharqoniy: "Шарқоний",
        poytaxt: "Пойтахт",
        karavan: "Караван",
        eskiShahar: "Жасмин Эски Шаҳар",
        viaSharq: "Виа Шарқ",
        oazis: "Оазис",
        eldido: "Элдидо",
        london: "Лондон",
        zaxida: "Захида",
        farruxAhmedov: "Фаррух Аҳмедов",
        viaMajor: "Виа Мажор",
        toj: "Тож",
        farruxFazel: "Фаррух Фазел",
        dimash: "Димаш",
        cardsThirdTitle: "Знаменитые Узбекские Свадьба Дежурный",
        cardsSecondTitle: "Знаменитые Узбекские Cвадебные Bедущие",
        weddingFormat: "Формат мероприятия",
        price: "Цена:",
        wedding: "Свадьба",
        buttonOrder: "Заказ",
        singers: "Артисты",
        groups: "Дежурные",
        single: "Bедущие",
        location: "Узбекистан, Ташкент"
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