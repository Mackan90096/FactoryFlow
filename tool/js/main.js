$(document).ready(function(){
  var machines = $.getJSON('./js/obj.json');
  
  var appWin = $('#app');
  
  $('.mach').on('click',function(){
    p = appWin.append("<div class='item "+this.id+"'></div>");
    p.draggable();
    
  });
  
  appWin.append(machines);
});
