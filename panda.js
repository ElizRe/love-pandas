$(document).ready(function(){
	$('.panda').click(function(){
		var type = this.getAttribute("data-type");
		var tendance = this.getAttribute("data-tendance");

		alert("le type est : "  +  type +   " et la tendance est :  " +  tendance);
		
	});
});
