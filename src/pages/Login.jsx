import { Form, redirect, useActionData } from 'react-router-dom';
import apiUrl from '../Util/api-url';
import menuIcon from '../assets/icon/menu-burger.png';
import { useSelector } from 'react-redux';

export default function Login() {
  const actionData = useActionData();
  const isMobile = useSelector((state) => state.isMobile);

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
  const url = `${apiUrl}/login`;
  const formData = await request.formData();
  const id = formData.get('id');
  const password = formData.get('password');

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, password }),
      credentials: 'include',
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || 'Invalid credentials' };
    }

    return redirect('/');
  } catch (error) {
    return { error: 'An unexpected error occurred. Please try again later.' };
  }
}
