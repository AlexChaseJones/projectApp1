$(document).ready(function(){
	var sideFrameButton = document.getElementById("sideBar-button");
	var sideFrame = document.getElementById("sideBar");

	sideFrameButton.addEventListener("click", function(){
		$(this).toggleClass("button-left");
		$(sideFrame).toggleClass("frame-left");
	})
})