let timeContainer = document.querySelector(".time");
let monthContainer = document.querySelector('.month');
let daysOfWeek = document.querySelector('.days-of-week');
let todayContainer = document.querySelector('.today');
let background = document.getElementById('bg');
let titleTime = document.getElementById('titleTime');
let inputTasks = document.getElementById('tasks');
let listStore = document.querySelector('.list-store');
let submitBtn = document.getElementById('submitBtn');
let taskList = document.querySelectorAll('.task');


let intervalId = setInterval(() => {
    let time = new Date();
    let month = time.getMonth() + 1;
    let todayDay = time.getDate();
    let dayOfWeek = time.getDay() + 1;
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    setMonth(month);
    setDay(todayDay);
    setDayOfWeek(dayOfWeek);
    addZeroToTime(hour, minute, second, timeContainer);
    addZeroToTime(hour, minute, second, titleTime);
    setBg(hour);
}, 900)

function setBg(hour) {
    if (hour >= 4 && hour < 10) {
        background.style.background = "url(./img/morning1.jpeg)";
        background.style.backgroundSize = "1685px 950px";
        background.style.backgroundRepeat = "no-repeat";
    } else if (hour >= 10 && hour < 14) {
        background.style.background = "url(./img/poldink.jpg)";
        background.style.backgroundSize = "1685px 950px";
        background.style.backgroundRepeat = "no-repeat";
    } else if (hour >= 14 && hour < 18) {
        background.style.background = "url(./img/evening.png)";
        background.style.backgroundSize = "1685px 950px";
        background.style.backgroundRepeat = "no-repeat";
    } else {
        background.style.background = "url(./img/night.png)";
        background.style.backgroundSize = "1685px 950px";
        background.style.backgroundRepeat = "no-repeat";
    }
}

function setDay(today) {
    todayContainer.innerHTML = `${today}`
}

function setDayOfWeek(dayId) {
    switch (dayId) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
    }
    daysOfWeek.innerHTML = `${day}`;
}

function addZeroToTime(h, m, s, item) {
    item.innerHTML = `0${h} : 0${m} : 0${s}`;
    if (h >= 10 && m >= 10 && s >= 10) {
        item.innerHTML = `${h} : ${m} : ${s}`;
    } else if (h >= 10 && m >= 10 && s < 10) {
        item.innerHTML = `${h} : ${m} : 0${s}`;
    } else if (h >= 10 && m < 10 && s < 10) {
        item.innerHTML = `${h} : 0${m} : 0${s}`;
    } else if (h < 10 && m < 10 && s < 10) {
        item.innerHTML = `0${h} : 0${m} : 0${s}`;
    } else if (h >= 10 && m < 10 && s >= 10) {
        item.innerHTML = `${h} : 0${m} : ${s}`;
    } else if (h < 10 && m >= 10 && s >= 10) {
        item.innerHTML = `0${h} : ${m} : ${s}`;
    } else if (h < 10 && m < 10 && s >= 10) {
        item.innerHTML = `0${h} : 0${m} : ${s}`;
    } else if (h < 10 && m >= 10 && s < 10) {
        item.innerHTML = `0${h} : ${m} : 0${s}`
    }
}


function setMonth(monthId) {
    switch (monthId) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
    }
    monthContainer.innerHTML = `${month}`;
}


submitBtn.addEventListener('click', makeTask);

let counter = 0;

function makeTask() {
    if (inputTasks.value == false) {
        console.log("press something")
    } else {
        let list = document.createElement('li');
        list.className = 'task';
        listStore.appendChild(list);
        list.addEventListener('click', cancelTask);
        list.addEventListener('dblclick', removeTask);
        let value = inputTasks.value;
        list.innerHTML = `${value}`;
        clearInputValue(inputTasks);
        counter++;
        console.log(counter);
    }
    if (counter < 5) {
        listStore.style.display = "flex";
        listStore.style.flexDirection = "column";
    } else if (counter >= 5 && counter < 10) {
        submitBtn.disabled = false;
        listStore.style.display = "grid";
        listStore.style.gridTemplateColumns = "repeat(2,1fr)";
    } else if (counter == 10) {
        submitBtn.disabled = true;
        console.log("You add max count tasks");
    }

}

function cancelTask() {
    this.style.textDecoration = "line-through";
}

function removeTask() {
    this.remove();
    counter--;
    console.log(counter);
    if (counter < 5) {
        listStore.style.display = "flex";
        listStore.style.flexDirection = "column";
    } else if (counter >= 5 && counter < 10) {
        submitBtn.disabled = false;
        listStore.style.display = "grid";
        listStore.style.gridTemplateColumns = "repeat(2,1fr)";
    } else if (counter == 10) {
        submitBtn.disabled = true;
        console.log("You add max count tasks");
    }
}

function clearInputValue(input) {
    input.value = '';
}
