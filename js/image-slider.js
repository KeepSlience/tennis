//定义全局变量和定时器
var i = 0 ;

$(document).ready(function(){
    //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
    $('#tab1').hover(function(){
		$(".ig").animate({marginTop:'-0px'},0);
	});
	$('#tab2').hover(function(){
		$(".ig").animate({marginTop:'-415px'},0);
	});
	$('#tab3').hover(function(){
		$(".ig").animate({marginTop:'-830px'},0);
	});
	$('#tab4').hover(function(){
		$(".ig").animate({marginTop:'-1245px'},0);
	});
});