$(document).ready(function(){
  var appWin = $('#app');
  var menu = $('#menu');
  
  var machines = $.getJSON('./js/obj.json', function(data){
    items = [];
    $.each( data, function( key, val ) {
      items.push( "<div class='mach' id='" + val['id'] + "'>" + val['id'] + "</div>" );
    });
    //console.log(items);
    $.each(items, function(a, b, data){
      //menu.append(data);
      console.log(a+" "+b+" "+c);
    });
  });
  
  console.log(machines);
  
  //menu.append("<div class='mach' id="+machines)
  
  $('.mach').on('click',function(){
    p = appWin.append("<div class='item "+this.id+"'></div>");
    $('.item').draggable({ grid: [ 16, 16 ] });
  });
  
  $('body').on('click', '.item', function(){
    $('.item').removeClass('selected');
    $(this).addClass('selected', 1);
  });
  
  $('#app').on('click', function(){
    $('.item').removeClass(' selected');
  });
  
  //appWin.append(machines);
});
