function codescript(codeString, marginChar = "|", spaceCount= 4) {
	// Handle margins
	let margins = new RegExp(`^[^${marginChar}]*\\|+/gm`);
	codeString = codeString.replace(margins, "");
	
	// Handle tabs
	codeString = codeString.replace(/\\t/gm, "&nbsp;".repeat(spaceCount));
	
	return codeString
}

module.exports = codescript;

module.exports = function dsl(codeTag) {
	codeTag.innerHTML = codescript(codeTag.innerHTML)
};