$(document).ready(function(){
  var obj = $.getJSON('./js/obj.json');
    var machines = $.parseJSON(obj);
  
  var appWin = $('#app');
  
  appWin.append(machines);
});
