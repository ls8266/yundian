// JavaScript Document

$(function(){
		   
	var maxHight = $(".company-info").height();
	if (maxHight < $(".center-core").height()){
		 maxHight = $(".center-core").height();
	}
	$(".company-info").height(maxHight);
	$(".center-core").height(maxHight);

});