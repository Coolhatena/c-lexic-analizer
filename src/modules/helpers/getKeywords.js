import separateWords from './separateWords';
import dictionarys from './dictionarys';

let getKeywords = (text) => {
	let words = separateWords(text);
	// console.log(words)
	let resultText = "";
	const dictionaryNumber = dictionarys.length - 1
	words.forEach(word => {
		let i = 0;
		let dictCoincidence = false;
		while (i <= dictionaryNumber){
			// console.log(i)
			// console.log(dictionaryNumber)
			// console.log(dictionarys[i])
			if (word in dictionarys[i]){
				let value = dictionarys[i][word];
				let entry = `${word}: ${value}\n`;
				// console.log(entry);
				resultText += entry;
				dictCoincidence = true;
				break
			}
			i++; 
		}

		if(!dictCoincidence) {
			let entry = (word.match(/[0-9]+/)) ? `${word}: NUM\n` :`${word}: ID\n`;
			// console.log(entry);
			resultText += entry;
		}
	});

	return resultText
}

export default getKeywords;