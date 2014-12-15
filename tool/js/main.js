$(document).ready(function(){
  var appWin = $('#app');
  var menu = $('#menu');
  
  var machines = $.getJSON('./js/obj.json', function(data){
    items = [];
    $.each( data, function( key, val ) {
      items.push(val['id']);
    });
    console.log(items);
    $.each(items, function(a, b){
      var c = menu.append("<div class='mach' id='"+b+"'></div>").on('click', function(){
        appWin.append("<div class='item "+b+"'></div>");
      });
      });
    });
  
  //console.log(machines);
  
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
