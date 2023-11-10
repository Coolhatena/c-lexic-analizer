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
		"main": "PR",

		// Macros as PR
		"include": "PR",
		"printf": "PR",
		"scanf": "PR",
		"fprintf": "PR",
		"fscanf": "PR",
		"sprintf": "PR",
		"fseek": "PR",
		"fopen": "PR",
		"fclose": "PR",
		"getch": "PR",
	},

	// Logical operators
	{
		"&": "OL",
		"|": "OL",
		"!": "OL",
	},
	
	// Relational operators
	{
		"=": "OR",
		">": "OL",
		"<": "OL",
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
		":": "COLON",
		";": "SEMI",
		",": "COMA",
		".": "DOT"
	}
];

export default dictionarys;