import Navbar from "./Navbar";
import Stories from "./Stories";
import Feed from "./Feed";
import Mobile from "./Mobile";

console.log("App.js");
function App() {
	return (
		<>
			<Navbar />
			<div className="corpo">
				<Stories />
				<Feed />
			</div>
			<Mobile />
		</>
	);
}

export default App;
