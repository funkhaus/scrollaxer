# Scrollaxer
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
    background: #999;
    position: fixed;
    height: 100%;
    width: 100%;
}
.slide {
    background: #bada55;
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
    selector: '> .slide', // selector slide elements
    speed: 2, // Speed at which the page scrolls (i.e. 0.5 is very fast, 8 is very slow)
    fadeDelay: 0.3, // each slide will stay full opacity for the first 30% of scrolling
    step: function($slides, percentage, $curr, $next){
        console.log({slides: $slides, percentage: percentage, current: $curr, next: $next);
    }
});
```
