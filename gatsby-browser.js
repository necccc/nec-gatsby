/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
const REM = parseInt(window.getComputedStyle(document.documentElement)['font-size'], 10);

const getHeaderSkew = function (headerHeight, pageWidth) {
	let aa = headerHeight - window.scrollY - (4 * REM);
	let a = headerHeight - (headerHeight * 0.6);

	if (aa > a) {
		aa = a;
	}

	const skew = -1 * (Math.asin( 1 / (Math.sqrt(Math.pow(aa, 2) + Math.pow(pageWidth, 2)) / aa ))) * (180 / Math.PI);

	return skew >= 0 ? 0 : skew
}


const setHeader = () => {
	const header = document.querySelector('header')
	const pageWidth = document.body.clientWidth;

	const headerHeight = header.clientHeight;
	const headerSkew = getHeaderSkew(headerHeight, pageWidth)
	document.documentElement.style.setProperty(`--headerHeight`, headerHeight + 'px');
	document.documentElement.style.setProperty(`--headerSkew`, headerSkew + 'deg');

	if (headerSkew >= 0) {
		header.style.setProperty(`--headerPosition`, 'fixed');
		header.style.setProperty(`--headerTop`, `-${headerHeight}px`);
	} else {
		header.style.setProperty(`--headerPosition`, 'absolute');
		header.style.setProperty(`--headerTop`, '-4rem');
	}
}

const onScroll = function () {
	document.documentElement.style.setProperty(`--scrollTop`, window.scrollY + 'px');
	setHeader()



}


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



	onScroll();
    document.addEventListener('scroll', onScroll, window.supportsPassiveScroll ? { passive: true } : false);

}