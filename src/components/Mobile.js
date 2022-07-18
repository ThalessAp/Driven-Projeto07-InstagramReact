
import {
	// IoLogoInstagram,
	// IoPaperPlaneOutline,
	IoHome,
	IoSearch,
	IoAddCircleOutline,
	IoHeartOutline,
	IoPersonOutline,
} from "react-icons/io5";

export default function Mobile() {
	return (
		<>
			<div class="navbar-mobile">
				{/* <Logo /> */}
				<Footer />
			</div>
		</>
	);
}

// function Logo() {
// 	return (
// 		<>
// 			<div class="logo-mobile">
// 				<IoLogoInstagram />
// 			</div>

// 			<div class="instagram-mobile">
// 				<img src="./assets/img/logo.png" alt="logo-mobile" />
// 			</div>

// 			<div class="icones-mobile">
// 				<IoPaperPlaneOutline />
// 			</div>
// 		</>
// 	);
// }

function Footer() {
	return (
		<>
			<div class="fundo-mobile">
				<IoHome />
				<IoSearch />
				<IoAddCircleOutline />
				<IoHeartOutline />
				<IoPersonOutline />
			</div>
		</>
	);
}