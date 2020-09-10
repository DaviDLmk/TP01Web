$('form').submit(function(evt){
	
	if(($('#inputPassword').val() === $ ('inputConfPassword').val())){
		if($('#inputPassword').val() !== "" && $('inputConfPassword').val()!== ""){
			alert('Les mots de passe sont identiques');
			evt.preventDefault();
		}else {
			alert('Veuillez remplir les champs de mot de passe');
		}
	}else {
		alert('Les mots de passe ne sont pas identiques'):
	}
});
	
