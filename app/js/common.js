$(function() {
$('.owl-action').on('refreshed.owl.carousel', function(event) {
    console.log('123');
})

	/*$(window).on("load",function(){
		$(".mCustomScrollbarCol").mCustomScrollbar();
	});

	$(window).on("load",function(){
		$(".mCustomScrollbarCol1").mCustomScrollbar();
	});*/


	$('.owl-action').owlCarousel({
		/*loop:true,*/
		nav:true,
		items:1,
		/*autoplay: true,*/
    autoplayTimeout: 5000,
    nav: true,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    dots: false,
		margin: 10
	});

	$('.popup-gallery').magnificPopup({
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
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
$('.mt-30p').css("margin-top", ($(window).height()/2)+100 + "px");
$(window).resize(function(){$('.mt-30p').css("margin-top", ($(window).height()/2)+100 + "px");});

$('.row-faq a').click(function(e) {
	e.preventDefault();
	atinTic = $(this).attr('href');
	if ( atinTic == 'news'){
		$('#news').addClass('activ-action');
		$('.news-item').addClass('activ');
		$('#action').removeClass('activ-action');
		$('.action-item').removeClass('activ');
		$('#rubric').removeClass('activ-action');
		$('.rubric-item').removeClass('activ');
	} else if ( atinTic == 'rubric' ) {
		$('#news').removeClass('activ-action');
		$('.action-item').removeClass('activ');
		$('#action').removeClass('activ-action');
		$('.news-item').removeClass('activ');
		$('#rubric').addClass('activ-action');
		$('.rubric-item').addClass('activ');
	} else {
		$('#news').removeClass('activ-action');
		$('.action-item').addClass('activ');
		$('#action').addClass('activ-action');
		$('.news-item').removeClass('activ');
		$('#rubric').removeClass('activ-action');
		$('.rubric-item').removeClass('activ');
	};
});

$("#menu").mmenu({
		extensions 	: [ "position-bottom", "fullscreen", "theme-white", "listview-50", "fx-panels-slide-up", "fx-listitems-drop", "border-offset" ],
		navbar 		: {title: '<p>Меню</p>'},
		navbars		: [{content : ['<a href="#page" class="logo text-center"><img src="/img/logo.png" class="img-responsive small-logo-menu" alt="Логитип"></a>','close']}, {content : ["prev","title"]} ],
		});

$(".mh-head.mm-sticky").mhead({
	scroll: {hide: 200}
});
$(".mh-head:not(.mm-sticky)").mhead({
	scroll: false
});
$('body').on( 'click',
	'a[href^="#/"]',
	function() {
		alert( "Thank you for clicking, but that's a demo link." );
		return false;
});

$('.bg-column-3 .box-last-column a').click(function(e) {
	e.preventDefault();
	$('.bg-column-1').css({'max-width' : '50px'}).find(".box-last-column").css({'display' : 'block', 'opacity' : '1'});
	$('.bg-column-1').find(".mCustomScrollbarCol").css({'display' : 'none', 'opacity' : '0'});
	$('.bg-column-2').css({'max-width' : '50px'}).find(".box-last-column").css({'display' : 'block', 'opacity' : '1'});
	$('.bg-column-2').find(".mCustomScrollbarCol").css({'display' : 'none', 'opacity' : '0'});
	$('.bg-column-3').css({'max-width' : '100%'}).find(".box-last-column").css({'display' : 'none', 'opacity' : '0'});
	$('.bg-column-3').find(".mCustomScrollbarCol").css({'display' : 'block', 'opacity' : '1'});
});
$('.bg-column-1 .box-last-column a').click(function(e) {
	e.preventDefault();
	$('.bg-column-3').css({'max-width' : '50px'}).find(".box-last-column").css({'display' : 'block', 'opacity' : '1'});
	$('.bg-column-3').find(".mCustomScrollbarCol").css({'display' : 'none', 'opacity' : '0'});
	$('.bg-column-2').css({'max-width' : '50px'}).find(".box-last-column").css({'display' : 'block', 'opacity' : '1'});
	$('.bg-column-2').find(".mCustomScrollbarCol").css({'display' : 'none', 'opacity' : '0'});
	$('.bg-column-1').css({'max-width' : '100%'}).find(".box-last-column").css({'display' : 'none', 'opacity' : '0'});
	$('.bg-column-1').find(".mCustomScrollbarCol").css({'display' : 'block', 'opacity' : '1'});
});
$('.bg-column-2 .box-last-column a').click(function(e) {
	e.preventDefault();
	$('.bg-column-1').css({'max-width' : '50px'}).find(".box-last-column").css({'display' : 'block', 'opacity' : '1'});
	$('.bg-column-1').find(".mCustomScrollbarCol").css({'display' : 'none', 'opacity' : '0'});
	$('.bg-column-3').css({'max-width' : '50px'}).find(".box-last-column").css({'display' : 'block', 'opacity' : '1'});
	$('.bg-column-3').find(".mCustomScrollbarCol").css({'display' : 'none', 'opacity' : '0'});
	$('.bg-column-2').css({'max-width' : '100%'}).find(".box-last-column").css({'display' : 'none', 'opacity' : '0'});
	$('.bg-column-2').find(".mCustomScrollbarCol").css({'display' : 'block', 'opacity' : '1'});
});

function windowSize(){
    if ($(window).width() <= '767'){
        console.log($(window).width());
        console.log($(window).height());
        $('.footer').append( $('.row-footer') );
    } else {
				$(".mCustomScrollbarCol").mCustomScrollbar();
			console.log('Да');console.log($(window).width());
        console.log($(window).height());
				$(".mCustomScrollbarCol1").mCustomScrollbar();
    }
}

$(window).on('load resize',windowSize);

















});