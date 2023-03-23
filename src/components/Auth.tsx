import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { InputState, inputUpdate } from '../store/input';

const Auth = () => {
  const dispatch = useDispatch();

  const { enteredValue } = useSelector(
    (state: { input: InputState }) => state.input.email,
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputUpdate({ value: e.target.value }));
  };

  const submitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    localStorage.setItem('email', JSON.stringify(enteredValue));

    dispatch(login());
  };

  return (
    <main className="auth">
      <section>
        <form onSubmit={submitHandler}>
          <div className="auth__input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={changeHandler} />
          </div>
          <div className="auth__input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
