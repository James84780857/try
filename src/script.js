$(window).scroll(function(e){
  if($(window).scrollTop()<=0)
  {
    $(".explore").css("opacity","1");
  }
  else
    $(".explore").css("opacity","0");
  
});

$(".SPAN").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/S6togSq';
  }

);
$(".PORTUGAL").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/JmBIH72', '_blank';
  }
  
);

$(".NL").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/JmBIH72', '_blank';
  }
  
);

$(".Czech").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/JmBIH72', '_blank';
  }
  
);

$(".Bel").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/koGdeL2', '_blank';
  }
  
);
$(".Cro").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/PI3Obef', '_blank';
  }
  
);

$(".Ger").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/3h7yygd', '_blank';
  }
  
);
$(".Hungary").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/OsJ387q', '_blank';
  }
  
);



$(".product1").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/pe04mm0';
  }

);

$(".product2").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/wvE83L9';
  }

);

$(".product3").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/WSCu2cW';
  }

);

$(".product4").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/YwBX3CI';
  }

);
$("button.btn.btn-outline-primary.float-right.btn-lg.tara").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/VRNlGPm';
  }

);

$("button.btn.btn-outline-primary.float-left.btn-lg.Eson").click(
  function(eve){
    window.location.href = 'https://imgur.com/gallery/Pu7pRu1';
  }

);

var s= skrollr.init()


$(document).on('click','a',function(eve){
  eve.preventDefault();
  var target= $(this).attr("href");
  $("html,body").animate({
    scrollTop: $(target).offset().top
  },500)
  
});
$(window).scroll(function(e){
    if($(window).scrollTop()<=0)
      {
        $("nav.navbar").removeClass("NavMove");
      }
    else{
        $("nav.navbar").addClass("NavMove");
      
    }
  
  
});
$(".ins").click(
  function(eve){
    window.location.href = 'https://www.instagram.com/hsinwei614/', '_blank';
  }

);