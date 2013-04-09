
		function verify()
		{
				var x=document.forms["regform"]["name"].value;
				if (x==null || x=="")
				  {
			 	 alert("Please enter your name");
			 	 return false;
			  	}
				var z=document.forms["regform"]["num"].value;
				if(isNaN(z)){alert("Phone number must be a numeric value");return false;}
				if(z.length<10 || z.length>10){alert("Phone number must be of 10 digits");return false;}
				if (z==null || z=="")
				  {
				  alert("Phone number must be filled out");
				  return false;
				}
	
				var email = document.getElementById("email");
				var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if (!filter.test(email.value)) {
				alert("first member's email is invalid");
				return false;}
				
				var t=document.forms["regform"]["coll"].value;
				if (t==null || t=="")
				  {
			 	 alert("Please enter your college's name");
			 	 return false;
			  	}
				return true;
			}
$(window).load(function(){
			
			$("#load").hide();
			$("#regbtn").click(function() {
				if(verify())
				{
					$("#load").fadeIn(300);
				$.post("registerevent.php",$("#regform").serialize(),function(data){
					$("#load").hide();alert(data); });
				}
					
			});
			
});
