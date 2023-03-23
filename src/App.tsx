import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Header from './components/Header';
import Profile from './components/Profile';
import { AuthState } from './store/auth';

function App() {
  const { isAuthenticated } = useSelector(
    (state: { auth: AuthState }) => state.auth,
  );

  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <Profile />}
    </>
  );
}

export default App;
