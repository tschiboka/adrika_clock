const addZeros = num => (Number(num) <= 9 && Number(num) >= 0 ? "0" : "") + num; // eg: 1 becomes 01

const getDate = (date = new Date) => ({ day: date.getDate(), month: date.getMonth() + 1, year: date.getUTCFullYear(), dayOfWeek: date.getDay() });

function setDate({ day, month, year, dayOfWeek } = getDate()) {
    const days = "SUN,MON,TUE,WED,THU,FRI,SAT".split(","), dateTxt = `${addZeros(day)}. ${addZeros(month)}. ${year} ${days[dayOfWeek]}`;
    document.getElementById("date").innerHTML = dateTxt;
}

const getTime = (date = new Date) => ({ hour: date.getHours(), min: date.getMinutes(), sec: date.getSeconds() })

function setTime({ hour, min, sec } = getTime()) {
    const timeDigits = [...`${addZeros(hour)}:${addZeros(min)}:${addZeros(sec)}`];
    if (timeDigits === "00:00:00") setDate();

    timeDigits.map((digit, i) => document.getElementById(`digit${i + 1}`).innerHTML = digit);
}

function loadImage(url, domElem, callback) {
    try {
        const img = new Image();
        img.src = url;
        img.onload = function () {
            const elem = document.querySelector(domElem);
            elem.style.backgroundImage = `url(${this.src})`;
            console.log(elem);
        };
        return img;
    } catch (error) { console.log(error) }
}

function start() {
    const watercolor_bg = loadImage("/images/watercolor_bg.png", ".watercolor_bg", () => console.log("watercolor_bg img loaded"));
    setDate();
    setTime();

    setInterval(() => setTime(), 1000); // start clock
}

start();