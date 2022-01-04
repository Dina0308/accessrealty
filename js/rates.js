function CBR_XML_Daily_Ru(rates) {
          
            
    var USDrate = rates.Valute.USD.Value.toFixed(2);
    var USD = document.getElementById('USD');
    USD.innerHTML = USD.innerHTML.replace('00,0000', USDrate);
    
    var EURrate = rates.Valute.EUR.Value.toFixed(2);
    var EUR = document.getElementById('EUR');
    EUR.innerHTML = EUR.innerHTML.replace('00,0000', EURrate);

    let dollar = USD.innerHTML,
        euro = EUR.innerHTML,
        rub = document.querySelectorAll('.torg__modal__subtitle_price_rub'), //собираем данные о цене в рублях
        priceRub = [], //массив для цены в рублях
        priceDollar = [], //массив для цены в долларах
        priceEuro = []; //массив для цены в евро
//цикл для расчета цен 
    for (let i = 0; i < rub.length; i++) {
        priceRub[i] = + rub[i].innerHTML; //переводим значение в цифру
        priceDollar[i] = (priceRub[i]/dollar).toFixed(2);
        priceEuro[i] = (priceRub[i]/euro).toFixed(2);

        
    }
    $( '.torg__modal__subtitle_price_dollar' ).each( function ( i ) {
        $( this ).text( priceDollar[i] );
    });
    $( '.torg__modal__subtitle_price_euro' ).each( function ( i ) {
        $( this ).text( priceEuro[i] );
    }); 
    
    
  }
  