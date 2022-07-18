import React from "react";
import {
	IoHeartOutline,
	IoChatbubbleOutline,
	IoPaperPlaneOutline,
	IoEllipsisHorizontalSharp,
} from "react-icons/io5";

console.log("Posts.js");
const postlist = [
	{
		userImage: "./assets/img/meowed.svg",
		userName: "meowed",
		image: "./assets/img/gato-telefone.svg",
		likerImage: "./assets/img/respondeai.svg",
		likerName: "respondeai",
	},
	{
		userImage: "./assets/img/barked.svg",
		userName: "barked",
		image: "./assets/img/dog.svg",
		likerImage: "./assets/img/adorable_animals.svg",
		likerName: "adorable_animals",
	},
	{
		userImage: "./assets/img/meowed.svg",
		userName: "meowed",
		image: "./assets/img/gato-telefone.svg",
		likerImage: "./assets/img/respondeai.svg",
		likerName: "respondeai",
	},
];

export default function Posts() {
	return (
		<>
			<div className="posts">
				{postlist.map((post) => (
					<div className="post">
						<Post
							userImage={post.userImage}
							userName={post.userName}
							image={post.image}
							likerImage={post.likerImage}
							likerName={post.likerName}
						/>
					</div>
				))}
			</div>
		</>
	);
}

function Post(props) {
	return (
		<>
			<Topo userImage={props.userImage} userName={props.userName} />
			<Conteudo image={props.image} />
			<Fundo likerImage={props.likerImage} likerName={props.likerName} />
		</>
	);
}

function Topo(props) {
	return (
		<>
			<div className="topo">
				<div className="usuario">
					<img src={props.userImage} alt="usuario" />
					{props.userName}
				</div>
				<div className="acoes">
					<IoEllipsisHorizontalSharp />
				</div>
			</div>
		</>
	);
}

function Conteudo(props) {
	return (
		<>
			<div className="conteudo">
				<img src={props.image} alt="post" />
			</div>
		</>
	);
}

function Fundo(props) {
	const [liked, setLiked] = React.useState(false);
	let color = {};
	if (liked) {
		color = { color: 'red' };
	} else {
		color = {color: 'black'};
	}

	function handleLike() {
		setLiked(!liked);
	}

	return (
		<>
			<div classNames="fundo">
				<div className="acoes">
					<div>
						<IoHeartOutline onClick={handleLike} style={color} />
						<IoChatbubbleOutline />
						<IoPaperPlaneOutline />
					</div>
				</div>
				<div className="curtidas">
					<img src={props.likerImage} alt="usuario" />
					<div className="texto">
						Curtido por <strong>{props.likerName}</strong> e{" "}
						<strong> outras xx pessoinhas</strong>
					</div>
				</div>
			</div>
		</>
	);
}
