$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['transparent', 'transparent', 'transparent', 'transparent'],
		anchors: ['inicio','nosotros', 'productos', 'contacto'],
		menu: '#menu',
		//'verticalCentered': false,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',
		'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],
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
			if(index == 1){
				$('#section1 .iIzq').addClass('active');
				$('#section1 .iDer').addClass('active');
			} else {
				$('#section1 .iIzq').removeClass('active');
				$('#section1 .iDer').removeClass('active');
			}
			if(index == 2){
				$('#section2 .iIzq').addClass('active');
				$('#section2 .iDer').addClass('active');
			} else {
				$('#section2 .iIzq').removeClass('active');
				$('#section2 .iDer').removeClass('active');
			}
			if(index == 3){
				$('#section3 .iIzq').addClass('active');
				$('#section3 .iCen').addClass('active');
				$('#section3 .iDer').addClass('active');
			} else {
				$('#section3 .iIzq').removeClass('active');
				$('#section3 .iCen').removeClass('active');
				$('#section3 .iDer').removeClass('active');
			}
			if (index == 3 && direction == 'down'){
				$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
			}
			else if(index == 3 && direction == 'up'){
				$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
			}

			$('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
			$('#staticImg').toggleClass('moveDown', nextIndex == 4);
			$('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
		}
	});

});