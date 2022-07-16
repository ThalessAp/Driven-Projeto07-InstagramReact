import Posts from "./Posts";
import Stories from "./Stories";

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
