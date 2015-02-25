# Scrollaxer JS
A parallax-y scrolling slideshow plugin

###An example use:
For markup like this:
```html
<div id="slideshow">
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
</div>
```

Style like this:
```css
#slideshow {
    position: fixed;
    height: 100%;
    width: 100%;
}
.slide {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
}
```

Init plugin like this:
```javascript
jQuery('#slideshow').scrollax({
    selector: '> .slide',
    speed: 2,
    fadeDelay:
    step: function($slides, percentage, $curr, $next){
        console.log({
            slides: $slides, 
            percentage: percentage, 
            current: $curr, 
            next: $next
        });
});
```
###Settings:
**selector:** a selector or jQuery object that specifies the slide elements within the container<br/>
**speed:** an arbitrary number to specify how fast you'd like the page to scroll. 0.5 is very fast and 8 is very slow<br/>
**fadeDelay:** a fraction that represents the relative amount of time to delay each slide fading. For example 0.3 will make each slide remain at full opacity for the first 30% that it is scrolled over.<br/>
**step:** a function that is run with each step that the user scrolls. it is passed 4 parameters:<br/>
* `$slides`: a jQuery object of all slides
* `percentage`: the percentage that the user has scrolled down the current slide, represented as fraction (a float between 0 and 1)
* `$curr`: a jQuery object representing the current slide
* `$next`: a jQuery object representing the next slide
