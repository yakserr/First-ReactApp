import HelloWorld from "../Components/HelloWorld";

function Home() {
	return (
		<div>
			<h1 className="font-bold text-2xl mb-3">This is Home page</h1>

			<HelloWorld name="base" />
		</div>
	);
}

export default Home;
