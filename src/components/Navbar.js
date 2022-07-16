import { IoLogoInstagram, IoMdPaperPlane, IoIosCompass, IoIosHeart, IoIosPerson,  } from "react-icons/io";

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
  return(
    <>
      <div class="logo">
        <IoLogoInstagram />
        <div class="separador"></div>
        <img src="./assets/img/logo.png" alt="logo"/>
      </div>      
    </>
  )
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
  return(
    <>
      <div class="icones">
        <IoMdPaperPlane />
        <IoIosCompass />
        <IoIosHeart />
        <IoIosPerson />
      </div>      
    </>
  )
}
