<script src="https://code.jquery.com/jquery-3.1.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>



<script>

var maFonction = function(event){
	alert("Hello World");
};


$(function(){
	$('p').on('click', maFonction);
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


/*	
    
    	var zone='section';
    	$(zone).hide();
    	$(zone).fadeIn(1000);
    	*/



