const dictionarys = [
	// Reserved words
	{
		"auto": "PR",
		"break": "PR",
		"case": "PR",
		"char": "PR",
		"const": "PR",
		"continue": "PR",
		"default": "PR",
		"do": "PR",
		"double": "PR",
		"else": "PR",
		"enum": "PR",
		"extern": "PR",
		"float": "PR",
		"for": "PR",
		"goto": "PR",
		"if": "PR",
		"int": "PR",
		"long": "PR",
		"register": "PR",
		"return": "PR",
		"short": "PR",
		"signed": "PR",
		"sizeof": "PR",
		"static": "PR",
		"struct": "PR",
		"switch": "PR",
		"typedef": "PR",
		"union": "PR",
		"unsigned": "PR",
		"void": "PR",
		"volatile": "PR",
		"while": "PR",
		"include": "PR",
		"main": "PR"
	},

	// Logical operators
	{
		"==": "OL",
		"!=": "OL",
		">": "OL",
		"<": "OL",
		">=": "OL",
		"<=": "OL",
		"&": "OL",
		"|": "OL",
		"!": "OL",
	},

	// Relational operators
	{
		"=": "OR",
		"+=": "OR",
		"-=": "OR",
		"*=": "OR",
		"/=": "OR",
		"%=": "OR",
	},

	// Math operators
	{
		"+": "OM",
		"-": "OM",
		"*": "OM",
		"/": "OM",
		"%": "OM",
	},

	// Agrupation operators
	{
		"(": "OA",
		")": "OA",
		"{": "OA",
		"}": "OA",
		"[": "OA",
		"]": "OA",
	},
	
	// Separation operators
	{
		";": "SEMI",
		",": "COMA"
	}
];

export default dictionarys;