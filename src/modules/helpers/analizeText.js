import automata from '../../modules/automata';
import getKeywords from '../../modules/helpers/getKeywords';

export const analizeText = (text) => {
	let procesedText = automata(text);
	let result = getKeywords(procesedText);

	return result;
}