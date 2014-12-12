$(document).ready(function(){
  var machines = $.getJSON('./js/obj.json');
  
  var appWin = $('#app');
  
  $('.mach').on('click',function(e){
    appWin.append("<div class='item "+e.id+"'></div>").draggable();
  });
  
  appWin.append(machines);
});
