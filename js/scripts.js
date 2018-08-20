$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        } 
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        };

    });
    //Login Controls
    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
    });
    $('#loginCloseButton').click(function(){
        $('#loginModal').modal('hide');
    });
    $('#loginCancelButton').click(function(){
        $('#loginModal').modal('hide');
    });

    //Reserve controls
    $('#reserveCloseButton').click(function(){
        $('#reserveModal').modal('hide');
    });
    $('#reserveButton').click(function(){
        $('#reserveModal').modal('show');
    });
    $('#reserveCancelButton').click(function(){
        $('#reserveModal').modal('hide');
    });
});