var $svgIcon = $('#section-2');
function resetVelocity() {
	$svgIcon.find('.graphic-icon').css('opacity', 0);
	$svgIcon.find('.big-t').velocity("fadeOut");
	
	$svgIcon.find('.reblog-b').velocity({
		translateX: '13%',
		translateY: '50%'
	});
	$svgIcon.find('.reblog-a').velocity({
		translateX: '-34%',
		translateY: '-50%'
	});
	$svgIcon.find('.video-b').velocity({
		translateX: '-38%',
		translateY: '-42%'
	});
	$svgIcon.find('.video-a').velocity({
		translateX: '36%',
		translateY: '-56%'
	});
	$svgIcon.find('.text-a').velocity({
		translateX: '56%',
		translateY: '-10%'
	});
	$svgIcon.find('.photo-b').velocity({
		translateX: '-68%',
		translateY: '-16%'
	});
	$svgIcon.find('.photo-a').velocity({
		translateX: '22%',
		translateY: '68%'
	});
	$svgIcon.find('.quote-b').velocity({
		translateX: '-60%',
		translateY: '14%'
	});
	$svgIcon.find('.quote-a').velocity({
		translateX: '62%',
		translateY: '10%'
	});
	$svgIcon.find('.quote-a').velocity({
		translateX: '62%',
		translateY: '10%'
	});
	$svgIcon.find('.quote-a').velocity({
		translateX: '62%',
		translateY: '10%'
	});
	$svgIcon.find('.link-b').velocity({
		translateX: '-28%',
		translateY: '4%'
	});
	$svgIcon.find('.link-a').velocity({
		translateX: '30%',
		translateY: '-50%'
	});
	$svgIcon.find('.chat-c').velocity({
		translateX: '-45%',
		translateY: '38%'
	});
	$svgIcon.find('.chat-b').velocity({
		translateX: '-30%',
		translateY: '4%'
	});
	$svgIcon.find('.chat-a').velocity({
		translateX: '32%',
		translateY: '-8%'
	});
	$svgIcon.find('.audio-b').velocity({
		translateX: '-16%',
		translateY: '-32%'
	});
	$svgIcon.find('.audio-a').velocity({
		translateX: '38%',
		translateY: '34%'
	});

	$svgIcon.find('.like-c').velocity({
		translateX: '-22%',
		translateY: '24%'
	});
	$svgIcon.find('.like-b').velocity({
		translateX: '-30%',
		translateY: '10%'
	});
	$svgIcon.find('.like-a').velocity({
		translateX: '10%',
		translateY: '-30%'
	});
	$svgIcon.find('.follow-c').velocity({
		translateX: '-24%',
		translateY: '18%'
	});
	$svgIcon.find('.follow-b').velocity({
		translateX: '40%',
		translateY: '6%'
	});
	$svgIcon.find('.follow-a').velocity({
		translateX: '42%',
		translateY: '-20%'
	});
	
}
function animate() {
	$svgIcon.find('.big-t').velocity("fadeIn", { duration: 1000 });
	
	$svgIcon.find('.graphic-icon').velocity({
		/* Coordinate animation works. */
		/* 2D transforms work. */
		translateX: "0",
		translateY: "0",
		/* "Fill" color animation works. */
		/* Some standard CSS properties work. */
		opacity: 1
	},{ duration: 1000});
}

function isMobile() {
	return $(window).width() <= 1024;
}
$(document).ready(function() {
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();
	
	if(isMobile()) {
		console.log('hello mobile');
		
		$('body').on('mousewheel', function(e) {
				e.preventDefault();
				e.stopPropagation();
			}
		);
		$('#right').css({'left' :  screenWidth - 200});
		
		if($(window).width() < 600) {
			//console.log('wtf');
			$('#search').css({'width': screenWidth/2, 'left' : '10px'});
			$('#right').css({'left' :  screenWidth/2 + 20});
			$('.blogs-post-column').css({'width': screenWidth/2.5});
			
			if($(window).width() <= 320) {
				//$('.about').css('margin-top', '60px');
				//$('.about-graphic').css('height', '300px');
			}
		}
		
		
	}
	
	$(window).resize(function() {
		console.log($(window).width());

		if(isMobile()) {
			console.log('hello mobile');
		}
	});
	
	
	$('#pagepiling').pagepiling({
		navigation: {
			'textColor': '#fff',
			'bulletsColor': '#fff',
			'position': 'left'
		},
		afterLoad: function(anchorLink, index){
			var currentSection = $('#section-' + index);
			var color =  currentSection.css('backgroundColor');
        	$('#btn').css('color', color);
		},
		onLeave: function(index, nextIndex, direction){
			var right = $('.fadeInRight');
			var up = $('.fadeInUp');
			var zoom = $('.zoomIn');
			
			if(index == 1 && direction =='down'){
				//$( "#form" ).fadeOut(1000);
				resetVelocity();
				animate();
			}
			else if(index == 2 && direction == 'up'){
				//$( "#form" ).fadeIn(2000);
				$('#form1').velocity('fadeIn', { duration: 2000 });
			}
			else if(index == 2 && direction == 'down') {
				new WOW().init();
			}
			else if(index == 3 && direction == 'up') {
				resetVelocity();
				animate();
			}
			else if(index == 3 && direction == 'down') {
				right.removeClass('wow');
				up.addClass('wow');
				new WOW().init();
			}
			else if(index == 4 && direction == 'up') {
				up.removeClass('wow');
				right.addClass('wow');
				new WOW().init();
			}
			else if(index == 4 && direction == 'down') {
				up.removeClass('wow');
				zoom.addClass('wow');
				new WOW().init();
			}
			else if(index == 5 && direction == 'up') {
				zoom.removeClass('wow');
				up.addClass('wow');
				new WOW().init();
			}
			else if(index == 5 && direction == 'down') {
				zoom.removeClass('wow');
				$('#form2').velocity('fadeIn', { duration: 2000 });
			}
			else if(index == 6 && direction == 'up') {
				zoom.addClass('wow');
				new WOW().init();
			}

		}
	});
	
});

