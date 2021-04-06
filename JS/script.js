function toggle_display( element_id , type ){
	let _element = document.getElementById(element_id);
	if( _element.style.display == "none" ) _element.style.display = type;
	else _element.style.display = "none";
}

if( !sessionStorage ['_theme'] )sessionStorage ['_theme']='light';
function toggleTheme(){
	if( sessionStorage ['_theme']=='light' ){ 
		sessionStorage ['_theme']='dark'
	} else {
		sessionStorage ['_theme']='light'
	}
	document.getElementsByTagName('html')[0].dataset.theme = sessionStorage ['_theme'];
}

window.addEventListener('load', (event) => {
  toggleTheme();toggleTheme();
});