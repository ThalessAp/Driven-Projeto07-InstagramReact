import {
	IoLogoInstagram,
	IoPaperPlaneOutline,
	IoCompassOutline,
	IoHeartOutline,
	IoPersonOutline,
} from "react-icons/io5";

export default function Navbar(){
    return(
      <>
        <div class="navbar">
          <div class="container">
            <Logo />
            <Searchbar />
            <Icons />
          </div>
        </div>
      </>
    )
}

function Logo(){
  return (
		<>
			<div class="logo">
				<IoLogoInstagram />
				<div class="separador"></div>
				<img src="./assets/img/logo.png" alt="logo" />
			</div>

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

function Searchbar(){
  return (
    <>
      <div class="pesquisa">
        <input type="text" placeholder="Pesquisar" />
      </div>
    </>
  )
}

function Icons(){
  return (
		<>
			<div class="icones">
				<IoPaperPlaneOutline />
				<IoCompassOutline />
				<IoHeartOutline />
				<IoPersonOutline />
			</div>
		</>
  );
}
