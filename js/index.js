$(function(){
    $(".linkEnterModal").click(function(){
    	$(".enterModal").css({
    		display: "flex"
    	});
    });
    $(".enterModalFormHeadClose").click(function(event) {
    	$(".enterModal").css({
    		display: "none"
    	});
    });
    $(".linksigninModal").click(function(){
    	$(".signinModal").css({
    		display: "flex"
    	});
    });
    $(".signinModalFormHeadClose").click(function(event) {
    	$(".signinModal").css({
    		display: "none"
    	});
    });
    $("#searchPanelOpen").click(function(){
    	document.getElementById("searchPanel").classList.toggle("hideSearchPanel");    	
    });
    $("#searchInput").keyup(function(event) {
    	let stext = $(this).val();
    	if(stext != ""){
    		$(".searchResults").css({
    		display:"block",
    	  });
    	} else{
    		$(".searchResults").css({
    		display:"none",
    	});
    	}
    });
    $("#savatchaniKorish").click(function() {
	    	document.getElementById("savatcha").classList.toggle("hideWalletPanel");    	
    	// console.log("he");
    });
    $(".enterModalFormMain > form > .col-lg-1").mousedown(function(){
    	$("#enterPassword").attr('type', 'text');
    	// console.log("he");
    });
    $(".enterModalFormMain > form > .col-lg-1").mouseup(function(){
    	$("#enterPassword").attr('type', 'password');
    });
})