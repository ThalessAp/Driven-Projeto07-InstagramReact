import Navbar from "./Navbar";
import Stories from "./Stories";
import Posts from "./Posts";
//import Sidebar from "./Sidebar";
import Mobile from "./Mobile";


function App(){
    return(
        <>
            <Navbar />
            <div class="corpo">
                <Stories />
                <Posts />
                

            </div>

            <Mobile />            
        </>
    )
}

export default App;