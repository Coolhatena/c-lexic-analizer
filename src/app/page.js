'use client'
import { useState } from 'react';

import DropFileInput from './components/DropFileInput';


export default function Home() {
	const [resultValue, setResultValue] = useState("")
	const [inputType, setInputType] = useState("text")

	return (
		<main>
			<div className='input-container'>
				<div className='input-selection-container'>
					<button className='input-selection-button'>Texto</button>
					<button className='input-selection-button'>Archivo</button>
				</div>
				<DropFileInput />
			</div>
			<textarea id="char-box" className="txtbox" value={resultValue} readOnly></textarea>
		</main>
	)
}
