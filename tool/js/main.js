$(document).ready(function(){
  var machines = $.getJSON('./js/obj.json');
  
  var appWin = $('#app');
  
  $('.mach').on('click',function(){
    //appWin.append("<div class='item "+e.id+"'></div>").draggable();
    console.log(this);
    
  });
  
  appWin.append(machines);
});
