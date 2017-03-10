$(document).ready(function(){
	$('#submit').on("click",function(event){
		event.preventDefault();
		function dataValidation() {
			var valid = true;
			$('.form-control').each(function(){
				if ($(this).val() === '') {
					valid = false;

				}
			});

			$('.selection').each(function(){
				if($(this).val() === '') {
					valid =false;
				}
			});

			return valid;
		}

		if (dataValidation() == true){
			console.log('true');
		}
		else{
			console.log('false');
		}
	})
})