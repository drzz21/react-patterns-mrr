import { HOC } from './components/HOC/HOC.jsx';
import { PresentationalContainer } from './components/PRESENTATIONAL_AND_CONTAINER/PresentationalContainer.jsx';
import {Provider} from './components/Provider/Provider.jsx';
import { Compound } from './components/Compound/Compound.jsx';

function App() {
	return (
		<div className="App">
			{/* <HOC /> */}
			{/* <PresentationalContainer /> */}
			{/* <Provider /> */}
			<Compound />
		</div>
	);
}

export default App;

