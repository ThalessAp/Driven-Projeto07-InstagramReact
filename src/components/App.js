import Navbar from "./Navbar";
import Stories from "./Stories";
import Feed from "./Feed";
import Mobile from "./Mobile";


function App(){
    return(
        <>
            <Navbar />
            <div class="corpo">
                <Stories />
                <Feed />         
                
            </div>
                <Mobile />            

        </>
    )
}

export default App;