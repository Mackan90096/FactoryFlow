$(document).ready(function(){
  var machines = $.getJSON('./js/obj.json');
  
  var appWin = $('#app');
  
  appWin.append(machines);
});
