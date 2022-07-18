import {IoChevronForwardCircleOutline} from 'react-icons/io5';

const storys = [
	{
		image: "./assets/img/meowed.svg",
		user: "Meowed",
	},
	{
		image: "./assets/img/barked.svg",
		user: "Barked",
	},
	{
		image: "./assets/img/nathanwpylestrangeplanet.svg",
		user: "nathanwpylestrangeplanet",
	},
	{
		image: "./assets/img/wawawicomics.svg",
		user: "wawawicomics",
	},
	{
		image: "./assets/img/respondeai.svg",
		user: "respondeai",
	},
	{
		image: "./assets/img/filomoderna.svg",
		user: "filomoderna",
	},
	{
		image: "./assets/img/memeriagourmet.svg",
		user: "memeriagourmet",
	},
	{
		image: "./assets/img/meowed.svg",
		user: "Meowed",
	}
];

export default function Stories() {
	return (
		<>
			<div class="stories">
				
				{storys.map((story) => (
					<Story image={story.image} user={story.user} />
				))}

				<div class="setinha">
					<IoChevronForwardCircleOutline />
				</div>
			</div>
		</>
	);
}

function Story(props) {
	return (
		<>
			<div class="story">
				<div class="imagem">
					<img src="{props.image}" alt="imagem" />
				</div>
				<div class="usuario">{props.user}</div>
			</div>
		</>
	);
}
