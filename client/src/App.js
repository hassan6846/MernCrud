import './App.css';
import { Route, Routes } from 'react-router-dom';
// Components
import Register from './Pages/Register';
import Homepage from './Pages/Home';
import EditPage from './Pages/Edit';
import DetailsPage from './Pages/Details';
function App() {
  return (
   <Routes>
    <Route path='/' Component={Homepage} />
  <Route path='/register' Component={Register} />
  <Route path='/edit' Component={EditPage} />
  <Route path='/details' Component={DetailsPage} />
 
   </Routes>
  );
}

export default App;
