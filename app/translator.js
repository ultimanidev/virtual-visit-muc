
var Translator_DATA = {
  "en-us": {
	"Create":"Create",
	"Tooltips":"Tooltips",
	"OffInfo":"Off Info",
	"OffLink":"Off Link",
	"Chat":"Chat",
	"InitialView":"InitialView",
  },
  "zh-CN" :{
	 "Create":"制作",
	"Tooltips":"提示",
	"OffInfo":"关信息",
	"OffLink":"关链接",
	"Chat":"聊天",
	"InitialView":"回始点",
  },  
  "fr-FR" :{
	 "Create":"Créer",
	"Tooltips":"Info-bulles",
	"OffInfo":"Hors Info",
	"OffLink":"Lien désactivé",
	"Chat":"Chat",
	"InitialView":"Vue initiale",
  }
}

function changeLanguage()
 {
			  const languageSelect = document.getElementById('language-select');
			  const selectedLanguage = languageSelect.value;
			  /* const url = new URL(window.location.href);
			  
			  url.searchParams.set('lang', selectedLanguage); // Set lang parameter in URL
			 
			 // Check if the current URL ends with a '#'
				if (url.href.endsWith('#')) {
				  // Remove the trailing '#' and reload the page
				 window.location.href = url.href.slice(0, -1);	
				} */
            	 
             var createPanoSpan=  document.getElementById('createPanoSpan');
			 var tooltipsSpan=  document.getElementById('tooltipsSpan');
			 var offInfoSpan=  document.getElementById('offInfoSpan');
			 var offLinkSpan=  document.getElementById('offLinkSpan');
		     var chat_onlineSpan=  document.getElementById('chat_onlineSpan');
			 var initialViewSpan=  document.getElementById('initialViewSpan');
			 
			 if (createPanoSpan) {createPanoSpan.textContent = translate("Create", selectedLanguage, "Create")};
			  if (tooltipsSpan) {tooltipsSpan.textContent = translate("Tooltips", selectedLanguage, "Tooltips")};
			   if (offInfoSpan) {offInfoSpan.textContent = translate("OffInfo", selectedLanguage, "OffInfo")};
			    if (offLinkSpan) {offLinkSpan.textContent = translate("OffLink", selectedLanguage, "OffLink")};
				 if (chat_onlineSpan) {chat_onlineSpan.textContent = translate("Chat", selectedLanguage, "Chat")};
				  if (initialViewSpan) {initialViewSpan.textContent = translate("InitialView", selectedLanguage, "InitialView")};
	 }
			

function translate(keyword, culture, defaultText) {
  // Check if the requested culture exists in Translator_DATA
  if (Translator_DATA[culture] && Translator_DATA[culture][keyword]) {
    return Translator_DATA[culture][keyword];
  } else {
    // If the translation is not found, return the default text
    return defaultText || keyword; // Return defaultText or the original keyword
  }
}
function getLanguageFromQueryString() {
    var url = window.location.href; // Get the current URL
	// Check if the current url ends with a '#'
				if (url.endsWith('#')) {
				  // Remove the trailing '#' and reload the page
				 url = url.slice(0, -1);	
				}
    var urlParams = new URLSearchParams(url.split('?')[1]); // Extract query string parameters
    const defaultLang = navigator.language || navigator.userLanguage || 'en-US';
            	 
    if (urlParams.has('lang')) {
		var lang=urlParams.get('lang');	
		
		setTimeout(function() {
			var lang = urlParams.get('lang');
			var allowedLangs = ['en-US', 'zh-CN'];

			if (allowedLangs.includes(lang)) {
				document.getElementById('language-select').value = lang;
			} else {
				document.getElementById('language-select').value = defaultLang;
			}
		    
				

		}, 3000);          
		
        return lang // Return the value of the 'lang' parameter
    } else {       
		// Set selection to default language based on browser's language
		
		setTimeout(function() {
			document.getElementById('language-select').value
			if (defaultLang==="en-US"||defaultLang==="zh-CN")
				document.getElementById('language-select').value=defaultLang;
		},3000);
		
        return defaultLang;
    }
		
}
// Get the user's browser language
userLang = getLanguageFromQueryString();
console.log('lang',userLang);

