var currentDay = moment().format('MMMM Do YYYY, h:mm a');
$('#currentDay').text(currentDay)
setInterval(function () { refresh; }, 1000);
// Setting up the function for what time of day it is
var currentHour = new Date().getHours()
console.log(currentHour);
$('.description').each(function () {
    var time = $(this).data('time');
    if (currentHour > time) {
        $(this).addClass('past')
    } else if (currentHour < time) {
        $(this).addClass('future')
    }
    else if (currentHour == time) {
        $(this).addClass('present')
    }
    var savedDescription = localStorage.getItem(time)
    if (savedDescription) {
        $(this).val(savedDescription)
    }
})

$('.saveBtn').on('click', function () {
    var description = $(this).parent().parent().find('.description')
    var time = description.data('time');
    localStorage.setItem(time, description.val())
})
