let separateWords = (text) => {
	// const regex = /([a-zA-Z0-9]+)/g;
	const regex = /(,|\;|(.=)|(\{|\}|\[|\]|\(|\))|(\+|-|\*|\/|%)|(!|>|<|&&|\|\|)|("[a-zA-Z ,!]+")|[a-zA-Z_]+|[0-9]+)/g;
	let words = text.match(regex);
	// console.log(words)
	return words
}

export default separateWords;