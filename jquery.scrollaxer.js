/* global jQuery */
/* jshint browser:true */
/*!
 * Scrollaxer 1.0
 *
 * Copyright 2015 Funkhaus
 * John Robson, Drew Baker
 *
 */

;
(function($) {
	'use strict';

	$.fn.scrollax = function(options) {

		var $slides, percentage, targetIdx, $curr, $next, sizeContainer, offsetLinear;
		var $container = $(this);

		// defaults
		var settings = {
			selector: '.slide',
			speed: 2,
			fadeDelay: 0.3,
			step: function() {
				return;
			}
		};

		// merge settings and options
		if (options) {
			$.extend(settings, options);
		}

		// this is used to set the master slideHeight


		function getSlideHeight() {
			// set the slide height in one place
			return $(window).height() * settings.speed;
		}

		offsetLinear = function(fraction, offset) {

			offset = offset || 0.3;
			fraction = fraction || 0;

			fraction = (fraction * (1 + offset)) - offset;

			if (fraction < 0) fraction = 0;
			if (fraction > 1) fraction = 1;

			return fraction;
		};

		// set slides
		$slides = $(settings.selector);

		// wrap 
		var $wrapper = $container.wrap('<div id="scrollax-wrapper"></div>').closest('#scrollax-wrapper');

		// size the container based on speed setting
		sizeContainer = function() {
			// set min height
			$wrapper.css({
				minHeight: Math.round(getSlideHeight() * $slides.length)
			});
		};
		$(window).resize(sizeContainer);
		sizeContainer();

		// stack slides using z-index
		$slides.each(function(count) {
			$(this).css('z-index', $slides.length - count);
		});

		$container.trigger('scrollax-init');

		// capture scroll event
		$(window).scroll(function() {

			// save scrollTop
			var sTop = $(window).scrollTop();

			percentage = ((sTop % getSlideHeight()) / getSlideHeight()).toFixed(2);
			targetIdx = Math.floor(sTop / getSlideHeight());
			$curr = $slides.eq(targetIdx);
			$next = $slides.eq(targetIdx + 1);

			// make exception for last slide
			if (targetIdx == ($slides.length - 1)) {
				percentage = (percentage / 0.5).toFixed(2);
			}

			// show/hide proper slides
			$curr.add($next).show();
			$slides.not($curr.add($next)).hide();

			// if not targeting the last slide...
			if (targetIdx != ($slides.length - 1)) {

				// set opacity
				$curr.css({
					'opacity': (1 - offsetLinear(percentage, settings.fadeDelay))
				});

			}

			if (typeof settings.step === 'function') {

				settings.step($slides, parseFloat(percentage), $curr, $next);

			}

		});

		return $slides;
	};

})(window.jQuery);