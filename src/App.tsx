import { GlobalStorage } from "./Global/GlobalStorage";
import Home from './pages/home';
function App() {
  return (
    <div>
      <GlobalStorage>
      <Home/>
      </GlobalStorage>
    </div>
  );
}

export default App;
