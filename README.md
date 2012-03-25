# Cross Fade 0.1
Simple release to simplify cross-fading images with on-load listener.

## Usage

Select image using jQuery and send new image src through to Cross Fade:

```javascript
$(document).ready(function(){
  $('.cross-fade').crossfade('sample-two.jpg');  
});
```

## Support

Lightly browser tested in Chrome 16, Firefox 11, Internet Explorer 8

### To-do
* Handle various layout styles (adding margin to `<img>` acts funky )
* Handle different speeds
* Thorough browser testing