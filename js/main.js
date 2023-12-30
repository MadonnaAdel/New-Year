
var imges =
[
        {"url":"images/pexels-george-dolgikh-1303081.jpg"},
        {"url":"images/pexels-jill-wellington-3309748.jpg"},
        {"url":"images/pexels-arvind-shakya-668282.jpg"},
        {"url":"images/pexels-candis-hidalgo-639112.jpg"},
        {"url":"images/pexels-george-dolgikh-1666069.jpg"},
        {"url":"images/pexels-ylanite-koppens-744969.jpg"},
        {"url":"images/pexels-lumn-1619666.jpg"},
        {"url":"images/pexels-laura-james-6101960.jpg"},
];
var wishes  =
[
        {"wish":"في العام الجديد اتمني الحرية والسلام للعالم وفلسطين"},
        {"wish":"أتمنالك تنسي كل قساوة شفتها والسنة دي تكون كلها تعويضات"},
        {"wish":"أتمنى لكم دفءًا داخليًا، حيث يملأ الحب قلوبكم"},
        {"wish":"أتمنى لكم ضياءً في طريقكم، حيث ينير النجاح والتحقيق الطريق أمامكم."},
        {"wish":"في كل بداية هناك سحر، وفي كل سحر هناك بداية."},
        {"wish":'يمكن للعام الجديد أن يكون بداية حياة جديدة إذا كنت مستعدًا لترك الماضي وراء ظهرك. - جوزيف فيليبس'},
        {"wish":"عندما يأتي يناير، يفتح كتاب جديد من الزمن. ومع ذلك، يُسمح لنا بكتابة فصل جديد في حياتنا. - ميلاني بيندير"},
        {"wish":"عندما تغلق بابًا، يفتح آخر. لكننا نحن أحيانًا ننظر إلى الباب المغلق لفترة طويلة حتى نفقد القدرة على رؤية الأبواب التي تم فتحها لنا. - هيلين كيلر"},
        {"wish":"في بينية الحياة، يكمن السر في البدايات، وفي كل بداية يتجلى الأمل. - نجيب محفوظ،"},
        {"wish":'"العام الجديد يشبه صفحة فارغة في دفتر الحياة، ونحن نحمل أقلامنا لنملأها بأحداث تجعلها فصلاً مميزًا في رحلتنا." - نزار قباني'},
        {"wish":"في اللحظة التي تنقلنا من آخر لحظات العام القديم إلى اللحظات الأولى من العام الجديد، نجد أنفسنا أمام صفحة جديدة من كتاب الحياة يمكننا كتابة قصتها بأسلوبنا الخاص."},
        {"wish":"بكل ضربة ساعة تحين في ليلة رأس السنة، تنطلق نبضات الأمل لتملأ قلوبنا بفرص لتحقيق تحولات عميقة وتحقيق أحلامنا."},
        {"wish":"كما تنطلق الطيور في سماء العام الجديد، نجد أنفسنا جاهزين للرحيل نحو آفاق غير مكتشفة وتحديات مثيرة"},
        {"wish":'"عندما يرن جرس منتصف الليل في ليلة رأس السنة، يبدأ العقل في رسم خرائط للطريق الذي نستعد لاستكشافه خلال العام الجديد." - مصطفى صادق الرافعي'},
        {"wish":"في هدوء اللحظات الأولى للعام الجديد، يمكننا سماع ترنيمة الأمل تترنح بين نجوم الليل، تذكيرًا بأن لدينا القوة لبناء حياة جديدة."},
        {"wish":'"في غمرة الكتابة على أوراق السنة الجديدة، يكتب الإنسان قصته مع الوقت ويترك بصماته على صفحات العمر." - محمود درويش'},
];

var whishIndex = 0;
var imgeIndex = 0;
var nameInput = document.querySelector(".searchInput");
var btn = document.querySelector(".btn");
var text =document.querySelector(".text");



function getRandomWish() {
    var randomIndex = Math.floor(Math.random() * wishes.length);
    return wishes[randomIndex];
}


function happyYear(){
    if(whishIndex == wishes.length)
    {
        whishIndex = 0;
    }
    var randomWish = getRandomWish();

    text.innerHTML= 
    `<h1>
    Happy New Year ${nameInput.value}
    <i class="fa-solid fa-gifts"></i>
    </h1>
    <h3 class="wish">${randomWish.wish}</h3>
    <span>مش عجباك دي في غيرها... دوس سيرش</span>
    <p>Madonna Adel (UI INTAKE 44 )</p>`;
    whishIndex = whishIndex + 1 ;
};


function changImg(){
    if(imgeIndex == imges.length)
    {
        imgeIndex=0;
    }
    document.querySelector(".main").style.background = `no-repeat center url(${imges[imgeIndex].url})`;
    document.querySelector(".main").style.backgroundSize = `cover`;
    document.querySelector(".text").style.height = "fit-content";
    document.querySelector(".text").style.transition = "8s";
    document.querySelector(".text").style.margin = "5px";
    document.querySelector(".text").style.padding = "5px";
    imgeIndex = imgeIndex + 1 ;
};

function clear(){
    nameInput.value=" ";
}

btn.addEventListener("click",()=>{
    changImg();
    happyYear(nameInput.value);
    clear();
});

nameInput.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        happyYear(nameInput.value);
        changImg();
    }
});