function codescript(codeString, marginChar = "|", spaceCount = 4) {
	codeString.csMargins(marginChar);
	
	codeString.csNewlines();
	
	codeString.csTabs(spaceCount);
	
	return codeString
}

function dsl(codeTag) {
	codeTag.innerHTML = codescript(codeTag.innerHTML)
}

String.prototype.csMargins = function (marginChar = "|") {
	let margins = new RegExp(`^[^${marginChar}]*\\|+/gm`);
	
	return this.replace(margins, "");
};

String.prototype.csNewlines = function () {
	let newlines = new RegExp(`/$/gm`);
	
	return this.trim().replace(newlines, "<br/>")
};

String.prototype.csTabs = function (spaceCount = 4) {
	let tabs = new RegExp(`/\\\\t/gm`);
	
	return this.replace(tabs, "&nbsp;".repeat(spaceCount));
};

module.exports = {
	codescript: codescript(),
	dsl:        dsl()
};