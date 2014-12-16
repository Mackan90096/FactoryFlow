$(document).ready(function(){

  $.fn.rotate = function(deg) {
    this.css({'transform': 'rotate('+deg+'deg)'});
    this.css({'-ms-transform': 'rotate('+deg+'deg)'});
    this.css({'-moz-transform': 'rotate('+deg+'deg)'});
    this.css({'-o-transform': 'rotate('+deg+'deg)'}); 
    this.css({'-webkit-transform': 'rotate('+deg+'deg)'});
    return this; 
  };

  
  var appWin = $('#app');
  var menu = $('.menu');
  
  var machines = $.getJSON('./js/obj.json', function(data){
    items = [];
    $.each( data, function( key, val ) {
      items.push(val);
    });
    console.log(items);
    $.each(items, function(a, b){
      console.log(a+" "+b);
      menu.append("<div class='mach' id='"+b['id']+"'>"+b['name']+"</div>");
      });
    });
  
    $('body').on('click', '.mach', function(){
       var p = appWin.append("<div class='item "+this.id+"'></div>").css('top','0px').css('left','0px');
        $('.item').draggable({ grid:[ 16, 16 ], containment:'#app' });
  });
  
  $('#app').on('keyup', function(e){
    if(e.keyCode == 82){
      $('.selected').rotate(90);
    }
  });
  
  //console.log(machines);
  
  //menu.append("<div class='mach' id="+machines)
  
  $('body').on('click', '.item', function(){
    $('.item').removeClass('selected');
    $(this).addClass('selected', 1);
  });
  
  var slider = $('#slider').slider({
    min:0,
    max:360,
    change: function(e, ui){
    degrees = ui.value;
    
    //var degrees = e.value; 
    if($('.item').hasClass(' selected')){
      var element = $('.selected');
      element.css({
        'webkit-transform' : 'rotate('+ degrees +'deg)',
        '-moz-transform' : 'rotate('+ degrees +'deg)',
        'transform' : 'rotate('+ degrees +'deg)'
      });
    }}
  });
  
  $('#app').on('click', function(){
    $('.item').removeClass(' selected');
  });
  
  //appWin.append(machines);
});
