import React, { useState } from 'react'

import { analizeText } from '@/modules/helpers/analizeText';
import { triggerDownload } from '@/modules/helpers/triggerDownload';
import { IdCounter } from './IdCounter';


export const TextInput = ({ confirmSuccess }) => {
	const [textAreaValue, setTextAreaValue] = useState("");
	const [tokenCount, setTokenCount] = useState(0)
	const [countsByType, setCountsByType] = useState([])

	const handleProcessing = () => {
		if (textAreaValue === ""){
			alert("Por favor, ingrese texto en el area de escritura.");
			return;
		};

		let [ result, tokensNum, counts ] = analizeText(textAreaValue);
		setTokenCount(tokensNum);
		setCountsByType(counts);
		console.log(countsByType);
		console.log(countsByType[0]+countsByType[1]+countsByType[2]+countsByType[3]+countsByType[4]+countsByType[5])
		triggerDownload(result, 'resultado.txt');
		confirmSuccess(true);
	};

	const handleTextAreaChange = event => {
		setTextAreaValue(event.target.value);
	};

	const downloadTextInput = () => {
		if (textAreaValue === ""){
			alert("Por favor, ingrese texto en el area de escritura.");
			return;
		};
		triggerDownload(textAreaValue, 'Contenido.txt');
	}

	return (
		<div className='textbox-container'>
			{ 
				tokenCount ? 
				<div className='textbox-token-count-container'>
					<p className='textbox-token-count'>Cantidad de tokens: {tokenCount}</p>
					<IdCounter countsByType={countsByType} />
				</div>
					: null 
			}
			<textarea className="textbox" wrap='off' value={textAreaValue} onChange={handleTextAreaChange} placeholder='Escriba aqui su codigo C...'></textarea>
			<div className='textbox-button-container'>
				<button className='textbox-button' onClick={downloadTextInput}>Guardar</button>
				<button className='textbox-button' onClick={handleProcessing}>Procesar</button>
			</div>
		</div>
	)
}
