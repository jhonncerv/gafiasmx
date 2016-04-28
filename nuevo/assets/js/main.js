$(document).ready(function() {
	$('.jscroll, .jsProd').jScrollPane();
	$('#fullpage').fullpage({
		sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent'],
		anchors: ['inicio','nosotros', 'productos', 'contacto'],
		menu: '#menu',
		scrollOverflow: true,
		//'verticalCentered': false,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['Home', 'Nosotros', 'Productos', 'Contacto'],
		scrollingSpeed: 1000,

		'afterLoad': function(anchorLink, index){
			if(index == 1){
				$('#menu').addClass('active');
			} else {
				$('#menu').removeClass('active');
			}
		},

		'onLeave': function(index, nextIndex, direction){
			if(index == 1){
				$('#menu').removeClass('active');
			}
			if (nextIndex == 1) {
				$('#menu').addClass('active');
			}
			if(index == 1 && direction == 'down'){
				$('#section1 .iIzq').addClass('active');
				$('#section1 .iDer').addClass('active');
			} else {
				$('#section1 .iIzq').removeClass('active');
				$('#section1 .iDer').removeClass('active');
			}
			if(index == 2 && direction == 'down'){
				$('#section2 .iIzq').addClass('active');
				$('#section2 .iDer').addClass('active');
				//$grid.shuffle('update');
			} else if(index == 4 && direction == 'up'){
				$('#section2 .iIzq').addClass('active');
				$('#section2 .iDer').addClass('active');
				//$grid.shuffle('update');
			} else {
				$('#section2 .iIzq').removeClass('active');
				$('#section2 .iDer').removeClass('active');
			}
			if(index == 3 && direction == 'down'){
				$('#section3 .iIzq').addClass('active');
				$('#section3 .iCen').addClass('active');
				$('#section3 .iDer').addClass('active');
			}
			else if(index == 3 && direction == 'up'){
				$('#section1 .iIzq').addClass('active');
				$('#section1 .iDer').addClass('active');
			} else {
				$('#section3 .iIzq').removeClass('active');
				$('#section3 .iCen').removeClass('active');
				$('#section3 .iDer').removeClass('active');
			}
			if (index == 3 && direction == 'down'){
				$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
			}

			$('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
			$('#staticImg').toggleClass('moveDown', nextIndex == 4);
			$('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
		}
	});
	var $grid = $('#grid');
	 /* $grid.shuffle({
		itemSelector: '.picture-item'
	});*/
	$grid.find('a').addClass('is-loading');
	$grid.imagesLoaded().progress( onProgress );

	function onProgress( imgLoad, image ) {
		var $item = $( image.img ).parent();
		$item.removeClass('is-loading');
		if ( !image.isLoaded ) {
			$item.addClass('is-broken');
		}
	}


});