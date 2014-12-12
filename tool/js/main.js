$(document).ready(function(){
  var obj = $.getJSON('obj.json');
    var machines = $.parseJSON(obj);
  
  var appWin = $('#app');
  
  appwin.append(machines);
});
