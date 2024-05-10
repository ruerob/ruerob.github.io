let intro = $('.intro');
let games = $('.games');
let stories = $('.stories');
let music = $('.music');
let pixel = $('.pixel');
let footer = $('.footer');

let header = $('.header');
let sections = [intro, games, stories, music, pixel, footer];
let contentShadow = $('.content-shadow');
let lazyLoadedImages = $('.lazy-loading');



// ### Events ###
$(window).scroll(function(){

  let scrollTop = $(window).scrollTop();

  scrollWithParallax();
  setHeaderSize(scrollTop);
  lazyLoadFiles(scrollTop);

});

$(window).on('resize', function (){
  calcContentShadowWidth();
  lazyLoadFiles(scrollTop);
});



// ### Functions ###
function scrollWithParallax(){
  let scroll = $(window).scrollTop();

  for(let section of sections){
    section.css('background-position', '0 -' + (scroll / 4) + 'px');
  }
}

function calcContentShadowWidth(){
  contentShadow.css('min-width', contentShadow.parent('.container').outerWidth());
}

function setHeaderSize(scrollTop){

  if(scrollTop>75){
    header.addClass('scrolled');
    header.removeClass('pt-3');
  }else if(scrollTop<50){
    header.removeClass('scrolled');
    header.addClass('pt-3');
  }
}

function lazyLoadFiles(scrollTop){
  for(let image of lazyLoadedImages){
    image = $(image);
    if(!image.hasClass('loaded') && image.offset().top < (scrollTop + $(window).height() + 100)){
      image.addClass('loaded');
      image.attr('src', image.data('src'));
    }
  }
}



// ### Start functions after initialization ###
scrollWithParallax();
calcContentShadowWidth();
lazyLoadFiles(0);
