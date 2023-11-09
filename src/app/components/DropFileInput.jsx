import React, { useState } from 'react'

import { analizeText } from '@/modules/helpers/analizeText';
import { triggerDownload } from '@/modules/helpers/triggerDownload';


export const DropFileInput = ({ confirmSuccess }) => {
	const [fileText, setFileText] = useState('');
	const [tokenCount, setTokenCount] = useState(0);

	const dropAreaDragOver = (e) => {
		e.preventDefault();
		e.target.style.borderColor = "blue";
	} 

	const dropAreaDragLeave = (e) => {
		e.target.style.borderColor = "#ccc";
	} 

	const dropAreaDrop = (e) => {
		e.preventDefault();
		e.target.style.borderColor = "#ccc";
		const file = e.dataTransfer.files[0];
		handleFile(file);
	} 

	const fileInputChange = (e) => {
		const file = e.test.files[0];
		handleFile(file);
	}

	let handleFile = (file) => {
		if (file) {
			if (file.name.endsWith(".txt") || file.name.endsWith(".c")) {
				const reader = new FileReader();
				reader.onload = (event) => {
					setFileText(event.target.result)
					let [ result, tokensNum ] = analizeText(event.target.result);
					setTokenCount(tokensNum);
					triggerDownload(result, 'resultado.txt');
					confirmSuccess(true);
				};
				reader.readAsText(file);
			} else {
				alert("Por favor, selecciona un archivo .txt o .c");
			}
		}
	};


	return (
		<div className='drop-area-container'>
			<div id="drop-area" onDragOver={dropAreaDragOver} onDragLeave={dropAreaDragLeave} onDrop={dropAreaDrop}>
				Arrastra y suelta un archivo .txt aquí
				<input type="file" id="file-input" onChange={fileInputChange} style={{display: "none"}} accept=".txt"/>
			</div>
			{ 
				tokenCount ? 
					<div className='textbox-token-count-container'>
						<p className='textbox-token-count'>Cantidad de tokens: {tokenCount}</p> 
					</div>
					: null 
			}
			{
				fileText ? 
					<textarea className="textbox" wrap='off' value={fileText} readOnly></textarea> 
					: null
			}
		</div>
	)
};