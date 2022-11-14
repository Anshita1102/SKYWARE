$(function(){
    $('.testimonials__section_content_mob').slick({
            autoplay: false,
            responsive:[
              {
                breakpoint: 504,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            ]
  }); 
});