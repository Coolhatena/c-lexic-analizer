import React from 'react'

export const IdCounter = ({ countsByType }) => {

  return (
	<div className='textbox-token-id-count-container'>
		<p className='textbox-token-id-count'>PR: {countsByType[0]}</p> 
		<p className='textbox-token-id-count'>OL: {countsByType[1]}</p> 
		<p className='textbox-token-id-count'>OR: {countsByType[2]}</p> 
		<p className='textbox-token-id-count'>OM: {countsByType[3]}</p> 
		<p className='textbox-token-id-count'>OA: {countsByType[4]}</p> 
		<p className='textbox-token-id-count'>OS: {countsByType[5]}</p> 
		<p className='textbox-token-id-count'>NUM: {countsByType[6]}</p>
		<p className='textbox-token-id-count'>ID: {countsByType[7]}</p>
	</div>
  )
}
