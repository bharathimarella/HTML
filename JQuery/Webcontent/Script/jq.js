$(document).ready(function(){
	
$("#btn-q1").click( function(){
$("#target").css("background-color","red");

});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$("#btn-q2").click(function(){
$("#main").html("Hello");	
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$("#btn-q3").click(function(){
var x="that";
$("#spn1").text(x);
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$("#btn-q4").click(function(){
$(".target").css("background","lime");	
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$("#btn-q5").click(function(){
$("ol").hide();	
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$("#btn-q6").click(function(){
$("ul").hide();	
});
$("#btn2-q6").click(function(){
$("ul").show();	
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$("#btn-q7").click(function(){
var x=$(".info").length;
alert(x);
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$("#btn-q8").click(function(){
$(".h1").hide();
$(".h2").show();
$(".h3").hide();
$(".h4").hide();
$(".h5").hide();
$(".8q").hide();
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$("#btn-q9").click(function(){
	$("tr:nth-child(odd)").css("background","teal");
	$("tr:nth-child(even)").css("background","turquoise");
});

$("#1").keyup(function(){
		var x = $(this).val();
			if(x.length == 3){
$("#2").focus(); 
			}
		});

$("#2").keyup(function(){
		var y = $(this).val();
			if(y.length == 3){
		$("#3").focus();
			}
		});

		$("#3").keyup(function(){
		var z = $(this).val();
		if(z.length == 4)
		{
		$("#s1").focus();
			}
		});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
/*question 19*/
		$("span").hide();
		$("input").click(function()
		{
		$(this).siblings("span").show();
		});
		
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/		
		
		$("#q16b").hide();
		$("#minus").hide();

		$("#plus").click(function(){
		$("#minus").show();
		$("#plus").hide();
		$("#q16b").slideDown(2000);
		});

		$("#minus").click(function(){
		$("#plus").show();
		$("#minus").hide();
		$("#q16b").slideUp(2000);
		});
	
		
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/		
		$("#q15").hide();
		var x="";
		var y="";
		var fname="";
		var lname="";
		var foo="";
		$("#btn15").click(function()
		{
		fname;
		lname;
		x;
		y;
		foo;
		fname=$("#fn15").val();
		lname=$("#ln15").val();
if($("#gm").is(":checked"))
		{
		x=$("#gm").val();
		}
		else if($("#gf").is(":checked"))
		{
		y=$("#gf").val();
		}
		foo=$("#se option:selected").text();
		$("#q15").show();
		$("#q15a").text(fname);
		$("#q15b").text(lname);
		if(x!=null )
		{
		$("#q15c").text(x);
		}
		else if(y!=null)
		{
		$("#q15c").text(y);
		}
		$("#q15d").text(foo);
		$("#fn15").val("");
		$("#ln15").val("");
		$("#gm").attr("checked",false);
		$("#gf").attr("checked",false);
		$("#se").text(foo);
		});
		$("#btned15").click(function()
		{
		fname;
		lname;
		x;
		y;
		foo;
		$("#fn15").val(fname);
		$("#ln15").val(lname);
		if(x!=null )
		{
		$("#gnm").attr("checked",true);
		}
		else if(y!=null)
		{
		$("#gnf").attr("checked",true);
		}
		$("#se option:selected").text(foo);

		});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
		
		var slide=[];
		var temp;
		for ( var i=1;i<=7;i++)
		{
		temp="image/image"+i+".jpg";
		slide[i-1]=temp;
		}
		var temp1=0;
		$("#im21").attr("src",slide[temp1]);
		$("#prv").click(function()
		{
		temp1--;
		$("#im21").attr("src",slide[temp1]);
		});
		$("#next").click(function()
		{
		temp1++;
		$("#im21").attr("src",slide[temp1]);
		});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/		
$("#f1").keyup(function(){
	var c; 
	var f;
	f=$("#f1").val();
	c = (f - 32) * 5 / 9;
$("#c1").val(c);
	
});		
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/

array=["Image/car1.gif","Image/car2.gif","Image/car6.gif","Image/car3.gif","Image/car4.gif","Image/car5.gif"];
$("#myImg").attr("src",array[0]);
var x=array.length;
var y=0;
$("#prev").click(function(){	
	y--
	if(y<0){
		y=array.length-1
	}
	$("#myImg").attr("src",array[y]);
});

$("#nxt").click(function(){
	y++
	if(y>=array.length){
		y=0;
	}

	$("#myImg").attr("src",array[y]);
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$("#u1").keyup(function(){
	var c; 
	var f;
	f=$("#u1").val();
	c = f*98.8;
$("#p1").val(c);
	
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$("#btn17").click(function(){
	
var count=0;
$("#tbl17 tr").each(function(){
		count++;
		if(count==1){
			}
		else{
			var x=$(this).find(":nth-child(1)").html();
			x=parseInt(x);
			var y=$(this).find(":nth-child(3)").html();
	        y=parseInt(y);
	        var z=x+y;
	        $(this).find(":nth-child(5)").text(z);      
		}
	});
});	
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$(".btn18").click(function(){
	$(this).parent().parent().remove();
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/	
});	
$(".q20").keyup(function(){
   if($(this).val().length==3){
	   $(this).next(".q20").focus();
	   }
		
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/
$(".btn22").click(function(){
$("<p>Hey There</p>").appendTo(".greet");
});
/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/

});