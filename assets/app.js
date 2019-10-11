$(function(){

$('.slider').slick({
    autoplay: true, //自動再生
    arrows: true,
    dots: true,
    });

    $('.food').slick({
        autoplay: true, //自動再生
        arrows: true,
        dots: true,
        slidesToShow: 3,
        slidesToScrooll: 3,
        });

        $('.drink').slick({
            autoplay: true, //自動再生
            arrows: true,
            dots: true,
            slidesToShow: 3,
            slidesToScrooll: 3,
            });

            $('.crafts').slick({
                autoplay: true, //自動再生
                arrows: true,
                dots: true,
                slidesToShow: 3,
                slidesToScrooll: 3,
                });
});


$(function(){
    $('#humberger').on('click',function(){
        $('.humberger,#close').fadeToggle(1000);
    });
})


