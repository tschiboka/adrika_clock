const addZeros = num => (Number(num) <= 9 && Number(num) >= 0 ? "0" : "") + num; // eg: 1 becomes 01

const getDate = (date = new Date) => ({ day: date.getDate(), month: date.getMonth() + 1, year: date.getUTCFullYear(), dayOfWeek: date.getDay() });

function setDate(date = getDate()) {
    const days = "SUN,MON,TUE,WED,THU,FRI,SAT".split(",");
    const dateTxt = `${addZeros(date.day)}. ${addZeros(date.month)}. ${date.year} ${days[date.dayOfWeek]}`;
    document.getElementById("date").innerHTML = dateTxt;
}

const getTime = (date = new Date) => ({ hour: date.getHours(), min: date.getMinutes(), sec: date.getSeconds() })

function setTime({ hour, min, sec } = getTime()) {
    const timeDigits = [...`${addZeros(hour)}:${addZeros(min)}:${addZeros(sec)}`];
    if (timeDigits === "00:00:00") setDate();

    timeDigits.map((digit, i) => document.getElementById(`digit${i + 1}`).innerHTML = digit);
}

setInterval(() => setTime(), 1000);

setDate();
setTime();
