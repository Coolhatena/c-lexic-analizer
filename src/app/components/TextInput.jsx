import React, { useState } from 'react'

import { analizeText } from '@/modules/helpers/analizeText';
import { triggerDownload } from '@/modules/helpers/triggerDownload';


export const TextInput = ({ confirmSuccess }) => {
	const [textAreaValue, setTextAreaValue] = useState("");
	const [tokenCount, setTokenCount] = useState(0)

	const handleProcessing = () => {
		if (textAreaValue === ""){
			alert("Por favor, ingrese texto en el area de escritura.");
			return;
		};

		let [ result, tokensNum ] = analizeText(textAreaValue);
		setTokenCount(tokensNum);
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
