$(document).ready(function(){
  var items = [];
  var machines = $.getJSON('./js/obj.json', function(data){
  $.each( data, function( key, val ) {
    items.push(key+"="+val);
  });
  console.log(items);
  });
  
  var appWin = $('#app');
  
  appWin.append(machines);
});
