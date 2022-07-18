import { IoChevronForwardCircleOutline } from "react-icons/io5";

const storys = [
	{
		image: "../../public/assets/img/gato-telefone.svg",
		user: "Meowed",
	},
	{
		image: "../../public/assets/img/barked.svg",
		user: "Barked",
	},
	{
		image: "../../public/assets/img/nathanwpylestrangeplanet.svg",
		user: "nathanwpylestrangeplanet",
	},
	{
		image: "../../public/assets/img/wawawicomics.svg",
		user: "wawawicomics",
	},
	{
		image: "../../public/assets/img/respondeai.svg",
		user: "respondeai",
	},
	{
		image: "../../public/assets/img/filomoderna.svg",
		user: "filomoderna",
	},
	{
		image: "../../public/assets/img/memeriagourmet.svg",
		user: "memeriagourmet",
	},
	{
		image: "../../public/assets/img/meowed.svg",
		user: "Meowed",
	},
];

export default function Stories() {
	return (
		<>
			<div className="stories">
				{storys.map((story) => (
					<Story image={story.image} user={story.user} />
				))}

				<div className="setinha">
					<IoChevronForwardCircleOutline />
				</div>
			</div>
		</>
	);
}

function Story(props) {
	return (
		<>
			<div className="story">
				<div className="imagem">
					<img src="{props.image}" alt="imagem" />
				</div>
				<div className="usuario">{props.user}</div>
			</div>
		</>
	);
}
