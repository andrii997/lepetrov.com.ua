$(document).ready(function() {

	$("#tabs-content > div").hide(); // Скрываем содержание
		$("#tabs li:first").attr("id","current"); // Активируем первую закладку
		$("#tabs-content > div:first").fadeIn(); // Выводим содержание
	    
	    $('#tabs a').click(function(e) {
	        e.preventDefault();        
	        $("#tabs-content > div").hide(); //Скрыть все сожержание
	        $("#tabs li").attr("id",""); //Сброс ID
	        $(this).parent().attr("id","current"); // Активируем закладку
	        $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
	    });


	/*Header menu*/

	$("header .menu img").click(function(e){
		e.preventDefault();
		$("#mobile-menu").toggleClass("show");
	});

	$(".add-favorites i").click(function(e){
		e.preventDefault();
		$(this).toggleClass("fas");
		$(this).css('color', '#FFDF38');
	});


	$(document).on('click','.milk-shadow',function(){
		$("header .menu img").click();
	});
	$(document).on('click','#mobile-menu .head_bottom .profile a',function(){
		$("header .menu img").click();
	});

	$('.banner').slick({
	  dots: false,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  prevArrow: "<div class='prev'><img src='img/icons/slider-left.svg' alt='1'></div>",
	  nextArrow: "<div class='next'><img src='img/icons/slider-right.svg' alt='2'></div>",
	  
	});

	$('.reviews-slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 250,
	  draggable: true,
	  cssEase: 'linear',
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  prevArrow: $('.review-prev'),
	  nextArrow: $('.review-next'),
	  autoplaySpeed: 4000,
	  responsive: [
	      {
	        breakpoint: 1200,
	        settings: {
	          slidesToShow: 3,
	          slidesToScroll: 1,
	          infinite: true,
	          dots: true
	        }
	      },
	      {
	        breakpoint: 600,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 2
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      }
	    ]
	});

	$('.open-popup').magnificPopup({
		type: 'inline',
		preloader: false
	});
	

	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  draggable: true,
	  prevArrow: $('.product-prev'),
	  nextArrow: $('.product-next'),
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: false
	});

	$('.add-cart').click(function(){
	  if (!$(this).data('status')) {
	    $(this).toggleClass('added');
	    $(this).html('<img src="img/icons/added.svg" alt=""> Добавлено');
	    $(this).data('status', true);
	  }
	  else {
	    $(this).removeClass('added');
	    $(this).html('<img src="img/icons/add-cart.svg" alt=""> В корзину');
	    $(this).data('status', false);
	  }
	});

});

function catalogItemCounter(field){
			
			var fieldCount = function(el) {

				var 
					// Мин. значение
					min = el.data('min') || false,

					// Макс. значение
					max = el.data('max') || false, 

					// Кнопка уменьшения кол-ва
					dec = el.prev('.dec'), 

					// Кнопка увеличения кол-ва
					inc = el.next('.inc');

				function init(el) {
					if(!el.attr('disabled')){
						dec.on('click', decrement);
						inc.on('click', increment);
					}

					// Уменьшим значение
					function decrement() {
						var value = parseInt(el[0].value);
						value--;

						if(!min || value >= min) {
							el[0].value = value;
						}
					};

					// Увеличим значение
					function increment() {
						var value = parseInt(el[0].value);
							
						value++;

						if(!max || value <= max) {
							el[0].value = value++;
						}
					};
					
				}

				el.each(function() {
					init($(this));
				});
			};

			$(field).each(function(){
				fieldCount($(this));
			});
		}
    
catalogItemCounter('.fieldCount');



$(function() {
	$('select').styler();
});






var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

$('#the-basics .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});