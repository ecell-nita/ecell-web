import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/" exact element={<Home/>}/>
         <Route path="*" element={<NotFound/>}/>
       </Routes>
    </div>
  );
}

export default App;
