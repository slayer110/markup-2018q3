

$(document).scroll(function () {

    if($(this).scrollTop() >= 856){

        $('.navbar').css('background-color', '#2a2a2a')
    }else {
        $('.navbar').css('background-color', '')
    }
});



