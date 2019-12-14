function codescript(codeString, marginChar = "|", spaceCount = 4) {
	codeString.csMargins(marginChar);
	
	codeString.csNewlines();
	
	codeString.csTabs(spaceCount);
	
	return codeString
}

function dsl(codeTag, ...options) {
	codeTag.innerHTML = codescript(codeTag.innerHTML, ...options)
}

function formatAll(...options) {
	let tags = document.getElementsByTagName("code");
	
	for (let i = 0; i < tags.length; i++) {
		dsl(tags[i], ...options)
	}
}

function formatTagged(...options) {
	let classes = document.getElementsByClassName("codescript");
	
	for (let i = 0; i < classes.length; i++) {
		dsl(classes[i], ...options)
	}
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
	dsl:        dsl(),
	format:     formatTagged(),
	formatAll:  formatAll()
};