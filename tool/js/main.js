$(document).ready(function(){
  var machines = $.getJSON('./js/obj.json', function(data){
    console.log(data);
  });
  
  var appWin = $('#app');
  
  appWin.append(machines);
});
