import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
		link: 'https://www.linkedin.com/in/alistairlau/'
	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog (Coming Soon)',],
	},
];