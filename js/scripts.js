(function loadSound () {
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/Game-AudioSprite.mp3", 'Game-AudioSprite');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/Game-Break.mp3", 'Game-Break');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/Game-Death.mp3", 'Game-Death');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/Game-Shot.mp3", 'Game-Shot');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/Game-Spawn.mp3", 'Game-Spawn');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/GU-StealDaisy.mp3", 'GU-StealDaisy');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/Humm.mp3", 'Humm');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/M-GameBG.mp3", 'M-GameBG');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/R-Damage.mp3", 'R-Damage');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/S-Damage.mp3", 'S-Damage');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/Thunder1.mp3", 'Thunder');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/ToneWobble.mp3", 'ToneWobble');
  // createjs.Sound.registerSound("js/SoundJS/_assets/audio/U-CabinBoy3.mp3", 'U-CabinBoy3');
  createjs.Sound.registerSound("js/SoundJS/_assets/audio/220171__gameaudio__flourish-spacey-1.mp3", 'FlorishSpace');
  createjs.Sound.registerSound("js/SoundJS/_assets/audio/220208__gameaudio__click-pop-two-part.mp3", 'ClickPopTwoPart');
  createjs.Sound.registerSound("js/SoundJS/_assets/audio/220176__gameaudio__confirm-click-spacey.mp3", 'ConfirmClickSpacey');
  createjs.Sound.registerSound("js/SoundJS/_assets/audio/220179__gameaudio__click-metal-ting.mp3", 'MetalTing');
  createjs.Sound.registerSound("js/SoundJS/_assets/audio/220177__gameaudio__quick-ui-or-event-deep.mp3", 'QuickUiEventDeep');

  $('.section__content').css({'display': 'none'});
})();

function playSound (soundID) {
  createjs.Sound.stop();
  createjs.Sound.play(soundID);
}

$('.title').on('click', function(e) {
	var $this = $(this);
	var $mainSection = $this.parents('.main__section');
	var contentSelector = $this.data('content');
	var $content = $mainSection.find(contentSelector);
	if ($content.hasClass('active')) {
		$content.removeClass('active');
		$content.slideUp(100);
		playSound('ClickPopTwoPart');
	} else {
		$content.addClass('active');
		$content.parents('.section__content').each(function(i, v) {
			$(v).slideDown(100);
		});
		$content.slideDown(500);
		playSound('FlorishSpace');
	}
}).on('mouseenter', function() {
		playSound('QuickUiEventDeep');
});

$('.testimonial').on('mouseenter', function() {
    playSound('QuickUiEventDeep');
});

$('.img--rulo').on('click', function() {
	playSound('MetalTing');
});

$('.parallax-window').parallax({imageSrc: 'https://c2.staticflickr.com/3/2464/3912031553_5c5c941b61_o.jpg'});