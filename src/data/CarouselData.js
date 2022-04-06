export const data = [
	{
		title: 'JustAsk (Flutter Final Year Project)',
		description:
			'Created a Full Stack Food App which aims to tackle Food Insecurity. Users are able to request for food whenever they require. This app is powered by Flutter and Google Firebase.',
		image: '/assets/foodApp.png',
		link: 'https://www.youtube.com/watch?v=ykfzXZyxBpU&t=12s'
	},
	{
		title: 'RaspberryPi Car',
		description: 'Built a RaspberryPi car with heat sensors and a camera attached. The concept originated during the start of Covid-19 and this car will be used by Airport Staff to drive down the aisle of planes to check passengers temperatures to ensure they have no fever before allowing them to disembark.',
		image: '/assets/raspberryPi.png',
		link: 'https://github.com/alistairlau?tab=repositories'
	},
	{
		title: 'FastAPI Project',
		description: 'Develop Backend API for a Social Media App using FastAPI and PostGresSQL. Supports user creation using email and password and allows user to Create, Update, Delete posts.',
		image: '/assets/fastAPI.png',
		link: 'https://github.com/alistairlau/fastapi'
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};