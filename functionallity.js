$(document).ready(function() {
	
	/// Drop Down Menu (ArchivedPosts) 
	$("#ArchivedPosts").mouseover(function() {
		 $("#ArchivedPosts p").slideDown("slow"); 
	}); 
	$("#ArchivedPosts").mouseleave(function() {
		$("#ArchivedPosts p").slideUp("slow"); 
	});
	$("#ArchivedPosts").mouseover(function() {
		$(this).css("background-color", "#ff3333");
	}); 
	$("#ArchivedPosts").mouseleave(function() {
		$(this).css("background-color", "#b30000");
	});
	
	 
	 /// MouseOver / Hover over NavBar's Div-Links 
	$("#NavBar div").mouseover(function() {
		$(this).css("background-color", "#ff3333");
	}); 
	$("#NavBar div").mouseleave(function() {
		$(this).css("background-color", "#b30000");
	}); 
	
	/// Scrooll (to top) Button 
	// Check to see if the window is top, if not, set the display button 
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$(".scrollToTop").fadeIn(); 
		} else {
			$(".ScrollToTop").fadeOut(); 
		}
	}); 
	// Click event to scroll (to top) 
	$(".scrollToTop").click(function() { 
		$("html, body").animate({scrollTop : 0}, 800); 
		return false; 
	});  
	
});