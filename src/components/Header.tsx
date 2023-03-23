import { useSelector, useDispatch } from 'react-redux';
import { AuthState, logout } from '../store/auth';
import { inputReset } from '../store/input';
const Header = () => {
  const { isAuthenticated } = useSelector(
    (state: { auth: AuthState }) => state.auth,
  );

  const dispatch = useDispatch();

  const logoutHandler = () => {
    localStorage.removeItem('email');
    dispatch(inputReset());
    dispatch(logout());
  };

  return (
    <header className="header">
      <h1 className="header__heading">Redux Demo</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            {isAuthenticated && (
              <a className="header__nav-link" href="/">
                Products
              </a>
            )}
          </li>
          <li className="header__nav-item">
            {isAuthenticated && (
              <a className="header__nav-link" href="/">
                Stores
              </a>
            )}
          </li>
          {isAuthenticated && (
            <button onClick={logoutHandler} className="button">
              Logout
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
