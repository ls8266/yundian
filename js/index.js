// JavaScript Document
$(function(){
		   
	var maxHight = $(".company-info-panel").height();
	if (maxHight < $(".news-info-panel").height()){
		 maxHight = $(".news-info-panel").height();
	}
	if (maxHight < $(".goods-info-panel").height()){
		 maxHight = $(".goods-info-panel").height();
	}
	if (maxHight < $(".technology-info-panel").height()){
		 maxHight = $(".technology-info-panel").height();
	}
	$(".company-info-panel").height(maxHight);
	$(".news-info-panel").height(maxHight);
	$(".goods-info-panel").height(maxHight);
	$(".technology-info-panel").height(maxHight);
	
	$(".company-info-panel").hover(function(){
		$(this).css("background-color","#95DFEC");
	},function(){
		$(this).css("background-color","#6EC4D5");
	});
	$(".news-info-panel").hover(function(){
		$(this).css("background-color","#FFD573");
	},function(){
		$(this).css("background-color","#FFA920");
	});
	$(".goods-info-panel").hover(function(){
		$(this).css("background-color","#A0C868");
	},function(){
		$(this).css("background-color","#6EA166");
	});
	$(".technology-info-panel").hover(function(){
		$(this).css("background-color","#4DC1B6");
	},function(){
		$(this).css("background-color","#26A59A");
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