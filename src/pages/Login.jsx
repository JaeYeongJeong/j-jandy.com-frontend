import { Form, useActionData, useNavigate } from 'react-router-dom';
import menuIcon from '../assets/icon/menu-burger.png';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated } from '../../redux/actions';
import { checkSession, login } from '../Util/http';
import { useEffect } from 'react';

export default function Login() {
  const actionData = useActionData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useSelector((state) => state.isMobile);

  useEffect(() => {
    if (actionData && actionData.isAuthenticated) {
      dispatch(setAuthenticated(actionData.isAuthenticated));
      navigate(-1);
    }
  }, [actionData, dispatch]);

  return (
    <div className="note-form-container">
      {isMobile && (
        <>
          <button className="menu-button" onClick={toggleNav}>
            <img className="icon" src={menuIcon} alt="Menu Icon" />
          </button>
        </>
      )}
      <Form method="post" action="/login">
        <div className="note-form-chd">
          <label htmlFor="id">ID</label>
          <input id="id" type="text" name="id" required />
        </div>
        <div className="note-form-chd">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" name="password" required />
        </div>
        <div className="note-form-chd">
          <div className="note-footer-container">
            <button type="submit">Login</button>
          </div>
        </div>
      </Form>
      {actionData?.error && <p style={{ color: 'red' }}>{actionData.error}</p>}
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get('id');
  const password = formData.get('password');

  try {
    await login({ id, password });
    const sessionData = await checkSession();
    return { isAuthenticated: sessionData.isAuthenticated };
  } catch (error) {
    throw new Error(
      error.message || 'Something went wrong while login action.'
    );
  }
}
