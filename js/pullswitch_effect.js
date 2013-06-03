$(window).resize(checkWindowSize); 



$(document).ready(function()
{
	console.log( 'www.gagandipsingh.com by Gagandip Singh' );
	checkWindowSize();
	pull(200, .5);

});

/*
show first argument div, hide every argument div after that 
ex: <a href="#" onclick="return show('Home','Media','Code');">home</a> <br>
*/
function show() {
    document.getElementById(arguments[0]).style.display='block';
    for (var i = 1; i < arguments.length; i++) {
        // alert(arguments[i]);
         document.getElementById(arguments[i]).style.display='none';
    }
    return false;
}


function checkWindowSize() {   
	var windowWidth = $(window).width();
	var bodyWidth = $('body').css("width");
	var smallerFrame = windowWidth * 0.75;
	var biggerFrame = windowWidth * 0.95;

	// console.log(">" + windowWidth); 
	// console.log("smallerFrame>" + smallerFrame); 
	if ( $(window).width() > 600 ) {  
	    // $('body').addClass('large');
	    if (bodyWidth != smallerFrame) {
	    	$('body').stop;
	    	$('body').animate({ width: "75%" }, {"queue": false, "duration": 150}); 
	    };
	}  
	else {  
	    // $('body').removeClass('large'); 
	    // $('body').css("width", "100%");  
	    if (bodyWidth != biggerFrame) {
	    	$('body').stop;
	    	$('body').animate({ width: "95%" }, {"queue": false, "duration": 150});
	    }
	}    	 
} 


function randomNum(high)
{
	return ( (Math.random() + 25101989) % high);
}

function pull(time, multiplier)
{
	// creates the target paths
	var rope_words = "#pullswitches" + " .rope .bottom";
	var ropes = "#pullswitches .rope";
	
	// creates the pull animation for all list elements 
	var timer = 0;
	var ropeLength = 1.0;
	var ropeWordsLength = 1.8;
	var lamp = $("#lamp"); 
	$(ropes).each(function(i)
	{
		var rope = $(this);
		var ropetop = $(this).children(' .top');
		var ropebottom = $(this).children(' .bottom');

		timer = (timer*multiplier + time); // updates timer

		ropetop.css("height","0em");	//starting for rope
		ropeLength = ropeLength + randomNum(.01);
		ropetop.animate({ height: (ropeLength + "em") }, {"queue": false, "duration": timer}); //rope comes down

		ropebottom.css("line-height:","0%"); //starting for rope words
		ropebottom.animate({ lineHeight: "150%" }, timer); //rope words swing too far down
		ropebottom.animate({ lineHeight: "60%" }, timer);  //rope words swing too far up
		ropebottom.animate({ lineHeight: "100%" }, timer); //rope words settle

		ropebottom.css("top","-100%"); //rope words are off screen
		ropeWordsLength = ropeLength + .01;
		ropebottom.animate({ top: (ropeWordsLength + "em") }, {"queue": false, "duration": timer}); //rope words come on screen

		// creates the hover-pull effect for all link elements
		rope.hover( 
			function()
			{
				ropetop.animate({ height: ((ropeLength+.7) + "em") }, 150);
				ropebottom.animate({ marginTop: "10px" },150);
				lamp.attr("src","images/lampup.png");
			},		
			function()
			{
				ropetop.animate({ height: ropeLength+"em" }, 150);
				ropebottom.animate({ marginTop: "0px" }, 150);
				lamp.attr("src","images/lampdown.png");
			}
		);

		rope.click(
			function()
			{
				ropetop.stop();
				ropebottom.stop();
				ropetop.animate({ height: "3.4em" }, 40);
				ropebottom.animate({ marginTop: "18px" },40);

				ropetop.animate({ height: "0.5em" }, 125);
				ropebottom.animate({ marginTop: "-9px" }, 125);

				ropetop.animate({ height: "1em" }, 150);
				ropebottom.animate({ marginTop: "0px" }, 150);
				lamp.attr("src","images/lampdown.png");
			}
		);
	});
}






