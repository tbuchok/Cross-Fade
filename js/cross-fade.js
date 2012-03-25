(function($){
  $.fn.crossfade = function(src) {
    var self, img, top = 0, left = 0;
    self = $(this);
    if (self.css('display') === 'block') {
      top = -self.outerHeight();
    } else {
      left = -self.outerWidth();
    }
    image = new Image();
    
    image.onload = function(){ 
      var img = $(image);
      img.css({ 'margin-top' : top, 'margin-left' : left }).hide();
      self.after(img).fadeOut(function(event){ 
        img.css('margin', '0').attr('class', self.attr('class')).attr('id', self.attr('id'));
        self.remove();
      });
      img.fadeIn();
    }
    image.src = src;

    return $(this);
  }
}(jQuery));