import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faLinkedin,
faGithub,
faXTwitter,
faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
	const [phone, setPhone] = useState(false)
	const [email, setEmail] = useState(false)
	return (
		<div className='mx-5 px-5'>
			<h3 className='projects_set text-center p-3'>Contact me</h3>
			<div className="d-flex justify-content-center gap-5 contact_container">
				<button onClick={() => setPhone(!phone)} className='contact_btn text-info fs-1 pe-4'><FontAwesomeIcon icon={faPhone} /></button>
				

				<button onClick={() => setEmail(!email)} className='contact_btn text-info fs-1 pe-4'><FontAwesomeIcon icon={faEnvelope} /></button>
				

				<a href="https://linkedin.com/in/ayolenz" target="blank" className="text-info fs-1 pe-4">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>

				<a href="https://github.com/Ayo-lenz" target="blank" className="text-info fs-1 pe-4">
					<FontAwesomeIcon icon={faGithub} />
				</a>

				<a href="https://x.com/James_Ayolenz?t=MucelmcuabO7gDn0eePlDA&s=08" target="blank" className="text-info fs-1 pe-4">
					<FontAwesomeIcon icon={faXTwitter} />
				</a>

				<a href="https://www.facebook.com/AYjohnny?mibextid=ZbWKwL" target="blank" className="text-info fs-1">
					<FontAwesomeIcon icon={faFacebook} />
				</a>
			</div>
			<div className='text-center mt-4'>{phone && <PhoneNo />}</div>
			<div className='text-center'>{email && <Email />}</div>

		</div>
	)
}

export default Contacts

const PhoneNo = () => {
	return(
		<div>
			<h4>08136095808</h4>
			<h4>07033143433</h4>
		</div>
	)
}

const Email = () => {
	return(
		<h4>oluwasegunayodeji38@gmail.com</h4>
	)
}