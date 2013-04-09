$('img.homeimg').load(function() {   $("#siteenter").fadeIn("slow"); });
function ushallnotpass()
{
		$('#siteenter').parent().fadeOut('slow');
} 
$(function() {
  $(document).keyup(function(e) {
    switch(e.keyCode) {
      case 49:$("#canvas").animate({right:'0%',bottom:'0%'},"slow");break;
      case 50:$("#canvas").animate({right:'33.3333%',bottom:'0%'},"slow");break;
      case 51:$("#canvas").animate({right:'66.6666%',bottom:'0%'},"slow");break;
      case 52 :$("#canvas").animate({right:'0%',bottom:'33.3333%'},"slow");  break;
      case 53:$("#canvas").animate({right:'33.3333%',bottom:'33.3333%'},"slow");break;
      case 54 :  $("#canvas").animate({right:'66.6666%',bottom:'33.3333%'},"slow"); break;
    case 55:$("#canvas").animate({right:'0%',bottom:'66.6666%'},"slow");break;
    case 56:$("#canvas").animate({right:'33.3333%',bottom:'66.6666%'},"slow");break;
    case 57:$("#canvas").animate({right:'66.6666%',bottom:'66.6666%'},"slow");break;
case 13:ushallnotpass();break;
case 72:shelp();break;
case 27:close();break;
    }
  });
});
function move(x)
{
	 if(x==tl)
 $("#canvas").animate({right:'0%',bottom:'0%'},"slow");
if(x==tc)
 $("#canvas").animate({right:'33.3333%',bottom:'0%'},"slow");
  if(x==tr)
 $("#canvas").animate({right:'66.6666%',bottom:'0%'},"slow");
 if(x==cl)
 $("#canvas").animate({right:'0%',bottom:'33.3333%'},"slow");
 if(x==cr)
 $("#canvas").animate({right:'66.6666%',bottom:'33.3333%'},"slow");
  if(x==bl)
 $("#canvas").animate({right:'0%',bottom:'66.6666%'},"slow");
 if(x==bc)
 $("#canvas").animate({right:'33.3333%',bottom:'66.6666%'},"slow");
 if(x==br)
 $("#canvas").animate({right:'66.6666%',bottom:'66.6666%'},"slow");

}

function gohome()
{
	$("#canvas").animate({right:'33.3333%',bottom:'33.3333%'},"slow");
}
function simg(x)
{
		var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("showimg").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","imgmenu.php?iid="+x,true);
xmlhttp.send();
		$("#showimg").fadeIn("slow");
}

function climg()
{
$("#showimg").fadeOut("slow");
}

function scnt(x)
{
		var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("showcnt").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","cntmenu.php?id="+x,true);
xmlhttp.send();
		$("#showcnt").fadeIn("slow");
}

function clcnt()
{
$("#showcnt").fadeOut("slow");
}
	
function sculcnt(x)
{
		var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("showculcnt").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","culcntmenu.php?id="+x,true);
xmlhttp.send();
		$("#showculcnt").fadeIn("slow");
}

function clculcnt()
{
$("#showculcnt").fadeOut("slow");
}
function fixschedule(x)
{
	var mode=x;
	 switch(mode) {
      case 1:$("#mainsce").css('backgroundPosition','0px 0px');break;
      case 2:$("#mainsce").css('backgroundPosition','-500px 0px');break;
      case 3:$("#mainsce").css('backgroundPosition','-1000px 0px');break;
      case 4:$("#mainsce").css('backgroundPosition','0px -600px');break;
      case 5:$("#mainsce").css('backgroundPosition','-500px -600px');break;
      case 6:$("#mainsce").css('backgroundPosition','-1000px -600px');break;
      case 7:$("#mainsce").css('backgroundPosition','0px -1200px');break;
      case 8:$("#mainsce").css('backgroundPosition','-500px -1200px');break;
      case 9:$("#mainsce").css('backgroundPosition','-1000px -1200px');break;
            
    }
}
function shelp()
{
		var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("showhelp").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","help.html",true);
xmlhttp.send();
		$("#showhelp").fadeIn("slow");
}

function clhp()
{
$("#showhelp").fadeOut("slow");
}
function close()
{
clhp();
clculcnt();
 clcnt();
climg();
}
function cteam(x)
{
	
		var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("condisp").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","teametamax.php?id="+x,true);
xmlhttp.send();
		
}

function showschedule(x)
{
	
		var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("scebox").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","schedule.php?id="+x,true);
xmlhttp.send();

}
function showbox()
{
	
		var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("scebox").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","schedule.html",true);
xmlhttp.send();

}
