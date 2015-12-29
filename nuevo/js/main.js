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
				$('#iphone3, #iphone2, #iphone4').addClass('active');
			}
		},

		'onLeave': function(index, nextIndex, direction){
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