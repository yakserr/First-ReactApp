import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Home() {
	const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`;

	let products = useAxiosGet(url);

	let content = null;

	if (products.error) {
		content = (
			<p>There was an error loading the product please try again later</p>
		);
	}

	if (products.loading) {
		content = <Loader />;
	}

	if (products.data) {
		content = products.data.map((product) => (
			<div key={product.id}>
				<ProductCard product={product} />
			</div>
		));
	}
	return (
		<div>
			<h1 className="font-bold text-2xl mb-3">Best Sellers</h1>

			{content}
		</div>
	);
}

export default Home;
