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
			<div className="navbar-mobile">
				{/* <Logo /> */}
				<Footer />
			</div>
		</>
	);
}

// function Logo() {
// 	return (
// 		<>
// 			<div className="logo-mobile">
// 				<IoLogoInstagram />
// 			</div>

// 			<div className="instagram-mobile">
// 				<img src="./assets/img/logo.png" alt="logo-mobile" />
// 			</div>

// 			<div className="icones-mobile">
// 				<IoPaperPlaneOutline />
// 			</div>
// 		</>
// 	);
// }

function Footer() {
	return (
		<>
			<div className="fundo-mobile">
				<IoHome />
				<IoSearch />
				<IoAddCircleOutline />
				<IoHeartOutline />
				<IoPersonOutline />
			</div>
		</>
	);
}
