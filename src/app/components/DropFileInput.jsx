import React from 'react'

import automata from '../../modules/automata';
import getKeywords from '../../modules/helpers/getKeywords';


let DropFileInput = () => {
	let dropAreaDragOver = (e) => {
		e.preventDefault();
		e.target.style.borderColor = "blue";
	} 

	let dropAreaDragLeave = (e) => {
		e.target.style.borderColor = "#ccc";
	} 

	let dropAreaDrop = (e) => {
		e.preventDefault();
		e.target.style.borderColor = "#ccc";
		const file = e.dataTransfer.files[0];
		handleFile(file);
	} 

	let fileInputChange = (e) => {
		const file = e.test.files[0];
		handleFile(file);
	}

	let triggerDownload = (stringContent = '', filename = 'download.blob') => {
		const blob = new Blob([stringContent], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)
		const a = document.createElement('a')
	  
		a.href = url
		a.download = filename
		a.click()
		URL.revokeObjectURL(url)
	  }

	let handleFile = (file) => {
		if (file) {
			if (file.name.endsWith(".txt") || file.name.endsWith(".c")) {
				const reader = new FileReader();
				reader.onload = (event) => {
					let procesedText = automata(event.target.result);
					let result = getKeywords(procesedText);
					triggerDownload(result, 'resultado.txt')
		
				};
				reader.readAsText(file);
			} else {
				alert("Por favor, selecciona un archivo .txt o .c");
			}
		}
	};


	return (
		<div id="drop-area" onDragOver={dropAreaDragOver} onDragLeave={dropAreaDragLeave} onDrop={dropAreaDrop}>
			Arrastra y suelta un archivo .txt aquí
			<input type="file" id="file-input" onChange={fileInputChange} style={{display: "none"}} accept=".txt"/>
		</div>
	)
}

export default DropFileInput