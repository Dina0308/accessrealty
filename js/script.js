window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.submenu__item'),
  hamburger = document.querySelector('.hamburger');
  

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
  });

  $('.menu__link').click(function(event){
    event.preventDefault();
  });

  // menuItem.forEach(item => {
  //     item.addEventListener('click', () => {
  //         hamburger.classList.toggle('hamburger_active');
  //         menu.classList.toggle('menu_active');
          
  //     });
  // });
});

// $('.submenu__item').on('click', function(){
//   $('.submenu').fadeOut();
// });
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


//slider1
$('.promo__slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  
});

$('.next').each(function(i) {
  $(this).on('click', function(e) {
    $('.promo__slider').eq(i).slick('slickNext');
  });
});
$('.prev').each(function(i) {
  $(this).on('click', function(e) {
    $('.promo__slider').eq(i).slick('slickPrev');
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

//modal contacts 
$('#cont').on('click', function(e){
  e.preventDefault();
  $('.overlay, #contacts').fadeIn();
});
$('.modal__close, .overlay').on('click', function(){
  $('.overlay, #contacts, #thanks').fadeOut();
});

//slider3 rew

$('.rew__slider').slick({
  centerMode: true,
  centerPadding: '280px',
  slidesToShow: 1,
  prevArrow: '<button type="button" class="slick-prev">&lt;</button>',
  nextArrow: '<button type="button" class="slick-next">&gt;</button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        
        centerMode: true,
        centerPadding: '180px',
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 525,
      settings: {
        
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

//инпут для названия сервиса (скрытый)
let servname = $('.serv__title').text();
$('#service').val(servname);









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



//footer menu media
$('.footer__text').each(function(i) {
  $(this).on('click', function(e) {
      $('.footer__menu').eq(i).toggleClass('footer__menu_active');
      
      });
  });

//company vac modal
$('.vac__item__arrow').each(function(i) {
  $(this).on('click', function(e) {
    $('.vac__overlay').fadeIn();
      $('.vac__modal').eq(i).fadeIn();
      $('.modal__close, .submenu, .vac__overlay').on('click', function() {
        $('.vac__modal').fadeOut();
      });
      });
  });

//company article modal
$('.artic__link').each(function(i) {
  $(this).on('click', function(e) {
    $('.vac__overlay').fadeIn();
      $('.artic__modal').eq(i).fadeIn();
      $('.modal__close, .submenu, .vac__overlay').on('click', function() {
        $('.artic__modal').fadeOut();
      });
      });
  });



  //calc
  window.addEventListener('DOMContentLoaded', function () {

    let btn1 = document.querySelector('.btn1');
    let btn2 = document.querySelector('.btn2');

    btn1.addEventListener('click', function() {
    let metr = document.getElementById("metr").value,
        price = document.getElementById("price").value,
        priceMetr = (price / metr).toFixed(2),   //расчет стоимости за метр кв в основной таблице
        index = document.getElementById('index').value,
        komm = document.getElementById('komm').value,
        opex = document.getElementById('opex').value,
        tax = document.getElementById('nalog').value,
        tax2 = document.getElementById('nalog2').value,
        map = document.getElementById('map').value,
        year = 1, //переменная для номера года Грязный расчет
        year2 = 1, //переменная для номера года Чистный расчет
        gap = map*12,
        gap1 = gap, // переменная для нарастающего итога в годах (грязный расчет)
        profit2 = (gap - gap*tax2/100 - tax).toFixed(0) - komm - opex, //объявляем чистый доход для НАШЕГО расчета; 
        price2 = Number(price) + Number(gap); //переменная для остановки расчета чистой окупаемости в годах
       
        document.getElementById("price__metr").innerHTML = priceMetr; //вписываем цену за метр в верхнюю расч табл
        
        document.getElementById("gap").innerHTML = gap; //вписываем гап в верхнюю расчетну таблицу
        
    
    let profit = (gap*100/price).toFixed(2);  //расчет грязной доходности в % в верхней таблице
        document.getElementById("profit").innerHTML = profit;
   
      
        //грязный расчет окупаемости
    function createTable1(){
        let table1 = document.createElement('div'),   //создаем элемент таблица
            table1Head = document.createElement('h2'),
            table1Year = document.createElement('div'),
            table1Gap = document.createElement('div'),
            table1Map = document.createElement('div'),
            table1Profit = document.createElement('div'),
            tableWrapper = document.querySelector('.table__wrapper');

        table1.classList.add('table1');   //добавляем классы к элементам таблицы
        table1Head.classList.add('table1__head');
        table1Year.classList.add('table1__year');
        table1Gap.classList.add('table1__gap');
        table1Map.classList.add('table1__map');
        table1Profit.classList.add('table1__profit');
        

        table1Head.textContent = 'Как рассчитывают обычно'; //заполняем шапку таблицы
        table1Year.textContent = 'Год';
        table1Gap.textContent = 'ГАП';
        table1Map.textContent = 'MАП';
        table1Profit.textContent = 'Доход в годах';

        tableWrapper.appendChild(table1);  //вкладываем элементы в таблицу
        table1.appendChild(table1Head);
        table1.appendChild(table1Year);
        table1.appendChild(table1Gap);
        table1.appendChild(table1Map);
        table1.appendChild(table1Profit);

//цикл для формирования строк таблицы
        for (let i = 0; i < 10; i++) {  
            let table1Years = document.createElement('div'),
                table1Gaps = document.createElement('div'),
                table1Maps = document.createElement('div'),
                table1Profits = document.createElement('div');
                

            table1Years.classList.add('table1__years');
            table1Gaps.classList.add('table1__gaps');
            table1Maps.classList.add('table1__maps');
            table1Profits.classList.add('table1__profits');

            table1Years.innerHTML = year;
            table1Gaps.innerHTML = gap;
            table1Maps.innerHTML = map;
            table1Profits.textContent = gap1;
            gap1 = gap1 + map*12;  //нарастающий итог для суммы дохода в годах
            year = year + 1; //нарастающий номер года для Грязного расчета
            

            table1.appendChild(table1Years);
            table1.appendChild(table1Gaps);
            table1.appendChild(table1Maps);
            table1.appendChild(table1Profits);
        }


    }

    createTable1();
    
    //чистый расчет окупаемости

    function createTable2(){  //создаем таблицу и элементы
        let table2 = document.createElement('div'),
            table2Head = document.createElement('h2'),
            table2Year = document.createElement('div'),
            table2Gap = document.createElement('div'),
            table2Map = document.createElement('div'),
            table2Nalog = document.createElement('div'),
            table2Profit = document.createElement('div'),
            tableWrapper = document.querySelector('.table__wrapper');

        table2.classList.add('table2');  //добавляем классы элементам
        table2Head.classList.add('table2__head');
        table2Year.classList.add('table2__year');
        table2Gap.classList.add('table2__gap');
        table2Map.classList.add('table2__map');
        table2Nalog.classList.add('table2__nalog');
        table2Profit.classList.add('table2__profit');

        table2Head.textContent = 'Как рассчитываем мы';  //заполняем шапку талицы
        table2Year.textContent = 'Год';
        table2Gap.textContent = 'проиндекс ГАП';
        table2Map.textContent = 'проиндекс MАП';
        table2Nalog.textContent = 'ПГАП -Налог Юр.лица-Налог на Землю';
        table2Profit.textContent = 'ЧИСТЫЙ ДОХОД В ГОДАХ';

        tableWrapper.appendChild(table2);  //формируем вложенность элементов
        table2.appendChild(table2Head);
        table2.appendChild(table2Year);
        table2.appendChild(table2Gap);
        table2.appendChild(table2Map);
        table2.appendChild(table2Nalog);
        table2.appendChild(table2Profit);

        for (let i = 0; i < 20; i++) {  //цикл для строчек таблицы
            if (profit2 <= price2) {
                let table2Years = document.createElement('div'),
                table2Gaps = document.createElement('div'),
                table2Maps = document.createElement('div'),
                table2Nalog = document.createElement('div'),
                table2Profits = document.createElement('div');
                

            table2Years.classList.add('table2__years');
            table2Gaps.classList.add('table2__gaps');
            table2Maps.classList.add('table2__maps');
            table2Nalog.classList.add('table2__nalogs');
            table2Profits.classList.add('table2__profits');

            table2Years.innerHTML = year2;
            table2Gaps.innerHTML = gap.toFixed(0);
            table2Maps.innerHTML = map;
            table2Nalog.textContent = (gap - gap*tax2/100 - tax).toFixed(0); //высчитываем пгап-налоги, округляем
            table2Profits.textContent = profit2;
            gap = gap + gap*index/100; //индексируем гап
            map = (gap/12).toFixed(0); //индексируем мап, округляем
            profit2 = profit2 + gap - gap*tax2/100 - tax; //нарастающий итог для последнего столбца
            profit2 = +profit2.toFixed(0);
            year2 = year2 + 1; //нарастающий итог для номера года
            

            table2.appendChild(table2Years);
            table2.appendChild(table2Gaps);
            table2.appendChild(table2Maps);
            table2.appendChild(table2Nalog);
            table2.appendChild(table2Profits);
            }
            
        }



    }

    createTable2();
    //считаем реальную окупаемость в годах для верхней таблицы
    let okup = document.querySelectorAll('.table2__profits'), //считаем строчки для реальной окупаемости в годах
        okup2 = okup.length; //записываем количество в переменную
        document.getElementById('payback').innerHTML = okup2;
    
    //считаем реальную доходность инвестиций для верхней таблицы
    let dohod = (profit2 - gap + gap*tax2/100 + tax)/okup2, //откатываем назад на одну строчку, (из-за условия)
        dohod2 = (dohod/price*100).toFixed(2);

    document.getElementById('profit2').innerHTML = dohod2;
    btn1.classList.add('remove');
    btn2.classList.remove('remove');
    });
    
    //second button
    btn2.addEventListener('click', function() {
        document.querySelector('.table1').remove();
        document.querySelector('.table2').remove();
        let metr = document.getElementById("metr").value,
            price = document.getElementById("price").value,
            priceMetr = (price / metr).toFixed(2),   //расчет стоимости за метр кв в основной таблице
            index = document.getElementById('index').value,
            komm = document.getElementById('komm').value,
            opex = document.getElementById('opex').value,
            tax = document.getElementById('nalog').value,
            tax2 = document.getElementById('nalog2').value,
            map = document.getElementById('map').value,
            year = 1, //переменная для номера года Грязный расчет
            year2 = 1, //переменная для номера года Чистный расчет
            gap = map*12,
            gap1 = gap, // переменная для нарастающего итога в годах (грязный расчет)
            profit2 = (gap - gap*tax2/100 - tax).toFixed(0) - komm - opex, //объявляем чистый доход для НАШЕГО расчета; 
            price2 = Number(price) + Number(gap); //переменная для остановки расчета чистой окупаемости в годах
    
            document.getElementById("price__metr").innerHTML = priceMetr; //вписываем цену за метр в верхнюю расч табл
            
            document.getElementById("gap").innerHTML = gap; //вписываем гап в верхнюю расчетну таблицу
            
        
        let profit = (gap*100/price).toFixed(2);  //расчет грязной доходности в % в верхней таблице
            document.getElementById("profit").innerHTML = profit;
       
          
            //грязный расчет окупаемости
        function createTable1(){
            let table1 = document.createElement('div'),   //создаем элемент таблица
                table1Head = document.createElement('h2'),
                table1Year = document.createElement('div'),
                table1Gap = document.createElement('div'),
                table1Map = document.createElement('div'),
                table1Profit = document.createElement('div'),
                tableWrapper = document.querySelector('.table__wrapper');
    
            table1.classList.add('table1');   //добавляем классы к элементам таблицы
            table1Head.classList.add('table1__head');
            table1Year.classList.add('table1__year');
            table1Gap.classList.add('table1__gap');
            table1Map.classList.add('table1__map');
            table1Profit.classList.add('table1__profit');
    
            table1Head.textContent = 'Как рассчитывают обычно'; //заполняем шапку таблицы
            table1Year.textContent = 'Год';
            table1Gap.textContent = 'ГАП';
            table1Map.textContent = 'MАП';
            table1Profit.textContent = 'Доход в годах';
    
            tableWrapper.appendChild(table1);  //вкладываем элементы в таблицу
            table1.appendChild(table1Head);
            table1.appendChild(table1Year);
            table1.appendChild(table1Gap);
            table1.appendChild(table1Map);
            table1.appendChild(table1Profit);
    
    //цикл для формирования строк таблицы
            for (let i = 0; i < 10; i++) {  
                let table1Years = document.createElement('div'),
                    table1Gaps = document.createElement('div'),
                    table1Maps = document.createElement('div'),
                    table1Profits = document.createElement('div');
                    
    
                table1Years.classList.add('table1__years');
                table1Gaps.classList.add('table1__gaps');
                table1Maps.classList.add('table1__maps');
                table1Profits.classList.add('table1__profits');
    
                table1Years.innerHTML = year;
                table1Gaps.innerHTML = gap;
                table1Maps.innerHTML = map;
                table1Profits.textContent = gap1;
                gap1 = gap1 + map*12;  //нарастающий итог для суммы дохода в годах
                year = year + 1; //нарастающий номер года для Грязного расчета
                
    
                table1.appendChild(table1Years);
                table1.appendChild(table1Gaps);
                table1.appendChild(table1Maps);
                table1.appendChild(table1Profits);
            }
    
    
        }
    
        createTable1();
        
        //чистый расчет окупаемости
    
        function createTable2(){  //создаем таблицу и элементы
            let table2 = document.createElement('div'),
                table2Head = document.createElement('h2'),
                table2Year = document.createElement('div'),
                table2Gap = document.createElement('div'),
                table2Map = document.createElement('div'),
                table2Nalog = document.createElement('div'),
                table2Profit = document.createElement('div'),
                tableWrapper = document.querySelector('.table__wrapper');
    
            table2.classList.add('table2');  //добавляем классы элементам
            table2Head.classList.add('table2__head');
            table2Year.classList.add('table2__year');
            table2Gap.classList.add('table2__gap');
            table2Map.classList.add('table2__map');
            table2Nalog.classList.add('table2__nalog');
            table2Profit.classList.add('table2__profit');
    
            table2Head.textContent = 'Как рассчитываем мы';  //заполняем шапку талицы
            table2Year.textContent = 'Год';
            table2Gap.textContent = 'проиндекс ГАП';
            table2Map.textContent = 'проиндекс MАП';
            table2Nalog.textContent = 'ПГАП -Налог Юр.лица-Налог на Землю';
            table2Profit.textContent = 'ЧИСТЫЙ ДОХОД В ГОДАХ';
    
            tableWrapper.appendChild(table2);  //формируем вложенность элементов
            table2.appendChild(table2Head);
            table2.appendChild(table2Year);
            table2.appendChild(table2Gap);
            table2.appendChild(table2Map);
            table2.appendChild(table2Nalog);
            table2.appendChild(table2Profit);
    
            for (let i = 0; i < 20; i++) {  //цикл для строчек таблицы
                if (profit2 <= price2) {
                    let table2Years = document.createElement('div'),
                    table2Gaps = document.createElement('div'),
                    table2Maps = document.createElement('div'),
                    table2Nalog = document.createElement('div'),
                    table2Profits = document.createElement('div');
                    
    
                table2Years.classList.add('table2__years');
                table2Gaps.classList.add('table2__gaps');
                table2Maps.classList.add('table2__maps');
                table2Nalog.classList.add('table2__nalogs');
                table2Profits.classList.add('table2__profits');
    
                table2Years.innerHTML = year2;
                table2Gaps.innerHTML = gap.toFixed(0);
                table2Maps.innerHTML = map;
                table2Nalog.textContent = (gap - gap*tax2/100 - tax).toFixed(0); //высчитываем пгап-налоги, округляем
                table2Profits.textContent = profit2;
                gap = gap + gap*index/100; //индексируем гап
                map = (gap/12).toFixed(0); //индексируем мап, округляем
                profit2 = profit2 + gap - gap*tax2/100 - tax; //нарастающий итог для последнего столбца
                profit2 = +profit2.toFixed(0);
                year2 = year2 + 1; //нарастающий итог для номера года
                
    
                table2.appendChild(table2Years);
                table2.appendChild(table2Gaps);
                table2.appendChild(table2Maps);
                table2.appendChild(table2Nalog);
                table2.appendChild(table2Profits);
                }
                
            }
    
    
    
        }
    
        createTable2();
        //считаем реальную окупаемость в годах для верхней таблицы
        let okup = document.querySelectorAll('.table2__profits'), //считаем строчки для реальной окупаемости в годах
            okup2 = okup.length; //записываем количество в переменную
            document.getElementById('payback').innerHTML = okup2;
        
        //считаем реальную доходность инвестиций для верхней таблицы
        let dohod = (profit2 - gap + gap*tax2/100 + tax)/okup2, //откатываем назад на одну строчку, (из-за условия)
            dohod2 = (dohod/price*100).toFixed(2);
    
        document.getElementById('profit2').innerHTML = dohod2;
        btn1.classList.add('remove');
        btn2.classList.remove('remove');
        });
    


    
});
//auto resize textarea
let textarea = document.querySelector('textarea');
let textareaServ = document.querySelector('#textarea');

textarea.addEventListener('keyup', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});
textareaServ.addEventListener('keypress', function(){
  if(this.scrollTop > 0){
    this.style.height = this.scrollHeight + "px";
  }
});







