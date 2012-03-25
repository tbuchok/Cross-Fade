$(document).ready(function(){
  var sources = ['/img/sample-one.jpg', '/img/sample-two.jpg'], handleClick,
  
  handleClick = function(event) {
    sources.push(sources[0]);
    $('.cross-fade').crossfade(sources[1]);
    sources.shift();
  };
  $('.button').bind('click', handleClick);
});