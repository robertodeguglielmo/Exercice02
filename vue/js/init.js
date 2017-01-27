<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>



<script>

var maFonction = function(event){
	var elem=$( this );
	elem.wrap('<i></i>');
};

var maFonctionH2 = function(event){
	var elem=$( this );
	//alert(elem.attr('class'));
	$('aside').append(elem.text()+'<br>'+elem.attr('class'));

};
var maFonctionImage = function(event){
	var elem=$( this );
	var monHTML="<div class='popup'> <img src='"+elem.attr('src')+"'> <a href=''>Fermer</a> </div> ";

	$('body').append(monHTML);
	$('.popup'	).fadeOut();
	$('section'		).fadeTo( "slow" , 0.15 );
	$('aside'		).fadeTo( "slow" , 0.15);
	$('footer'		).fadeTo( "slow" , 0.15);
	$('.popup'	).fadeIn("slow");

};


$(function(){
	$('p').on('click', maFonction);
	$('H2').on('click', maFonctionH2);
	$('img').on('click', maFonctionImage);
});

</script>


















<?php

/*require( '../vue/js/popup.js');*/
if (isset($GLOBALS['tb_require'])){
	foreach($GLOBALS['tb_require'] as $key => $element){
		require $element;
	};
};
?>




