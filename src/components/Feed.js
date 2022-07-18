import Posts from "./Posts";
import Stories from "./Stories";
import Aside from "./Aside";

export default function Feed() {
	return (
		<>
			<div className="corpo">
				<div className="esquerda">
					<Stories />
					<Posts />
				</div>
				<Aside />
			</div>
		</>
	);
}
