$(document).ready(function(){
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
       var p = appWin.append("<div class='item "+this.id+"'></div>");
       p.css('top','0px');
       p.css('left','0px');
        $('.item').draggable({ grid:[ 16, 16 ], containment:'#app' });
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
