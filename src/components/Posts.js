export default function Posts() {
	return (
		<>
			<div class="post">
				<Post />
			</div>
		</>
	);
}

function Post() {
	return (
		<>
			<Topo />
			<Conteudo />
			<Fundo />
		</>
	);
}

function Topo(props) {
	return (
		<>
			<div class="topo">
				<div class="usuario">
					<img src={props.userImage} alt="usuario" />
					{props.userName}
				</div>
				<div class="acoes">{/* TODO    icon ellipsis-horizontal */}</div>
			</div>
		</>
	);
}

function Conteudo(props) {
	return (
		<>
			<div class="conteudo">
				<img src={props.image} alt="post" />
			</div>
		</>
	);
}

function Fundo(props) {
	return (
		<>
			<div classs="fundo">
				<div class="acoes">
					<div>
						{/* TODO ICONS
                    	<ion-icon name="heart-outline"></ion-icon>
						<ion-icon name="chatbubble-outline"></ion-icon>
						<ion-icon name="paper-plane-outline"></ion-icon>
                     */}
					</div>
				</div>
                <div class="curtidas">
                    <img src={props.userImage} alt="usuario" />
                    <div class="texto">
                        Curtido por <strong>{props.userName}</strong> e{" "}
                        <strong> outras xx pessoinhas</strong>
                    </div>
                </div>
			</div>
		</>
	);
}
function teste() {
	return (
		<>
			<div class="post">
				<div class="topo">
					<div class="usuario">
						<img src="assets/img/meowed.svg" />
						meowed
					</div>
					<div class="acoes">
						<ion-icon name="ellipsis-horizontal"></ion-icon>
					</div>
				</div>

				<div class="conteudo">
					<img src="assets/img/gato-telefone.svg" />
				</div>

				<div class="fundo">
					<div class="acoes">
						<div>
							<ion-icon name="heart-outline"></ion-icon>
							<ion-icon name="chatbubble-outline"></ion-icon>
							<ion-icon name="paper-plane-outline"></ion-icon>
						</div>
						<div>
							<ion-icon name="bookmark-outline"></ion-icon>
						</div>
					</div>

					<div class="curtidas">
						<img src="assets/img/respondeai.svg" />
						<div class="texto">
							Curtido por <strong>respondeai</strong> e{" "}
							<strong>outras 101.523 pessoas</strong>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
