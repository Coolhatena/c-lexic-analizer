let separateWords = (text) => {
	// const regex = /([a-zA-Z0-9]+)/g;
	const regex = /(,|\;|=|(\{|\}|\[|\]|\(|\))|(\+|-|\*|\/|%)|(!|>|<|&|\|\|)|("[a-zA-Z ,!]+")|[a-zA-Z_]+([0-9]+)?|[0-9]+)/g;
	let words = text.match(regex);
	return words
}

export default separateWords;