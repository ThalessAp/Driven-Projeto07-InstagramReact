export default function Aside() {
	return (
		<>
			<div className="sidebar">
				<User userImg="./assets/img/catanacomics.svg" />
				<Sugestions />
			</div>
		</>
	);
}

function User(props) {
	return (
		<>
			<div className="usuario">
				<img src={props.userImg} alt="usuario" />
				<div className="texto">
					<strong>catanacomics</strong>
					Catana
				</div>
			</div>
		</>
	);
}

function Sugestions() {
	const sugestions = [
		{
			userImg: "./assets/img/bad.vibes.memes.svg",
			userName: "bad.vibes.memes",
			razao: "Segue você",
		},
		{
			userImg: "./assets/img/chibirdart.svg",
			userName: "chibirdart",
			razao: "Segue você",
		},
		{
			userImg: "./assets/img/razoesparaacreditar.svg",
			userName: "razoesparaacreditar",
			razao: "Novo no Instagram",
		},
		{
			userImg: "./assets/img/adorable_animals.svg",
			userName: "adorable_animals",
			razao: "Segue você",
		},
		{
			userImg: "./assets/img/smallcutecats.svg",
			userName: "smallcutecats",
			razao: "Segue você",
		},
	];

	return (
		<>
			<div className="sugestoes">
				<div className="titulo">
					Sugestões para você
					<div>Ver tudo</div>
				</div>

				{sugestions.map((sugestion) => (
					<Suggestion
						userImg={sugestion.userImg}
						userName={sugestion.userName}
						razao={sugestion.razao}
					/>
				))}
			</div>
			<div className="links">
				Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
				Localizações • Contas mais relevantes • Hashtags • Idioma
			</div>
			<div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
		</>
	);
}

function Suggestion(props) {
	return (
		<>
			<div className="sugestao">
				<div className="usuario">
					<img src={props.userImg} alt="usuario" />
					<div className="texto">
						<div className="nome">{props.userName}</div>
						<div className="razao">{props.razao}</div>
					</div>
				</div>
				<div className="seguir">Seguir</div>
			</div>
		</>
	);
}
