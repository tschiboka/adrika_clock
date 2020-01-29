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

function loadImage(selector, url, callback) {
    try {
        const img = new Image();
        img.src = url;
        img.onload = function () {
            const elem = document.querySelector(selector);
            elem.style.backgroundImage = `url(${this.src})`;
            typeof callback === 'function' && callback();
        };
        return img;
    } catch (error) { console.log(error) }
}

function preLoadImages() {
    const imageObjs = [
        { selector: ".watercolor_bg",/*    */ url: "/images/watercolor_bg.png" },
        { selector: ".clockface", /*       */ url: "/images/analog-clockface.png" },
        { selector: ".clock-helperline",/* */ url: "/images/clock_helperline.png" },
        { selector: ".arc1",/*             */ url: "/images/arc1.png" },
        { selector: ".arc2",/*             */ url: "/images/arc2.png" },
        { selector: ".lion",/*             */ url: "/images/line_lion.png" },
        { selector: ".palmtree",/*         */ url: "/images/line_palmtree.png" },
        { selector: ".watercolor-pink",/*  */ url: "/images/line_watercolor-pink.png" },
        { selector: ".nails",/*            */ url: "/images/line_nails.png" },
        { selector: ".galaxy",/*           */ url: "/images/line_galaxy.png" },
        { selector: ".butterfly-blue",/*   */ url: "/images/butterfly_blue.png" },
        { selector: ".butterfly-purple",/* */ url: "/images/butterfly_purple.png" },
        { selector: ".face",/*             */ url: "/images/face.png" },
    ];

    imageObjs.forEach((imgObj, i) => loadImage(imgObj.selector, imgObj.url));
}

function start() {
    preLoadImages();
    setDate();
    setTime();

    setInterval(() => setTime(), 1000); // start clock
}

start();