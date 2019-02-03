/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */


// You can delete this file if you're not using it
exports.onInitialClientRender = () => {
	// Test via a getter in the options object to see if the passive property is accessed
	window.supportsPassiveScroll = false;
	try {
		var opts = Object.defineProperty({}, 'passive', {
			get: function() {
				window.supportsPassiveScroll = true;
				return true
			}
		});
		window.addEventListener("testPassive", null, opts);
		window.removeEventListener("testPassive", null, opts);
	} catch (e) {}



	//onScroll();
    //document.addEventListener('scroll', onScroll, window.supportsPassiveScroll ? { passive: true } : false);

}