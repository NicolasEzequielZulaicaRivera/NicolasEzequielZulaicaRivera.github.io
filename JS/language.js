

if( !sessionStorage ['_lang'] )sessionStorage ['_lang']='EN';


function change_lang(lang){
	
	if( sessionStorage['_lang'] == lang) return;
	
	sessionStorage['_lang'] = lang;
	alert(" Work in Progress ");
}

window.addEventListener('load', (event) => {
  change_lang(sessionStorage['_lang']);
});