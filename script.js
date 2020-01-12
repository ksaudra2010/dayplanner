var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(currentDay)

var currentHour = new Date().getHours()
console.log(currentHour);
$('.description').each(function(){
    var time = $(this).data('time');
    if (currentHour>time) {
        $(this).addClass('past')
    } else if (currentHour<time) {
        $(this).addClass('future')
    }
    else if (currentHour==time) {
        $(this).addClass('present')
    }
    var savedDescription = localStorage.getItem(time)
    if (savedDescription){
        $(this).val(savedDescription)
    }
    setInterval(function(){ refresh; }, 1000);
})
$('.saveBtn').on('click', function() {
    var description = $(this).parent().parent().find('.description')
    var time = description.data('time');
    localStorage.setItem(time,description.val())
})