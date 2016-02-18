$(document).ready(function(){
	var size = [window.width,window.height];
	$(window).resize(function(){
    	window.resizeTo(size[0],size[1]);
	});

	var sideFrameButton = document.getElementById("sideBar-button");
	var sideFrame = document.getElementById("sideBar");

	sideFrameButton.addEventListener("click", function(){
		$(this).toggleClass("button-left");
		$(sideFrame).toggleClass("frame-left");
	})

})