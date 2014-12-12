$(document).ready(function(){
  var machines = $.getJSON('./js/obj.json');
  
  var appWin = $('#app');
  
  $('.mach').on('click',function(){
    p = appWin.append("<div class='item "+this.id+"'></div>");
    $('.item').draggable();
  });
  
  $('.item').click(function(){
    $(this).addClass('selected', 1);
  });
  
  /*$('#app').on('click', function(){
    $('.item').removeClass(' selected');
  });*/
  
  //appWin.append(machines);
});
