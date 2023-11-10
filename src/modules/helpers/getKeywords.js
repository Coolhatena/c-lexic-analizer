import separateWords from './separateWords';
import dictionarys from './dictionarys';

let getKeywords = (text) => {
	let words = separateWords(text);
	let tokenCount = words.length
	let resultText = "";
	const dictionaryNumber = dictionarys.length - 1
	let idCount = Array(dictionarys.length + 2).fill(0); 
	words.forEach(word => {
		let i = 0;
		let dictCoincidence = false;
		while (i <= dictionaryNumber){
			if (word in dictionarys[i]){
				let value = dictionarys[i][word];
				let entry = `${word}: ${value}\n`;
				resultText += entry;
				idCount[i] += 1;
				dictCoincidence = true;
				break
			}
			i++; 
		}

		if(!dictCoincidence) {
			let entry;
			if (word.match(/[0-9]+/)){
				entry = `${word}: NUM\n` 
				idCount[6] += 1;
			} else {
				entry = `${word}: ID\n`;
				idCount[7] += 1;
			}
			resultText += entry;
		}
	});

	return [ resultText, tokenCount, idCount ]
}

export default getKeywords;