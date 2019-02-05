 $(".img2").hide();
$(".button1").click(function(){
    $(".img1").attr("src","https://www.mobygames.com/images/promo/original/1476987307-1939032263.png");
    $(".button1").text("return(double click that)");
});
$(".img1").dblclick(function(){
    $(".img1").attr("src","https://images.halloweencostumes.com/products/46484/1-1/boys-pokemon-inflatable-pokeball-costume.jpg");
});
$(".button1").dblclick(function(){
    $(".img1").attr("src","https://images.halloweencostumes.com/products/46484/1-1/boys-pokemon-inflatable-pokeball-costume.jpg");
    $("body").css("background-color","red");
    $(".button1").text("you lose!");
});
$(".title").dblclick(function(){
    $(".img1").hide();
    $(".button1").hide();
    $(".img2").show();
});
$(".img2").dblclick(function(){
    $(".img2").attr("src","https://i.ytimg.com/vi/vpPxm0ganfw/hqdefault.jpg");
});
