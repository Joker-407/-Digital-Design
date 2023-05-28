function addDates () {
    let allDates = document.querySelectorAll(".add-date");
    allDates.forEach(date =>{
        let dateTransform = date.innerHTML.split(".");
        dateTransform = new Date (dateTransform[1] + "." + dateTransform[0] + "." + dateTransform[2]);
        let days =["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        let onejan = new Date(dateTransform.getFullYear(), dateTransform.getMonth(), 1);
        let millisecsInDay = 86400000;
        let weeknum =  Math.ceil((((dateTransform - onejan) / millisecsInDay) + onejan.getDay() + 1) / 7);
        let months =["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        date.innerHTML = days[dateTransform.getDay()] +", " + weeknum + " неделя " + months[dateTransform.getMonth()] + " " + dateTransform.getFullYear() + " года";
    })
}
addDates();