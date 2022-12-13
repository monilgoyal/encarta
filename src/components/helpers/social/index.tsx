import Link from 'next/link';
import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiMail } from 'react-icons/fi';

import { FiYoutube } from 'react-icons/fi';
type socialType = {
	extraClass: string;
	fill: string;
}

function Social(props: socialType) {
	return (
		<div className={props.extraClass + ' ' + 'inline-flex justify-center w-full md:ml-auto md:w-auto md:justify-start'}>
			<span className='mx-2'>
				<Link href="https://www.facebook.com/EncartaMBM?mibextid=ZbWKwL" >
					<a target="_blank" aria-label='linkedin'>
						<FiFacebook className='text-2xl hover:-translate-y-3 delay-150 duration-300' aria-hidden="true" stroke={props.fill} />
					</a>
				</Link>
			</span>
			<span className='mr-2'>
				<Link href="https://www.youtube.com/channel/UCWnoHVlyprKAwg-uMqWiQkg">
					<a target="_blank" aria-label="github">
						<FiYoutube className='text-[1.65rem] hover:-translate-y-3 delay-150 duration-300' aria-hidden="true" stroke={props.fill} />
					</a>
				</Link>
			</span>
			<span className='mx-2'>
				<Link href="https://www.instagram.com/encarta_mbm" >
					<a target="_blank" aria-label='instagram'>
						<FaInstagram className='text-2xl hover:-translate-y-3 delay-150 duration-300' aria-hidden="true" fill={props.fill} />
					</a>
				</Link>
			</span>
			<span className='mx-2'>
				<Link href="mailto:contact@encarta.tech" >
					<a target="_blank" aria-label='linkedin'>
						<FiMail className='text-2xl hover:-translate-y-3 delay-150 duration-300' aria-hidden="true" stroke={props.fill} />
					</a>
				</Link>
			</span>
		</div>
	)
}

Social.defaultProps = {
	extraClass: ''
}



export default Social