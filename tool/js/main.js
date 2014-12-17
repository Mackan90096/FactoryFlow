$(document).ready(function(){

  $.fn.rotate = function(deg) {
    degr = this.css({'tranform': 'rotate'});
    console.log(degr);
    this.css({'transform': 'rotate('+deg+'deg)'});
    this.css({'-ms-transform': 'rotate('+deg+'deg)'});
    this.css({'-moz-transform': 'rotate('+deg+'deg)'});
    this.css({'-o-transform': 'rotate('+deg+'deg)'}); 
    this.css({'-webkit-transform': 'rotate('+deg+'deg)'});
    return this; 
  };
  
function foo(a){
  console.log(a);
}

function toImage(){
  html2canvas($("#app"), {
    useCORS: true,
    onrendered: function(canvas) {
        var myImage = canvas.toDataURL("img/png");
        window.open(myImage);
    }
});
}
  
  var appWin = $('#app');
  var menu = $('.menu');
  
  var machines = $.getJSON('./js/obj.json', function(data){
    items = [];
    $.each( data, function( key, val ) {
      items.push(val);
    });
    console.log(items);
    $.each(items, function(a, b){
      console.log(a+" "+b);
      menu.append("<div class='mach' id='"+b['id']+"'>"+b['name']+"</div>");
      });
    });
  
    $('body').on('click', '.mach', function(){
       var p = appWin.append("<div class='item "+this.id+"'></div>").css('top','0px').css('left','0px');
        $('.item').draggable({ grid:[ 16, 16 ], containment:'#app' });
  });
  
  $('body').on('keyup', function(e){
    if(e.keyCode == 82){
    values = $('.selected').css('transform').split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];
    
    var scale = Math.sqrt(a*a + b*b);
    
    // arc sin, convert from radians to degrees, round
    // DO NOT USE: see update below
    var sin = b/scale;
    var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    
    // works!
    console.log('Rotate: ' + angle + 'deg');
      $('.selected').rotate(angle+90);
    }else if(e.keyCode == 83){
      toImage('app', foo);
    }else if(e.keyCode == 77){
      if(menu.hasClass('hide')){
        menu.removeClass('hide');
      }else{
        menu.addClass('hide');
      }
    }else if(e.keyCode == 66){
      if($('.item').hasClass('border')){
        $('.item').removeClass('border');
      }else{
        $('.item').addClass('border');
      }
    }
  });
  
  //console.log(machines);
  
  //menu.append("<div class='mach' id="+machines)
  
  $('body').on('click', '.item', function(){
    $('.item').removeClass('selected');
    $(this).addClass('selected', 1);
  });
  
  $('#app').on('click', function(){
    $('.item').removeClass(' selected');
  });
  
  //appWin.append(machines);
});
