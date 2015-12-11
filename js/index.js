// JavaScript Document
$(function(){
	$(".company-info-panel").hover(function(){
		$(this).removeClass("company-info-panel").css("background-color","#95DFEC");
	},function(){
		$(this).addClass("company-info-panel");
	});
	$(".news-info-panel").hover(function(){
		$(this).removeClass("news-info-panel").css("background-color","#FFD573");
	},function(){
		$(this).addClass("news-info-panel");
	});
	$(".goods-info-panel").hover(function(){
		$(this).removeClass("goods-info-panel").css("background-color","#A0C868");
	},function(){
		$(this).addClass("goods-info-panel");
	});
	$(".technology-info-panel").hover(function(){
		$(this).removeClass("technology-info-panel").css("background-color","#4DC1B6");
	},function(){
		$(this).addClass("technology-info-panel");
	});
	$(".img-switch").hover(function(){
		$(".img-alert").animate({
			left: 180, opacity: 'show'
		}, 500);
	},function(){
		$(".img-alert").animate({
			left: 0, opacity: 'hide'
		}, 500);
	});
	
})
