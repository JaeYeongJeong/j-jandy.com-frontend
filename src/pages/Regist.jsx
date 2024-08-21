import { Form, redirect, useActionData } from 'react-router-dom';

let apiUrl = 'https://localhost:8080';

if (process.env.API_URL) {
  apiUrl = process.env.API_URL;
}

export default function Regist() {
  const actionData = useActionData();

  return (
    <div className="note-form-container">
      <Form method="post" action="/regist">
        <div className="note-form-chd">
          <label htmlFor="id">ID</label>
          <input id="id" type="id" name="id" required />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
          <label htmlFor="name">Nickname</label>
          <input id="name" type="text" name="name" required />
        </div>
        <button type="submit">regist</button>
      </Form>
      {actionData?.error && <p style={{ color: 'red' }}>{actionData.error}</p>}
    </div>
  );
}

export async function action({ request }) {
  const url = `${apiUrl}/regist`;
  const formData = await request.formData();
  const id = formData.get('id');
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirm-password');
  const name = formData.get('name');
  if (password !== confirmPassword) {
    return { error: 'check your password' };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, email, password, name }),
  });

  if (!response.ok) {
    const error = await response.json();
    return { error: error.message };
  }

  return redirect('/notes');
}
