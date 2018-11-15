/*jshint esversion: 6 */
let buttons = document.getElementsByClassName("btn");
for (let button of buttons) {
    button.addEventListener("click", (event) => {
        event.preventDefault();
    });
}
const finalQuestion = [{
    videoId: "c7O91GDWGPU",
    composer: "Rossini",
    name: "William Tell Overture",
},{
    videoId: "4tDYMayp6Dk",
    composer: "Struss I",
    name: "Wedding march",
},{
    videoId: "EmQBFLJAIcY",
    composer: "Chopin",
    name: "Tristesse Etude",
},{
    videoId: "ZpuROwy_8mg",
    composer: "Chopin",
    name: "Revolutionary Etude",
},{
    videoId: "fBA-38mzabs",
    composer: "Chopin",
    name: "Fantasie Impromtu",
},{
    videoId: "yL2IbLc7hE8",
    composer: "Struss II",
    name: "On the beautiful blue danube",
},{
    videoId: "gPybrOxRoT4",
    composer: "Struss II",
    name: "Die Fledemaus Overture",
},{
    videoId: "pmuFOuh3QHs",
    composer: "Bizet",
    name: "carmen overture",
},{
    videoId: "tSsNFPk2vNA",
    composer: "Bizet",
    name: "carmen habanera",
},{
    videoId: "2fDkxQBjgFU",
    composer: "Bizet",
    name: "carmen toreador",
},{
    videoId: "kugL3fZ50CU",
    composer: "เฉลียง",
    name: "นิทานหิ่งห้อย",
},{
    videoId: "pydOPJ9Cd-M",
    composer: "Puccini",
    name: "Madam Butterfly Trio",
},{
    videoId: "OI4WgmnzywU",
    composer: "Puccini",
    name: "Madam Butterfly Overture",
},{
    videoId: "b-wJJvznb5o",
    composer: "Tchaikovsky",
    name: "Nutcracker Overture",
},{
    videoId: "q_YzKlhknOU",
    composer: "Tchaikovsky",
    name: "Nutcracker Spanish Dance",
},{
    videoId: "iiyx1m44nMM",
    composer: "Tchaikovsky",
    name: "Nutcracker Chinese Dance",
},{
    videoId: "aYOEsMOb5ro",
    composer: "Tchaikovsky",
    name: "Nutcracker Russian Dance",
},{
    videoId: "zV1qLYukTH8",
    composer: "Tchaikovsky",
    name: "Nutcracker Sugar Plum Fairy Dance",
},{
    videoId: "MWPCaE76mHw",
    composer: "Saint-Saens",
    name: "Carnival Kangaroo",
},{
    videoId: "QO8v5G0s7BU",
    composer: "Saint-Saens",
    name: "Carnival Aquarium",
},{
    videoId: "bcAJpsWWuIY",
    composer: "Saint-Saens",
    name: "Carnival Fossils",
},{
    videoId: "Mvh4zEKG2zs",
    composer: "Saint-Saens",
    name: "Carnival Swan",
},{
    videoId: "tAwoMP8hme8",
    composer: "Saint-Saens",
    name: "Carnival Finale",
},{
    videoId: "O5FsqlmX1KY",
    composer: "Prokofiev",
    name: "Peter and the wolf",
},{
    videoId: "M93qXQWaBdE",
    composer: "Rimsky-Korsakov",
    name: "Flight of the bumblebee",
},{
    videoId: "LMr-3P0Xebo",
    composer: "Tchaikovsky",
    name: "Piano Concerto No.1 i",
},{
    videoId: "oU7cE6qDGxE",
    composer: "Tchaikovsky",
    name: "Piano Sonata no.7",
},{
    videoId: "LMr-3P0Xebo",
    composer: "R.struss",
    name: "Piano Concerto No.1 i",
},{
    videoId: "IFPwm0e_K98",
    composer: "R.struss",
    name: "Also Sprach Zarathustra",
    startTime: 11,
},{
    videoId: "IFPwm0e_K98",
    composer: "R.struss",
    name: "Also Sprach Zarathustra",
    startTime: 11,
},{
    videoId: "pxZgPa1-kyE",
    composer: "Xian Xinghai",
    name: "Yellow River Piano Concerto",
},{
    videoId: "it-TxB0PDiQ",
    composer: "Charles Ives",
    name: "Charlie Rutlage",
    startTime: 49,
},
];
const midtermQuestion = [{
    videoId: "uimdQt0ycU8",
    composer: "Puccini",
    name: "One fine day we shall see",
}, {
    videoId: "0rlDjyl3Z80",
    composer: "Hummel",
    name: "Air a la tirolienre",
}, {
    videoId: "ERD4CbBDNI0",
    composer: "di Capua",
    name: "O sole mio",
}, {
    videoId: "SImDugHUnHw",
    composer: "The Beatles",
    name: "Honey Pie",
}, {
    videoId: "UzEX0-nwN4Y",
    composer: "Mozart",
    name: "Eine kleine nachtmusik, I"
}, {
    videoId: "u0oPrSiBS54",
    composer: "Vivaldi",
    name: "Lute Concerto, I"
}, {
    videoId: "l45DAuXYSIs",
    composer: "Mozart",
    name: "Symphony No.40, I",
}, {
    videoId: "4T3D5Q6Eq2w",
    composer: "Beethoven",
    name: "Symphony No.5, I",
}, {
    videoId: "XeT17YeUj5k",
    composer: "Beethoven",
    name: "Symphony No.9, IV",
}, {
    videoId: "6z82w0l6kwE",
    composer: "Schumann",
    name: "Dreaming",
}, {
    videoId: "wsztV6HFGuA",
    composer: "Mozart",
    name: "Eine kleine nachtmusik, IV",
}, {
    videoId: "0OUvK0eo40Q",
    composer: "Strauss I",
    name: "Radetzky March",
}, {
    videoId: "rNsgHMklBW0",
    composer: "Pachelbel",
    name: "Canon in D",
}, {
    videoId: "GRxofEmo3HA",
    composer: "Vivaldi",
    name: "Four seasons spring",
    endTime: 631,
}, {
    videoId: "GRxofEmo3HA",
    composer: "Vivaldi",
    name: "Four seasons summer",
    startTime: 631,
    endTim: 1259,
}, {
    videoId: "GRxofEmo3HA",
    composer: "Vivaldi",
    name: "Four seasons autumn",
    startTime: 1259,
    endTime: 1968,
}, {
    videoId: "GRxofEmo3HA",
    composer: "Vivaldi",
    name: "Four seasons winter",
    startTime: 1968,
}, {
    videoId: "-TGKJ9MgCOQ",
    composer: "Handel",
    name: "The arrival of queen Sheba",
}, {
    videoId: "i7vJ2UFbeXA",
    composer: "Handel",
    name: "Royal Fireworks",
}, {
    videoId: "l8Wahxcg8ro",
    composer: "Handel",
    name: "Water Music Alla Hornpipe",
}, {
    videoId: "BOZEj8wyj-I",
    composer: "Bach",
    name: "Brandenburg Concerto No.1, I",
    startTime: 35,
    endTime: 280,
}, {
    videoId: "8RaGcWX5mrU",
    composer: "Bach",
    name: "Brandenburg Concerto No.6, III",
}, {
    videoId: "ho9rZjlsyYY",
    composer: "Bach",
    name: "Toccata and Fugue",
}, {
    videoId: "JXhAz0DOpMU",
    composer: "Drayton",
    name: "Masterpiece",
    startTime: 31,
}, {
    videoId: "jinGW7ZDGPM",
    composer: "Anderson",
    name: "Typewriter",
    startTime: 90,
    endTime: 204,
}, {
    videoId: "tF5kr251BRs",
    composer: "Haydn",
    name: "Surprise symphony",
    startTime: 16,
}, {
    videoId: "VNmjTZ8VNkY",
    composer: "Mozart",
    name: "The vengeance of hell boils in my heart",
}, {
    videoId: "9bK9h12Qdvs",
    composer: "Mozart",
    name: "12 Variations in C Major",
}, {
    videoId: "R1QNhRNxvTI",
    composer: "Beethoven",
    name: "Piano Concerto No.3, I",
    endTime: 1010,
}, {
    videoId: "DAyUzxDB9eE",
    composer: "Beethoven",
    name: "Symphony No.5, IV",
}, {
    videoId: "QZIZbeppLto",
    composer: "Narongrit",
    name: "ถวายปฏิญญา",
}, {
    videoId: "sTzoD3WnXuc",
    composer: "Narongrit",
    name: "ปิยะสยามินทร์",
    startTime: 33,
}, {
    videoId: "yqSoRRrPhG8",
    composer: "Anon",
    name: "ฟ้อนเงี้ยว"
}, {
    videoId: "K32Adi8nmzA",
    composer: "Eric Coates",
    name: "Dam busters march"
}, {
    videoId: "Vonh4vKBZGY",
    composer: "Puccini",
    name: "Oh, My beloved father"
}];

const allQuestion = [...midtermQuestion, ...finalQuestion];

const shuffleQuestion = shuffle(finalQuestion);
let questionIndex = -1;

const tag = document.createElement("script");
const status = document.getElementById("status");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let isCountDownStart = false;
let isNewSong = false;
let timeout;
let countdown;

function onYouTubeIframeAPIReady() {
    nextVideo();
}

function onPlayerReady(event) {
    const duration = shuffleQuestion[questionIndex].endTime || player.getDuration();
    const start = shuffleQuestion[questionIndex].startTime || 0;
    const startTime = getRandomInt(start, duration - 60);
    event.target.seekTo(startTime, true);
}

function onPlayerStateChange(event) {
    if (isNewSong && event.data === YT.PlayerState.PLAYING) {
        const duration = shuffleQuestion[questionIndex].endTime || player.getDuration();
        const start = shuffleQuestion[questionIndex].startTime || 0;
        const startTime = getRandomInt(start, duration - 60);
        event.target.seekTo(startTime, true);
        isNewSong = false;
        isCountDownStart = true;
        status.innerHTML = "Playing";
        timeout = setTimeout(stopVideo, 60000);
        countdown = setInterval(() => {
            document.getElementById("countdown").innerHTML = +document.getElementById("countdown").innerHTML - 1;
        }, 1000);
    }
}

function stopVideo() {
    if (countdown) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = 0;
    }
    status.innerHTML = "Stop";
    player.stopVideo();
    checkAnswer();
}

function checkAnswer() {
    const songName = document.getElementById("name").value;
    const composer = document.getElementById("composerName").value;
    if (songName.toLocaleLowerCase() === shuffleQuestion[questionIndex].name.toLocaleLowerCase()) {
        document.getElementById("name").classList.add("is-valid");
        document.getElementById("name").classList.remove("is-invalid");
    } else {
        document.getElementById("name").classList.remove("is-valid");
        document.getElementById("name").classList.add("is-invalid");
    }
    if (composer.toLocaleLowerCase() === shuffleQuestion[questionIndex].composer.toLocaleLowerCase()) {
        document.getElementById("composerName").classList.add("is-valid");
        document.getElementById("composerName").classList.remove("is-invalid");
    } else {
        document.getElementById("composerName").classList.remove("is-valid");
        document.getElementById("composerName").classList.add("is-invalid");
    }
}

function nextVideo() {
    const songName = document.getElementById("name");
    const composer = document.getElementById("composerName");
    songName.classList.remove("is-valid");
    songName.classList.remove("is-invalid");
    composer.classList.remove("is-valid");
    composer.classList.remove("is-invalid");
    document.getElementById("name").focus();
    songName.value = "";
    composer.value = "";
    if (countdown) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = 60;
    }
    if (timeout) {
        clearTimeout(timeout);
    }
    isNewSong = true;
    status.innerHTML = "Loading";
    questionIndex = (questionIndex + 1) % shuffleQuestion.length;
    if (player) {
        player.stopVideo();
        player.loadVideoById(shuffleQuestion[questionIndex].videoId);
    } else {
        player = new YT.Player("player", {
            videoId: shuffleQuestion[questionIndex].videoId,
            events: {
                "onReady": onPlayerReady,
                "onStateChange": onPlayerStateChange,
            }
        });
    }
    document.getElementById("trackName").innerHTML = shuffleQuestion[questionIndex].name;
    document.getElementById("composer").innerHTML = shuffleQuestion[questionIndex].composer;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function toggleHint() {
    document.getElementById("hint").hidden = !document.getElementById("hint").hidden;
}