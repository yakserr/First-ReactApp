import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HelloWorld from "./Components/HelloWorld";

function App() {
	return (
		<div>
			<Header />

			<HelloWorld name="base" />

			<Footer />
		</div>
	);
}

export default App;
