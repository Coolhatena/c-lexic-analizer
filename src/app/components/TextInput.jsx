import React, { useState } from 'react'

import { analizeText } from '@/modules/helpers/analizeText';
import { triggerDownload } from '@/modules/helpers/triggerDownload';


export const TextInput = ({ confirmSuccess }) => {
	const [textAreaValue, setTextAreaValue] = useState("")

	const handleProcessing = () => {
		if (textAreaValue === ""){
			alert("Por favor, ingrese texto en el area de escritura.");
			return
		};

		let result = analizeText(textAreaValue);
		triggerDownload(result, 'resultado.txt');
		confirmSuccess(true);
	};

	const handleTextAreaChange = event => {
		setTextAreaValue(event.target.value);
	};

	return (
		<div className='textbox-container'>
			<textarea className="textbox" wrap='off' value={textAreaValue} onChange={handleTextAreaChange} placeholder='Escriba aqui su codigo C...'></textarea>
			<div className='textbox-button-container'>
				<button className='textbox-button' onClick={handleProcessing}>Procesar</button>
			</div>
		</div>
	)
}
