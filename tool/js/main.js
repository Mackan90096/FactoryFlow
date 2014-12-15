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
       appWin.append("<div class='item "+this.id+"'></div>");
        $('.item').draggable({ 
          grid: [ 16, 16 ] 
          drag: function(event, ui){
          var rotateCSS = 'rotate(' + ui.position.left + 'deg)';

          $(this).css({
          '-moz-transform': rotateCSS,
          '-webkit-transform': rotateCSS
          });
      }
     });
  });
  
  //console.log(machines);
  
  //menu.append("<div class='mach' id="+machines)
  
  $('body').on('click', '.item', function(){
    $('.item').removeClass('selected');
    $(this).addClass('selected', 1);
  });
  
  $('#app').on('click', function(){
    $('.item').removeClass(' selected');
  });
  
  //appWin.append(machines);
});
