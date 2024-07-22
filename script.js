const inviteListDetails = document.getElementById('inviteListDetails');

const inviters = [
    "Payaso57", "XatkaX", "mellamoluis", "qwertyuiofg", "TeQuail",
    "Ffff6vcc5", "Husswin", "Unuserlol123", "13zxcvbnm89", "Adrian05",
    "Hdihcbcnijfbc", "Redri768", "harmful", "xjdbsj", "hijuke",
    "Pickl0", "Hhnfrnh", "Markyn", "Isjebbfjxksdd", "privateshit275",
    "Beamerboi", "Jsjabsh82625", "Ubrtone", "Snendjsn", "porcodio",
    "Vm9145", "Brobroo", "Aatrox", "Rammler566", "Hecv55",
    "Leornado", "Mac1289", "Handlpllppp", "Hotofmfnjddu", "Sexy67",
    "Hhnfrnh", "weeser", "XXXHey", "memeow", "Repitwt",
    "Ashtonray6386", "Yuck11", "TeQuail", "Leo12345", "Anchoas",
    "jeremia1549RB", "CrimsonMoon", "Sis888", "Frankesu", "sihu379",
    "Ulquiorra", "cronoxx", "Isjebbfjxksdd", "Mause12", "Ich12345",
    "Timmy6969", "Fjeien", "GigelEAiciBa", "Jorge435", "Elfromo",
    "Jyjssjsb", "Witchking69", "Hahahajs", "ODD2ODD", "Eromore",
    "Liveone", "Piliano", "Superman2020", "Ndksosnddkdj", "Nchshjs",
    "Yessir", "Gray20502", "Fhtdg353", "Hhnbbbvvvb", "Hnlhnl76",
    "corner4", "RogueCompany123", "Y104927g", "Inewgere", "Dksldksl",
    "Deman", "Nxbdsbd", "Nico14101", "Usuario0011", "Bigfortun",
    "fadfadfqe", "Max6543", "Rewilo", "sfsdfsdfsd", "GandalfXXX",
    "Cummmm1123", "Husswin", "privateshit275", "Vm9145", "Dwebber43"
];

const possibleInvitees = [
    "Chepheee20", "Djdmmcs", "Akkdnnd", "Ftffygf", "sweraswq1",
    "Mmmxxx", "Register2333", "Im14YearsOld", "ui67re90", "Ajfjsh34",
    "Eyhcudnfn", "Shdhdhd", "Usuu11", "ryuytr", "Lmp123",
    "Nbgkjn", "timbald", "theSyKo", "lukein", "Joebiden5",
    "Toops1", "Aeegon", "Sndinad", "Jkllncdtf", "a4j3gs",
    "Snznznjz", "Henebdjj", "Jejffjfjf", "Bbffukcf", "Hophop35",
    "Qjjqyqtsh3j", "gfdfggvb", "Trezaiop", "bbldraky", "sjshbxjksns",
    "yourboyjr559", "Djendjdj", "ajonymous", "Fyhjvxzr", "Vakxjegsv",
    "Sjcheuhdbbd", "Garybl5853", "jackgibson12", "Kelando557", "CunnyLiv675",
    "Djdksk", "Rostik", "Username1211", "mrmoo", "unk123",
    "afsdfsdfs", "aascass", "Locosx90", "Kajsbdn", "vc34mn78",
    "Tleg2251", "Garybl58535", "Ywoeueb8292", "Gyrkmffjf", "Dfhhdfgg",
    "pwscpsn", "mamajaja", "Ughhhjjj", "Holipo", "m0m0m0m",
    "Boite2", "Skskxkx", "Cdsxvhgvcd", "Rwt429", "bolo12",
    "Shimmerings4m", "Mesuenta", "CK727263", "cletus", "LegitNoobSlayer",
    "Bjogfjbgg", "ad23456", "Ddsfgfssd", "hehshshdj", "Googale",
    "Sdifjccjd", "shshjznz", "Ahmedhassansikh", "ddddddde", "Justin489",
    "sorina", "jfjfkjcbdjdu", "Meowssej", "Treety", "Solluna",
    "Y8ggub", "Movhee", "Mbftkvdc", "Bitch12", "56tyghbn43",
    "ydoudotas", "Naajakak", "Bhgfcbkjcxx", "Kylesos", "Allalonewithher",
    "CypiX", "Vdoo00", "Samurai66", "Gnkdiifkknnd", "Gfdss",
    "Mentes123", "Jorgetorres", "Shebdudh", "Dne199", "iiegisinen",
    "jungkook01", "ilove510", "Wtwrwtua", "Ls1838", "Antezana",
    "ghjgjhgjh", "Grippydelight", "Max837464637", "Tylat123", "55446",
    "Jhgjhg", "Nxjxjgg", "Hhfdggyf", "shygu", "little0009",
    "Jfbejw12", "esddjd", "Hehdggr", "Rimjobber", "Bbbjjjoo",
    "Svjsbssv", "Jiputu", "Horroso", "Fsvsxjsj", "Jjbvxdfh",
    "Mikey66554", "Sircumda3rd", "Shusjeeb", "Username213", "Llaka",
    "SurgeLovesKids", "Iliketeens", "casavacias23", "Bahashahsh", "Yomomma12",
    "ffhbbcdd", "Blah87noj", "Semiramis", "Djsbsj12", "Famlit",
    "Potekyy", "hamana88", "Ahdjajd", "Sheneedsfacial", "Barcobasurero",
    "Nanaq", "Cvtssvgged", "Yyvuvvvv", "Ddaxce23", "12werty79",
    "Remilio", "Aqqqffgt", "Djdjcdjdnrnf", "Scsjshsv", "Privategoon",
    "Cadararfa", "jsndn973", "drfgfgfgf", "Qwert12", "Fuckedanddumped",
    "Jaiagaiava", "sdrvcddd", "Jxushssv", "Siemano", "Blnkz",
    "Hara89", "Djdjfmfngkgg", "djdjxjsd", "Bbcfdbnmljvf", "Ygffgg",
    "Dcffed", "Shejdj", "Bdaacvb", "Demoncc", "Test384",
    "Lajncoav", "Suudjsjdjj", "Tree6568", "jjdhdhdhd", "Yolo1234567",
    "perok", "Mushherbrainbj", "Wewiw123", "Ghjbdvb", "nio999",
    "Bronkaso", "Fnfkkdd"
];

function addInvite() {
    const inviter = inviters[Math.floor(Math.random() * inviters.length)];
    const invitee = possibleInvitees[Math.floor(Math.random() * possibleInvitees.length)];
    const invites = Math.floor(Math.random() * 1000) + 1;

    const newInvite = document.createElement('li');
    newInvite.textContent = `${inviter} invited ${invitee} and now has ${invites} invites`;
    inviteListDetails.appendChild(newInvite);
}

// Agregar una nueva invitación cada segundo
setInterval(addInvite, 1000);
