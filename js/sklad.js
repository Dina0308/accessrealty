window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.submenu__item'),
    hamburger = document.querySelector('.hamburger');

    
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });
  
    // menuItem.forEach(item => {
    //     item.addEventListener('click', () => {
    //         hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('menu_active');
            
    //     });
    // });
  });
  
  

  //show submenu
  $('.menu__item').each(function(i) {
    $(this).mouseenter(function(e) {
        $('.submenu').eq(i).addClass('submenu_active');
        });
    $(this).mouseleave(function(e) {
      $('.submenu').eq(i).removeClass('submenu_active');
      });
    });

    $('.submenu').each(function(i) {
      $(this).mouseenter(function(e) {
          $('.submenu').eq(i).addClass('submenu_active');
          });
      $(this).mouseleave(function(e) {
        $('.submenu').eq(i).removeClass('submenu_active');
        });
      });

      //меню моб.версия
  $('.menu__item').each(function(i) {
    $(this).on('click', function(e) {
        $('.submenu').eq(i).toggleClass('submenu_active');
        
        });
    });




//modal  consult
$('#consult').on('click', function(e){
  e.preventDefault();
  $('.overlay, #consultation').fadeIn();
});
$('.modal__close, .overlay').on('click', function(){
  $('.overlay, #consultation').fadeOut();
});

///modal contacts 
$('#cont').on('click', function(e){
  e.preventDefault();
  $('.overlay, #contacts').fadeIn();
});
$('.modal__close, .overlay').on('click', function(){
  $('.overlay, #contacts, #thanks').fadeOut();
});

//textarea auto resize
let textarea = document.querySelector('textarea');

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});



//mailer 
$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "../mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #contacts').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
  });
  return false;
});


//torg tabs
$(function() {
  
  $('ul.torg__tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.torg__tabs').find('div.torg__tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });
  
});

//torg modal slider

  $('.torg__modal__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><</button>',
    nextArrow: '<button type="button" class="slick-next">></button>',
    asNavFor: '.torg__modal__slider-nav'
  });
  $('.torg__modal__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.torg__modal__slider-for',
    dots: false,
    vertical: true,
    centerMode: false,
    arrows: false,
    responsive: [
    
      {
        breakpoint: 767,
        settings: {
          vertical: false,
        }
      },
      
     
    ]  
  });


//modal card
$('.btn__item').each(function(i) {
  $(this).on('click', function(e) {
      $('.torg__modal').eq(i).removeClass('hide');
      
      $('.modal__close').on('click', function(){
      $('.torg__modal').addClass('hide');
      
      });
  });
});





// //torg modal tabs
// $(function() {
  
//   $('ul.torg__modal__tabs__caption').on('click', 'li:not(.active)', function() {
//     $(this)
//       .addClass('active').siblings().removeClass('active')
//       .closest('div.torg__modal__tabs').find('div.torg__modal__tabs__content').removeClass('active').eq($(this).index()).addClass('active');
//   });
  
// });





//popup slider image
$('.torg__modal__slider').each(function(i) {
  $(this).magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    
  }
})
});

  
// цена в валюте в карточке объекта - показ блоков
$('.torg__modal__subtitle_price_dollar, .torg__modal__subtitle_price_euro').hide();
function price(obj) {
  if(obj.value == 'dollar') {
    $('.torg__modal__subtitle_price_rub').hide();
    $('.torg__modal__subtitle_price_euro').hide();
    $('.torg__modal__subtitle_price_dollar').show();
    $('.modal__close').on('click', function(){
      $('.torg__modal__subtitle_price_rub').show();
      $('.torg__modal__subtitle_price_dollar').hide();
      $('.torg__modal__subtitle_price_euro').hide();
      $('#rate__select').prop('selectedIndex',0);
    });
  }
  if(obj.value == 'euro') {
    $('.torg__modal__subtitle_price_rub').hide();
    $('.torg__modal__subtitle_price_dollar').hide();
    $('.torg__modal__subtitle_price_euro').show();
    $('.modal__close').on('click', function(){
      $('.torg__modal__subtitle_price_rub').show();
      $('.torg__modal__subtitle_price_dollar').hide();
      $('.torg__modal__subtitle_price_euro').hide();
      $('#rate__select').prop('selectedIndex',0);
    });
  }
  if(obj.value == 'rub') {
    
    $('.torg__modal__subtitle_price_dollar').hide();
    $('.torg__modal__subtitle_price_euro').hide();
    $('.torg__modal__subtitle_price_rub').show();
    $('.modal__close').on('click', function(){
      $('.torg__modal__subtitle_price_rub').show();
      $('.torg__modal__subtitle_price_dollar').hide();
      $('.torg__modal__subtitle_price_euro').hide();
      $('#rate__select').prop('selectedIndex',0);
    });
  }
}










