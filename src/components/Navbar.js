import {
	IoLogoInstagram,
	IoPaperPlaneOutline,
	IoCompassOutline,
	IoHeartOutline,
	IoPersonOutline,
} from "react-icons/io5";

export default function Navbar() {
	return (
		<>
			<div className="navbar">
				<div className="container">
					<Logo />
					<Searchbar />
					<Icons />
				</div>
			</div>
		</>
	);
}

function Logo() {
	return (
		<>
			<div className="logo">
				<IoLogoInstagram />
				<div className="separador"></div>
				<img src="./assets/img/logo.png" alt="logo" />
			</div>

			<div className="logo-mobile">
				<IoLogoInstagram />
			</div>

			<div className="instagram-mobile">
				<img src="./assets/img/logo.png" alt="logo-mobile" />
			</div>

			<div className="icones-mobile">
				<IoPaperPlaneOutline />
			</div>
		</>
	);
}

function Searchbar() {
	return (
		<>
			<div className="pesquisa">
				<input type="text" placeholder="Pesquisar" />
			</div>
		</>
	);
}

function Icons() {
	return (
		<>
			<div className="icones">
				<IoPaperPlaneOutline />
				<IoCompassOutline />
				<IoHeartOutline />
				<IoPersonOutline />
			</div>
		</>
	);
}
