const leadingZeros = num => (Number(num) <= 9 && Number(num) >= 0 ? "0" : "") + num;

const getDate = (date = new Date) => ({ day: date.getDate(), month: date.getMonth() + 1, year: date.getUTCFullYear(), dayOfWeek: date.getDay() });

function setDate() {
    const date = getDate();
    const days = "SUN,MON,TUE,WED,THU,FRI,SAT".split(",");
    const dateTxt = `${leadingZeros(date.day)}. ${leadingZeros(date.month)}. ${date.year} ${days[date.dayOfWeek]}`;

    document.getElementById("date").innerHTML = dateTxt;
}

setDate();