import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Header />

				<div className="p-3">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/product/:id" element={<Product />} />
					</Routes>
				</div>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
