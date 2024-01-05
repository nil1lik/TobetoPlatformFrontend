import RouteDefinitions from "./components/Routes/RouteDefinitions";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";

function App() {
	return (
		<>
			<Navbar/>
			<RouteDefinitions />
			<Footer/>
		</>
	);
}

export default App;
