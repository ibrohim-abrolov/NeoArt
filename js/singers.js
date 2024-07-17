
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
        // articleTitle: "Organizatsiya Haqida",
        // articleText: "Bizning to'y organizatsiya veb-saytimizga xush kelibsiz, biz siz bilan maxsus kunimizni nishonlashni kutib qolamiz. Biz ushbu veb-saytni to'yimiz oldidan barcha muhim tafsilotlarni siz bilan baham ko'rishning qulay va interaktiv usuli sifatida yaratdik.Nihoyat - doimiy hurmat va qo'llab-quvvatlaganingiz uchun tashakkur. Biz bu kunni siz bilan baham ko'rishdan juda xursandmiz va siz uchun eng yaxshi kunni nishonlashni orziqib kutamiz.",
        // articleTextSecond: "Neo Art jamoasiga 2019 yilning 15-Avgust sanasida “Ahmedjanov  Samandar Rustamovich” boshchiligida asos solindi.  Bizning jamoa maqsadi odamlarga ularning eng yahshi kunida xizmat korsatishva esda qolarlik taassurotlar yaratish. Hurmat bilan NeoArt.",
        // founder: "Asoschi:",
        // userName: "Samandar Ahmedjanov",
        // servicesTitle: "Servislar Haqida",
        // servicesShohsaroy: "Shohsaroy To'yxona",
        // servicesYakkasaroy: "Yakkasaroy To'yxona",
        // servicesVersal: "Versal To'yxona",
        // servicesMumtoz: "Mumtoz To'yxona",
        // date: "Sana",
        // organisation: "Organizatsiya",
        // servicesButton: "Batafsil",
        // singersTitle: "Mashhur Sanatkorlar va Boshlovchilar",
        // singersPrice: "Narx:",
        // singersNameF: "Jahongir Otajonov",
        // singersNameDj: "Dj Piligrim",
        // singersNameRashid: "Rashid Holiqov",
        // singersNameHamdam: "Hamdam Sobirov",
        // singersNameImron: "Imron",
        // singersNameShohruhxon: "Shohruhxon",
        // singersNameUlugbek: "Ulug'bek Rahmatullayev",
        // singersNameSahar: "Sahar",
        // singersNameUmarov: "Yorqinxo'ja Umarov",
        // singersNameSevara: "Sevara Nazarxon",
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
        // articleTitle: "Об организации",
        // articleText: "Добро пожаловать на наш сайт планирования свадьбы, нам не терпится отпраздновать с вами наш особенный день. Мы создали этот веб-сайт как удобный и интерактивный способ поделиться с вами всеми важными подробностями подготовки к нашей свадьбе. Наконец, спасибо за ваше постоянное уважение и поддержку. Мы так рады разделить этот день с вами и с нетерпением ждем возможности отпраздновать самый лучший день для вас.",
        // articleTextSecond: "Команда Neo Art была основана 15 августа 2019 года под руководством «Ахмеджанова Самандара Рустамовича». Цель нашей команды — служить людям в их лучшие дни и создавать незабываемые впечатления. С уважением, НеоАрт.",
        // founder: "Основатель:",
        // userName: "Самандар Ахмеджанов",
        // servicesTitle: "Об услугах",
        // servicesShohsaroy: "Свадебный зал Шахсарай",
        // servicesYakkasaroy: "Свадебный зал Яккасарой",
        // servicesVersal: "Свадебный зал Версал",
        // servicesMumtoz: "Свадебный зал Мумтоз",
        // date: "Дата",
        // organisation: "Организация",
        // servicesButton: "Подробнее",
        // singersTitle: "Известные артисты и ведущие",
        // singersPrice: "Цена:",
        // singersNameF: "Джахангир Отажонов",
        // singersNameDj: "Дж Пилигрим",
        // singersNameRashid: "Рашид Ҳолиқов",
        // singersNameHamdam: "Ҳамдам Собиров",
        // singersNameImron: "Имрон",
        // singersNameShohruhxon: "Шоҳруҳхон",
        // singersNameUlugbek: "Улуғбек Раҳматуллаев",
        // singersNameSahar: "Саҳар",
        // singersNameUmarov: "Ёрқинхўжа Умаров",
        // singersNameSevara: "Севара Назархон",
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