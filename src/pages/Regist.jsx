import { Form, redirect, useActionData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import menuIcon from '../assets/icon/menu-burger.png';
import { regist } from '../Util/http';

export default function Regist() {
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
      <Form method="post" action="/regist">
        <div className="note-form-chd">
          <label htmlFor="id">ID</label>
          <input id="id" type="id" name="id" required />
        </div>
        <div className="note-form-chd">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div className="note-form-chd">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </div>
        <div className="note-form-chd">
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
        </div>
        <div className="note-form-chd">
          <label htmlFor="name">Nickname</label>
          <input id="name" type="text" name="name" required />
        </div>
        <div className="note-form-chd">
          <div className="note-footer-container">
            <button type="submit">regist</button>
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
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirm-password');
  const name = formData.get('name');

  if (password !== confirmPassword) {
    return { error: 'check your password' };
  }

  try {
    await regist({ id, email, password, name });
  } catch (error) {
    throw new Error(
      error.message || 'Something went wrong while regist action.'
    );
  }

  return redirect('/notes');
}
