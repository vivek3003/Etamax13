$(document).ready(function(){
	$("#next a").hide();
	$("#prev a").hide();
	$(".slideshow").hide();
	$("#loadslider").hide();
	$("#plybtn").click(function() {
				$(this).hide();
			$(".slideshow").load("imgslider.php");
			$("#loadslider").fadeIn(600);
				setTimeout(function() {
				$(".slideshow").fadeIn(600);
				$("#next a").show();
				$("#prev a").show();$("#loadslider").hide();},3000);
				
				
			});

			
	var counter=0;
	var imgid="s";
	$("#next a").click(function() {
	if(counter==6)
	{
		counter=-1;
		var i=0;
		var allimg="s";
		for(i=0;i<7;i++)
		{
			allimg="#i"+i;
			$(allimg).fadeIn(1000);
		}
	}
	counter++;
	imgid="#i"+counter;
	$(imgid).fadeOut(250);

	
	});
	$("#prev a").click(function() {
	if(counter==0)
	{
		counter=7;
		var i=0;
		var allimg="s";
		for(i=1;i<7;i++)
		{
			allimg="#i"+i;
			$(allimg).fadeOut(250);
		}
	}	
	$("#prev").show();
	imgid="#i"+counter;
	counter--;
	$(imgid).fadeIn(1000);


	
	});

});