import POPOSCount from '../POPOSCount'
import './Footer.css'

function Footer() {
	const year = new Date().getFullYear()
	return (
		<div className="Footer" aria-label={'Footer'}>
			© {year}
			<POPOSCount />
		</div>
	)
}

export default Footer