export const triggerDownload = (stringContent = '', filename = 'download.blob') => {
	const blob = new Blob([stringContent], { type: 'text/plain' })
	const url = URL.createObjectURL(blob)
	const a = document.createElement('a')
  
	a.href = url
	a.download = filename
	a.click()
	URL.revokeObjectURL(url)
};
