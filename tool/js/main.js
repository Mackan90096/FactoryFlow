$(document).ready(function(){
  var machines = $.getJSON('./js/obj.json');
  
  var appWin = $('#app');
  
  $('.mach').on('click',function(this){
    appWin.append("<div class='item "+machines[this.id]+"'></div>").draggable();
  });
  
  appWin.append(machines);
});
