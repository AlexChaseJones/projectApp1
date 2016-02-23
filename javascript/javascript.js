$(document).ready(function(){

	var sideFrameButton = document.getElementById("sideBar-button");
	var sideFrame = document.getElementById("sideBar");
	var memberBlock1 = document.getElementById("1");
	var memberBlock2 = document.getElementById("2");
	var memberBlock3 = document.getElementById("3");
	var memberBlock4 = document.getElementById("4");
	var memberBlock5 = document.getElementById("5");


	sideFrameButton.addEventListener("click", function(){
		$(sideFrameButton).toggleClass("button-left");
		$(sideFrame).toggleClass("frame-left");
	})

	memberBlock1.addEventListener("click", function(){
		$(this).toggleClass("memberOpen");
	})
	memberBlock2.addEventListener("click", function(){
		$(this).toggleClass("memberOpen");
	})
	memberBlock3.addEventListener("click", function(){
		$(this).toggleClass("memberOpen");
	})
	memberBlock4.addEventListener("click", function(){
		$(this).toggleClass("memberOpen");
	})
	memberBlock5.addEventListener("click", function(){
		$(this).toggleClass("memberOpen");
	})

})