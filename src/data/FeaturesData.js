import React from 'react';

import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { FaReact, FaAngular, FaPython } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiPostgresql  } from "react-icons/si";
import { AiFillHtml5 } from 'react-icons/ai';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'React',
		description: '',
		icon: iconStyle(FaReact),
		imgClass: 'one',
	},
	{
		name: 'Angular',
		description: '',
		icon: iconStyle(FaAngular),
		imgClass: 'two',
	},
	{
		name: 'Javascript',
		description: '',
		icon: iconStyle(IoLogoJavascript),
		imgClass: 'three',
	},
	{
		name: 'HTML5',
		description: '',
		icon: iconStyle(AiFillHtml5),
		imgClass: 'four',
	},
	{
		name: 'CSS3',
		description: '',
		icon: iconStyle(IoLogoCss3),
		imgClass: 'five',
	},
	{
		name: 'Flutter',
		description: '',
		icon: iconStyle(SiFlutter),
		imgClass: 'six',
	},
	{
		name: 'Python',
		description: '',
		icon: iconStyle(FaPython),
		imgClass: 'seven',
	},
	{
		name: 'Firebase',
		description: '',
		icon: iconStyle(SiFirebase),
		imgClass: 'eight',
	},
	{
		name: 'PostGres SQL',
		description: '',
		icon: iconStyle(SiPostgresql),
		imgClass: 'nine',
	},
];