// CODESCRIPT
// EXPORTS
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

// PROTOTYPES
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

// CODESTYLE
// EXPORTS
function codestyle(el, options) {
	if (!!options.background) styleBackground(el, options.background);
	
	if (!!options.border) styleBorder(el, options.border);
	
	if (!!options.color) styleColor(el, options.color);
	
	if (!!options.display) styleDisplay(el, options.display);
	
	if (!!options.font) styleFont(el, options.font);
	
	if (!!options.padding) stylePadding(el, options.padding);
	
	if (!!options.margin) styleMargin(el, options.margin);
	
	if (!!options.width) styleWidth(el, options.width)
}

function styleAll(options) {
	styler(options, "code")
}

function styleTagged(options) {
	styler(options, ".codestyle")
}

// HELPERS
const styleDefault = {
	background: "#EEEEEE",
	font: "'Roboto Mono', monospace",
	border: "solid 1px gray",
	padding: "0 2px",
	display: "block",
	margin: "6px 0 0 6px",
	width: "fit-content",
};

function styler(options, selector) {
	let style = document.createElement("style");
	let styleSheet = style.sheet;
	document.head.appendChild(style);
	styleSheet.insertRule(`${selector} {
									background: ${(options.background) ? options.background : styleDefault.background};
									border: ${(options.border) ? options.border : styleDefault.border};
									color: ${(options.color) ? options.color : styleDefault.color};
									display: ${(options.display) ? options.display : styleDefault.display};
									font-family: ${(options.font) ? options.font : styleDefault.font};
									margin: ${(options.margin) ? options.margin : styleDefault.margin};
									padding: ${(options.padding) ? options.padding : styleDefault.padding};
									width: ${(options.width) ? options.width : styleDefault.width};
								}`);
}

function styleBackground(el, style) {
	if (!style) style = styleDefault.background;
	
	el.style.background = style
}

function styleBorder(el, style) {
	if (!style) style = styleDefault.border;
	
	el.style.border = style
}

function styleColor(el, style) {
	if (!style) style = styleDefault.color;
	
	el.style.color = style
}

function styleDisplay(el, style) {
	if (!style) style = styleDefault.display;
	
	el.style.display = style
}

function styleFont(el, style) {
	if (!style) style = styleDefault.font;
	
	el.style.fontFamily = style
}

function stylePadding(el, style) {
	if (!style) style = styleDefault.padding;
	
	el.style.padding = style
}

function styleMargin(el, style) {
	if (!style) style = styleDefault.margin;
	
	el.style.margin = style
}

function styleWidth(el, style) {
	if (!style) style = styleDefault.width;
	
	el.style.width = style
}

module.exports = {
	codescript:  codescript(),
	codestyle:   codestyle(),
	dsl:         dsl(),
	format:      formatTagged(),
	formatAll:   formatAll(),
	styleAll:    styleAll(),
	styleTagged: styleTagged()
};