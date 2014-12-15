$(document).ready(function(){
  var machines = $.getJSON('./js/obj.json')['responseJSON'];
  var appWin = $('#app');
  var menu = $('#menu');
  
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
