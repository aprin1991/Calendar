/**
 * Represents a calendar with pure javascript
 *@author Hamed Ostovar
 * @todo Finish implementation
 */

const date = new Date();
const renderCalendar = () => {
    const monthDays = document.querySelector(".days")
    const nextDays = 7 - getLastDayIndex();
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    function geyFirstDayIndex() {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    function getLastDay() {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0)

    function getLastDayIndex() {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    }

    function getPrevLastDay() {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }
    document.querySelector(".date h1").innerHTML = month[date.getMonth()]
    document.querySelector(".date p").innerHTML = date.toDateString();

    let days = "";
    for (let x = geyFirstDayIndex(); x > 0; x--) {
        days += `<div class="prev-date">${getPrevLastDay() - x + 1}</div>`
    }
    for (let i = 1; i <= getLastDay(); i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`
        } else {

            days += `<div>${i}</div>`
        }

    }
    for (let j = 1; j < nextDays; j++) {
        days += `<div class="next-date">${j}</div>`

    }
    monthDays.innerHTML = days;
}
renderCalendar();

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar()
})
document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar()
})