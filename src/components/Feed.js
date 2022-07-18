import Posts from "./Posts";
import Stories from "./Stories";
import Aside from "./Aside";

export default function Feed() {
	return (
		<>
			<div class="corpo">
				<div class="esquerda">
					<Stories />
					<Posts />
                </div>
                <Aside />
			</div>
		</>
	);
}
