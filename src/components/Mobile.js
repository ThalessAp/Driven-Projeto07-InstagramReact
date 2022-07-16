import { IoLogoInstagram, IoPaperPlaneOutline } from "react-icons/io";

export default function Mobile() {
	return (
		<>
			<div class="navbar-mobile">
				<Logo />
			</div>
		</>
	);
}

function Logo() {
	return (
		<>
			<div class="logo-mobile">
				<IoLogoInstagram />
			</div>

			<div class="instagram-mobile">
				<img src="./assets/img/logo.png" alt="logo-mobile" />
			</div>

			<div class="icones-mobile">
				<IoPaperPlaneOutline />
			</div>
		</>
	);
}
