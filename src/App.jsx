import { HOC } from './components/HOC/HOC.jsx';
// import { PresentationalContainer } from './components/PRESENTATIONAL_AND_CONTAINER/PresentationalContainer.jsx';
import {Provider} from './components/Provider/Provider.jsx';

function App() {
	return (
		<div className="App">
			{/* <HOC /> */}
			{/* <PresentationalContainer /> */}
			<Provider />
		</div>
	);
}

export default App;

