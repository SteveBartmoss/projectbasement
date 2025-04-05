import './App.css';
import { Login } from './pages/Login';
import { RouterMain } from './routes/routerMain';
import { MainContainer } from './ui/containers/Containers';

function App() {
  return (
    <MainContainer>
      <RouterMain />
    </MainContainer>
  );
}

export default App;
