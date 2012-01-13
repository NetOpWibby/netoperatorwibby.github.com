// ==UserScript==
// @name          Mac OSX Font Rendering for Windows Based Browsers
// @namespace     http://userstyles.org
// @description	  The windows browsers render the fonts based on the normal sub-pixel rendering without implementing Font smoothing, anti-aliasing as noticeable as Mac OSX. This tweak applies text to be displayed more anti-aliased using CSS3 property. So modern browsers supporting CSS3 and userstyle support would be able to support it. ;)
// @author        chiaotzu
// @homepage      http://userstyles.org/styles/31924
// @include       http://*
// ==/UserScript==
(function() {
var css = "body, input, .navigator-toolbox, .toolbarbutton-text, .sidebar-title{\ntext-shadow: 0px 0.5px 2px #D1D1D1;\n}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();
