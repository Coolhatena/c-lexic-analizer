'use client'
import { useState } from 'react';

import { DropFileInput } from './components/DropFileInput';
import { TextInput } from './components/TextInput';


export default function Home() {
	const [resultSuccess, setResultSuccess] = useState(false)
	const [inputType, setInputType] = useState("text")

	const swapInputType = (inputType) => {
		setInputType(inputType);
		setResultSuccess(false);
	};

	return (
		<main>
			<div className='input-container'>
				<div className='input-selection-container'>
					<button className='input-selection-button' onClick={() => swapInputType("text")}>Texto</button>
					<button className='input-selection-button' onClick={() => swapInputType("file")}>Archivo</button>
				</div>
				{ inputType == "text" ? <TextInput confirmSuccess={setResultSuccess} /> : null }
				{ inputType == "file" ? <DropFileInput confirmSuccess={setResultSuccess} /> : null }
				
			</div>
			{ resultSuccess ? <p className='result-text text-lg'>Archivo generado con exito, descargando...</p> : null }
		</main>
	)
}
